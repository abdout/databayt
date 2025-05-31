# Marquee Component Setup Guide

This guide shows how to set up the marquee component in a new project using separate CSS files imported into `globals.css` (without using `tailwind.config.ts`).

## Project Structure

```
src/
├── app/
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── marquee.tsx
│   │   └── button.tsx
│   └── wizard.tsx
├── styles/
│   ├── marquee.css
│   ├── animations.css (optional)
│   └── components.css (optional)
└── lib/
    └── utils.ts
```

## Step 1: Create the Marquee Styles

Create `src/styles/marquee.css`:

```css
/* Marquee Animation Keyframes */
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-reverse {
  from {
    transform: translateX(calc(-100% - var(--gap)));
  }
  to {
    transform: translateX(0);
  }
}

/* Base Marquee Classes */
.marquee {
  animation: marquee var(--duration) infinite linear;
}

.marquee-reverse {
  animation: marquee-reverse var(--duration) infinite linear;
}

/* Interactive States */
.marquee-pause-on-hover:hover .marquee,
.marquee-pause-on-hover:hover .marquee-reverse {
  animation-play-state: paused;
}

/* Default Variables */
.marquee-container {
  --gap: 1rem;
  --duration: 40s;
}

/* Responsive Durations */
@media (max-width: 768px) {
  .marquee-container {
    --duration: 30s;
  }
}

@media (max-width: 480px) {
  .marquee-container {
    --duration: 20s;
  }
}

/* Utility Classes */
.marquee-slow {
  --duration: 60s;
}

.marquee-fast {
  --duration: 20s;
}

.marquee-gap-sm {
  --gap: 0.5rem;
}

.marquee-gap-lg {
  --gap: 2rem;
}
```

## Step 2: Update globals.css

Add the import to your `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import custom styles */
@import '../styles/marquee.css';

/* Your existing global styles below */
@layer base {
  :root {
    --background: 0 0% 98.8%;
    --foreground: 240 10% 3.9%;
    /* ... other CSS variables */
  }
}

/* Rest of your global styles */
```

## Step 3: Create the Marquee Component

Create `src/components/ui/marquee.tsx`:

```tsx
import { cn } from "@/lib/utils";
import React from "react";

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
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        "marquee-container",
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              },
              !vertical ? "marquee" : "marquee-vertical",
              pauseOnHover && "marquee-pause-on-hover",
              reverse && "marquee-reverse"
            )}
            style={{
              gap: "var(--gap)",
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
```

## Step 4: Create Utils Function (if not exists)

Create `src/lib/utils.ts`:

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Step 5: Install Required Dependencies

```bash
pnpm install clsx tailwind-merge lucide-react
```

## Step 6: Create Your Wizard Component

Create `src/components/wizard.tsx`:

```tsx
import React from "react";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import {
  KeyRound,
  FileText,
  LayoutDashboard,
  // ... other icons
} from "lucide-react";

const features = [
  { name: "Authentication", icon: KeyRound },
  { name: "Document Processing", icon: FileText },
  { name: "Analytics Dashboard", icon: LayoutDashboard },
  // ... other features
];

const FeatureCard = ({ icon: Icon, name }: { icon: React.ElementType; name: string }) => {
  return (
    <figure className={cn(
      "relative min-w-fit cursor-pointer overflow-hidden rounded-xl border p-4",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}>
      <div className="flex flex-col items-start gap-3">
        <Icon size={24} className="text-gray-900 dark:text-gray-100" />
        <figcaption className="text-base font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

const Wizard = () => {
  const midPoint = Math.ceil(features.length / 2);
  const firstRow = features.slice(0, midPoint);
  const secondRow = features.slice(midPoint);

  return (
    <div className="space-y-6">
      <div className="mx-auto flex max-w-full flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Wizard
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Prototype a business automation solution using wizard. Choose the features and design,
          and get real-time cost and delivery estimates.
        </p>

        <div className="relative w-full max-w-5xl lg:max-w-7xl h-[250px] overflow-hidden">
          <div className="absolute inset-0">
            <div className="relative h-full flex flex-col justify-center gap-4">
              <Marquee pauseOnHover className="[--duration:40s]">
                {firstRow.map((feature) => (
                  <FeatureCard key={feature.name} {...feature} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:40s] -mt-4">
                {secondRow.map((feature) => (
                  <FeatureCard key={feature.name} {...feature} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </div>

        <Button size="lg" className="px-8 mt-8">
          Launch Wizard
        </Button>
      </div>
    </div>
  );
};

export default Wizard;
```

## Step 7: Additional CSS Files (Optional)

You can create additional CSS files for better organization:

### `src/styles/animations.css`:
```css
/* Additional animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}
```

### `src/styles/components.css`:
```css
/* Component-specific styles */
.feature-card {
  transition: all 0.2s ease-in-out;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

Then import them in `globals.css`:
```css
@import '../styles/marquee.css';
@import '../styles/animations.css';
@import '../styles/components.css';
```

## Usage Examples

### Basic Marquee:
```tsx
<Marquee>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Marquee>
```

### Reverse with Pause on Hover:
```tsx
<Marquee reverse pauseOnHover className="[--duration:30s]">
  {items.map(item => <Card key={item.id} {...item} />)}
</Marquee>
```

### Custom Speed:
```tsx
<Marquee className="marquee-fast [--gap:2rem]">
  {content}
</Marquee>
```

## Benefits of This Approach

1. **No config dependencies** - Works without `tailwind.config.ts`
2. **Modular** - Easy to maintain separate CSS files
3. **Customizable** - Easy to override CSS variables
4. **Responsive** - Built-in responsive behavior
5. **Performance** - CSS animations are hardware accelerated
6. **Flexible** - Easy to add new animation variants

## Troubleshooting

1. **Animation not working**: Ensure CSS is imported in correct order
2. **Styling conflicts**: Check CSS specificity and Tailwind purging
3. **Performance issues**: Reduce repeat count or optimize content
4. **Responsive issues**: Test CSS custom properties on different screens 