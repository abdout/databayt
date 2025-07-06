'use client';

import React from "react";
import { Button } from "@/components/ui/button";
// import Marquee from "@/components/ui/marquee";
// import { cn } from "@/lib/utils";
// import {
//   KeyRound,
//   FileText,
//   LayoutDashboard,
//   Globe2,
//   Calculator,
//   Workflow,
//   Clock,
//   Calendar,
//   MessageSquare,
//   Bell,
//   Edit3,
//   BookOpen,
//   Book,
//   Newspaper,
//   Users,
//   Mail,
//   FileSearch,
//   Settings,
//   ScrollText,
//   UserCheck,
//   Building2,
//   Download,
//   Share2,
//   Printer,
//   Database,
//   Lock,
// } from "lucide-react";
import Link from "next/link";
import SectionHeading from "./atom/section-heading";
import { CompactMarqueeDemo } from "../../public/templates/marquee/demo";
import { useLocale } from "@/hooks/use-locale";

// const features = [
//   { name: "Authentication", icon: KeyRound },
//   { name: "Document Processing", icon: FileText },
//   { name: "Analytics Dashboard", icon: LayoutDashboard },
//   { name: "Landing Page", icon: Globe2 },
//   { name: "Accounting System", icon: Calculator },
//   { name: "Workflow Automation", icon: Workflow },
//   { name: "Attendance Tracking", icon: Clock },
//   { name: "Appointment Booking", icon: Calendar },
//   { name: "Live Chat", icon: MessageSquare },
//   { name: "Notification System", icon: Bell },
//   { name: "Collaborative Editor", icon: Edit3 },
//   { name: "Serivce Manual", icon: BookOpen },
//   { name: "Documentation", icon: Book },
//   { name: "Blog Management", icon: Newspaper },
//   { name: "Team Management", icon: Users },
//   { name: "Email Integration", icon: Mail },
//   { name: "Document Search", icon: FileSearch },
//   { name: "System Settings", icon: Settings },
//   { name: "Report Generation", icon: ScrollText },
//   { name: "User Management", icon: UserCheck },
//   { name: "Department Control", icon: Building2 },
//   { name: "File Manager", icon: Download },
//   { name: "Sharing System", icon: Share2 },
//   { name: "Print Service", icon: Printer },
//   { name: "Database Backup", icon: Database },
//   { name: "Access Control", icon: Lock },
// ];

// const midPoint = Math.ceil(features.length / 2);
// const firstRow = features.slice(0, midPoint);
// const secondRow = features.slice(midPoint);

// const FeatureCard = ({
//   icon: Icon,
//   name,
// }: {
//   icon: React.ElementType;
//   name: string;
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative min-w-fit cursor-pointer overflow-hidden rounded-xl border p-4",
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <div className="flex flex-col items-start gap-3">
//         <Icon size={24} className="text-gray-900 dark:text-gray-100" />
//         <figcaption className="text-base font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
//           {name}
//         </figcaption>
//       </div>
//     </figure>
//   );
// };

const Wizard = () => {
  const { t } = useLocale();
  
  return (
    <section className="flex items-center justify-center flex-col">
      
        <SectionHeading 
          title={t("components.wizard.title")} 
          description={t("components.wizard.description")}
        />
       

        {/* <div className="relative w-full max-w-5xl lg:max-w-7xl h-[250px] overflow-hidden">
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
        </div> */}
        <CompactMarqueeDemo />

        <Link href="/wizard" className="relative z-10 mt-8">
          <Button size="lg" className="px-8">
            {t("components.wizard.launchButton")}
          </Button>
        </Link>
      
    </section>
  );
};

export default Wizard;
