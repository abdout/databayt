import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/hooks/use-locale";

const Price = () => {
  const { t } = useLocale();
  
  return (
    <div className="flex flex-col md:flex-row rtl:md:flex-row-reverse items-center justify-center py-10 md:px-6 gap-10">
      <Image
        src="/trial.png"
        alt="Trial Image"
        width={250}
        height={250}
        className="rounded-md"
      />
      <Card className="shadow-none border-none bg-background p-6 max-w-md w-full rtl:p-8">
        <CardContent className="flex flex-col items-center text-center">
          <h4 className="text-7xl font-bold mb-4 rtl:font-black">$10</h4>
          <p className="text-sm font-medium mb-2 rtl:font-semibold rtl:text-base">{t("pages.automated.perMonth")}</p>
          <p className="text-sm text-muted-foreground mb-2 rtl:text-base rtl:leading-relaxed">
            {t("pages.automated.noCard")}
          </p>
          <p className="text-sm text-muted-foreground mb-4 rtl:text-base">{t("pages.automated.easyCancel")}</p>
          <Button>{t("pages.automated.startTrial")}</Button>
        </CardContent>

        {/* <CardFooter className="flex flex-col gap-2 mt-6">
          <p className="text-sm font-medium">What's included:</p>
          <ul className="text-sm text-muted-foreground list-disc list-inside">
            <li>Unlimited access to all features</li>
            <li>Priority customer support</li>
            <li>Cancel anytime</li>
          </ul>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default Price;
