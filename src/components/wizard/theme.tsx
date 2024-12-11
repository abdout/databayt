// ThemeSelector.tsx
"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { useConfig } from "@/hooks/use-config";

// Make sure Customizer doesn't cause unnecessary re-renders
import CustomizerUI from "./cutomizer";
const MemoizedCustomizer = React.memo(CustomizerUI);

// type ThemeColor =
//   | "zinc"
//   | "red"
//   | "orange"
//   | "green"
//   | "blue"
//   | "yellow"
//   | "violet";

interface ThemeColors {
  [key: string]: string;
}

const THEME_COLORS: ThemeColors = {
  zinc: "#111111",
  red: "#EF4444",
  orange: "#F97316",
  green: "#22C55E",
  blue: "#3B82F6",
  yellow: "#EAB308",
  violet: "#8B5CF6",
};

interface StyleProps {
  backgroundColor?: string;
  borderRadius?: string;
  borderColor?: string;
  color?: string;
  borderWidth?: string;
  borderStyle?: string;
}

const ThemeSelector = () => {
  const [config] = useConfig();

  const getPrimaryButtonStyle = React.useMemo<StyleProps>(
    () => ({
      backgroundColor: THEME_COLORS[config.theme],
      borderRadius: `${config.radius * 16}px`,
      color: "#FFFFFF",
    }),
    [config.theme, config.radius]
  );

  return (
    <div className="w-full -mt-4">
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-2xl md:text-5xl flex items-center justify-center pb-7">
        Custom Theme!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40 -mx-20">
        <div className="flex items-center gap-2">
          {/* Drawer Trigger (Mobile) */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button size="sm" className="md:hidden">
                Customize
              </Button>
            </DrawerTrigger>
            <DrawerContent className="p-6 pt-0">
              <MemoizedCustomizer />
            </DrawerContent>
          </Drawer>

          {/* Popover Trigger (Desktop) */}
          <div className="hidden items-center md:flex">
            {/* <Popover>
              <PopoverTrigger asChild>
                <Button size="sm">Customize</Button>
              </PopoverTrigger> */}
              <div
                
                className="z-40 w-[340px]  p-6"
              >
                <MemoizedCustomizer />
              </div>
            {/* </Popover> */}
          </div>
        </div>

        <Card
          style={
            {
              "--theme-color": THEME_COLORS[config.theme],
              "--theme-radius": `${config.radius * 16}px`,
            } as React.CSSProperties
          }
          className="rounded-[var(--theme-radius)] h-[22rem]"
        >
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button
                variant="outline"
                className="rounded-[var(--theme-radius)]"
              >
                <Icons.gitHub className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="rounded-[var(--theme-radius)]"
              >
                <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  />
                </svg>
                Google
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className={cn(
                  "appearance-none", // Remove browser default styling
                  "border border-gray-300", // Default border
                  "rounded-[var(--theme-radius)]", // Custom radius
                  "focus:border-[var(--theme-color)]", // Your custom theme border on focus
                  "focus:outline-none", // Remove browser focus outline
                  "focus:ring-0", // Remove Tailwind's ring utility
                  "focus:ring-offset-0", // Ensure no ring offset
                  "focus:shadow-none" // Ensure no focus shadow is applied
                )}
                style={{
                  boxShadow: "none", // Remove any browser box-shadow
                  outline: "none", // Completely disable outline
                }}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" style={getPrimaryButtonStyle}>
              Create account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default React.memo(ThemeSelector);
