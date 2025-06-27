import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  const user = await checkUser();

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="./">
          <Image
            src="/logo-single.png"
            alt="Logo"
            width={200}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-2">
          <SignedIn>
            {user?.role === "UNASSIGNED" && (
              <Link href="/onboarding">
                <Button
                  variant="outline"
                  className="hidder md:inline-flex items-center gap-2"
                >
                  <user className="h-4 w-4" />
                  Profile
                </Button>
                <Button variant={"ghost"} className="md:hidden w-10 h-10 p-0">
                  <User className="h-4 w-4" />
                  {console.log("User:", user)}
                </Button>
              </Link>
            )}
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant="primary">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
