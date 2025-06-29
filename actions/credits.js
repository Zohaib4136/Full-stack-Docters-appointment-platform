"use server";

import { auth } from "@clerk/nextjs/server";
import { format } from "date-fns";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/prisma";
const PLAN_CREDITS = {
  free_user: 2,
  standard: 10,
  premium: 24,
};

const APPOINTMENT_CREDIT_COST = 2;

export async function checkAndAllocateCredits(user) {
  try {
    if (!user) {
      return null;
    }

    if (user.role !== "PATIENT") {
      return user;
    }

    const { has } = await auth();
    const hasBasic = has({ plan: "free_user" });
    const hasStandard = has({ plan: "standard" });
    const hasPremium = has({ plan: "premium" });

    let currentPlan = null;
    let creditsToAllocate = 0;

    if (hasPremium) {
      currentPlan = "premium";
      creditsToAllocate = PLAN_CREDITS.premium;
    } else if (hasStandard) {
      currentPlan = "standard";
      creditsToAllocate = PLAN_CREDITS.standard;
    } else if (hasBasic) {
      currentPlan = "free_user";
      creditsToAllocate = PLAN_CREDITS.free_user;
    }

    if (!currentPlan) {
      return user;
    }

    const currentMonth = format(new Date(), "yyyy-MM");

    const allocationThisMonth = user.transactions.find((txn) => {
      const txnMonth = format(new Date(txn.createdAt), "yyyy-MM");
      return (
        txn.type === "CREDIT_ALLOCATION" &&
        txnMonth === currentMonth &&
        txn.packageId === currentPlan
      );
    });

    if (allocationThisMonth) {
      return user;
    }

    const updatedUser = await db.$transaction(async (tx) => {
      await tx.creditTransaction.create({
        data: {
          userId: user.id,
          amount: creditsToAllocate,
          type: "CREDIT_ALLOCATION",
          pakageId: currentPlan,
        },
      });

      // Update user's credits
      const updateduser = await tx.user.update({
        where: { id: user.id },
        data: {
          credits: {
            increment: creditsToAllocate,
          },
        },
      });

      return updateduser;
    });

    revalidatePath("/doctors");
    revalidatePath("/appointments");

    return updatedUser;
  } catch (error) {
    console.error("Error allocating credits:", error.message);
    return null;
  }
}
