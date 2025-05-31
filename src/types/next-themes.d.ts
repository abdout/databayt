declare module "next-themes" {
    import { ReactNode } from "react";
  
    export interface ThemeProviderProps {
      children: ReactNode;
      attribute?: string;
      defaultTheme?: string;
      enableSystem?: boolean;
      forcedTheme?: string;
      storageKey?: string;
      themes?: string[];
      value?: string;
    }
  
    export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
  
    export const useTheme: () => {
      theme: string;
      setTheme: (theme: string) => void;
      forcedTheme?: string;
      resolvedTheme?: string;
      systemTheme?: string;
    };
  }
  