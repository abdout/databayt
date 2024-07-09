import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button"; // Adjust the import path to where your Button component is located

const Action = () => {
  return (
    <div className="flex gap-8 items-center pt-4">
      <Button variant="outline" className="flex w-28 gap-1 py-2">
        <Icon icon={"system-uicons:check"} height="24" />
        اعتماد
      </Button>
      <Button variant="outline" className="flex w-28 justify-center items-center gap-2  py-2">
        <Icon icon={"fluent:edit-48-regular"} height="16" />
        تعديل
      </Button>
      <Button variant="outline" className="flex w-28 justify-center items-center gap-2  py-2">
        <Icon icon={"bi:send"} height="16" />
        ارسال
      </Button>
      <Button variant="outline" className="flex w-28 justify-center items-center gap-2  py-2">
        <Icon icon={"clarity:download-line"} height="18" />
        تنزيل
      </Button>
    </div>
  );
};

export default Action;