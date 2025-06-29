import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PricingTable } from "@clerk/nextjs";

const Pricing = () => {
  return (
    <Card className="border-emerald-900/30 shadow-lg bg-gradient-to-b from-emerald-950/30 to-transparent hover:border-emerald-700 transition-all duration-300">
      <CardContent className="p-6 md:p-8">
        <PricingTable
          checkoutProps={{
            appearance: {
              elements: {
                drawerRoot: {
                  zIndex: 9999,
                },
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default Pricing;
