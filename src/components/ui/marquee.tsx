import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 marquee-container",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        pauseOnHover && "marquee-pause-on-hover",
        className
      )}
      style={{
        "--gap": "1rem",
        "--duration": "40s",
        ...props.style,
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around gap-4",
              {
                "flex-row": !vertical,
                "flex-col": vertical,
              },
              // Apply the correct CSS animation classes
              vertical
                ? reverse
                  ? "marquee-vertical-reverse"
                  : "marquee-vertical"
                : reverse
                ? "marquee-reverse"
                : "marquee"
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
