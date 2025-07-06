"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocale } from "@/hooks/use-locale";

const NewsLetter = () => {
  const { t } = useLocale();

  return (
    <div className="newsletter-container flex flex-col space-y-6 w-full max-w-[300px] items-center lg:items-start rtl:lg:items-end text-center lg:text-start rtl:lg:text-end">
      <h5 className="text-lg md:text-xl font-semibold rtl:font-bold rtl:text-xl text-center lg:text-start rtl:lg:text-end">
        {t("footer.newsletter.title")}
      </h5>
      <div className="flex flex-col space-y-4 w-full">
        <Input
          type="email"
          placeholder={t("footer.newsletter.placeholder")}
          className="w-full h-11 text-start rtl:text-end placeholder:text-start rtl:placeholder:text-end border-primary/20 focus:border-primary transition-colors"
        />
        <Button
          type="submit"
          size="default"
          className="w-full sm:w-auto sm:self-start rtl:sm:self-end px-8 py-2 font-medium rtl:font-semibold"
        >
          {t("footer.newsletter.subscribe")}
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;
