"use client";

import { useConfig } from "@/hooks/use-config";
import { useTheme } from "next-themes";
import React from "react";
import { ThemeWrapper } from "./theme-wrapper";
import { Button } from "../ui/button";
import { Check, Moon, Repeat, Sun } from "lucide-react";
import { Label } from "../ui/label";
import { baseColors } from "./base-color";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const CustomizerUI = () => {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme: setMode, resolvedTheme: mode } = useTheme();
  const [config, setConfig] = useConfig();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeWrapper
      defaultTheme="zinc"
      className="flex flex-col space-y-4 md:space-y-6 -mt-14"
    >
      <div className="flex items-start pt-4 md:pt-0">
        <div className="space-y-1 pr-2">
          <div className="md:hidden font-semibold leading-none tracking-tight">
            Theme Customizer
          </div>
          <div className="md:hidden text-xs text-muted-foreground">
            Customize your components colors.
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto rounded-[0.5rem] md:hidden"
          onClick={() => {
            setConfig({
              ...config,
              theme: "zinc",
              radius: 0.5,
            });
          }}
        >
          <Repeat />
          <span className="sr-only">Reset</span>
        </Button>
      </div>
      <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
        {/* Color Section */}
        <div className="space-y-1.5">
          <Label className="text-xs">Color</Label>
          <div className="grid grid-cols-3 gap-2">
            {baseColors
              .filter(
                (theme) =>
                  !["slate", "stone", "gray", "neutral"].includes(theme.name)
              )
              .map((theme) => {
                const isActive = config.theme === theme.name;

                return mounted ? (
                  <Button
                    variant={"outline"}
                    size="sm"
                    key={theme.name}
                    onClick={() => {
                      setConfig({
                        ...config,
                        theme: theme.name,
                      });
                    }}
                    className={cn(
                      "justify-start",
                      isActive && "border-2 border-primary"
                    )}
                    style={
                      {
                        "--theme-primary": `hsl(${
                          theme?.activeColor[mode === "dark" ? "dark" : "light"]
                        })`,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className={cn(
                        "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
                      )}
                    >
                      {isActive && <Check className="h-4 w-4 text-white" />}
                    </span>
                    {theme.label}
                  </Button>
                ) : (
                  <Skeleton className="h-8 w-full" key={theme.name} />
                );
              })}
          </div>
        </div>
        {/* Radius Section */}
        <div className="space-y-1.5">
          <Label className="text-xs">Radius</Label>
          <div className="grid grid-cols-5 gap-2">
            {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
              return (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={value}
                  onClick={() => {
                    setConfig({
                      ...config,
                      radius: parseFloat(value),
                    });
                  }}
                  className={cn(
                    config.radius === parseFloat(value) &&
                      "border-2 border-primary"
                  )}
                >
                  {value}
                </Button>
              );
            })}
          </div>
        </div>
        {/* Mode Section */}
        <div className="space-y-1.5">
          <Label className="text-xs">Mode</Label>
          <div className="grid grid-cols-3 gap-2">
            {mounted ? (
              <>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => setMode("light")}
                  className={cn(mode === "light" && "border-2 border-primary")}
                >
                  <Sun className="mr-1 -translate-x-1" />
                  Light
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  onClick={() => setMode("dark")}
                  className={cn(mode === "dark" && "border-2 border-primary")}
                >
                  <Moon className="mr-1 -translate-x-1" />
                  Dark
                </Button>
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </>
            )}
          </div>
        </div>
      </div>
    </ThemeWrapper>
  );
};

export default CustomizerUI

// const Customizer = () => {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <>
//       {/* Render the customizer UI directly for large screens */}
//       <div className="hidden md:block">
//         <CustomizerUI />
//       </div>

//       {/* Render the button and drawer for smaller screens */}
//       <div className="block md:hidden">
//         <Dialog.Root open={open} onOpenChange={setOpen}>
//           <Dialog.Trigger asChild>
//             <Button>Customize</Button>
//           </Dialog.Trigger>
//           <Dialog.Portal>
//             <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
//             <Dialog.Content
//               className="fixed right-0 top-0 h-full w-full max-w-md bg-white p-4 shadow-lg z-50"
//             >
//               <CustomizerUI />
//               <Dialog.Close asChild>
//                 <Button variant="ghost" className="absolute top-2 right-2">
//                   Close
//                 </Button>
//               </Dialog.Close>
//             </Dialog.Content>
//           </Dialog.Portal>
//         </Dialog.Root>
//       </div>
//     </>
//   );
// };

// export default Customizer;
