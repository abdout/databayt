import React from "react";
import { useAnimationControls } from "framer-motion";

const Stack = () => {
  // Animation controls initialized at the top level of the component
  const controls = useAnimationControls();

  return (
    <div className="container space-y-6 dark:bg-transparent">
      <div className="mx-auto flex max-w-full flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Stack</h2>
        <p className="max-w-[65%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-7">
          Databayt leverages state-of-the-art technology to craft innovative and modern applications, delivering seamless performance, scalability, and a superior user experience.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {/* Next.js Card */}
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M11.572 0..." />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Next.js 15</h3>
              <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
            </div>
          </div>
        </div>

        {/* React Card */}
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M14.23 12.004..." />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">React 19</h3>
              <p className="text-sm text-muted-foreground">
                Server and Client Components.
                <br />
                Use hooks.
              </p>
            </div>
          </div>
        </div>

        {/* Database Card */}
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M0 12..." />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Database</h3>
              <p className="text-sm text-muted-foreground">
                ORM using Prisma and deployed on MongoDB.
              </p>
            </div>
          </div>
        </div>

        {/* Components Card */}
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M12.001 4.8..." />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Components</h3>
              <p className="text-sm text-muted-foreground">
                UI components built using Radix UI and styled with Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        {/* Authentication Card */}
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M12 22..." />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Authentication using Auth.js and middlewares.
              </p>
            </div>
          </div>
        </div>

        {/* Subscriptions Card */}
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M13.976 9.15..." />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Subscriptions</h3>
              <p className="text-sm text-muted-foreground">
                Free and paid subscriptions using <br /> Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
