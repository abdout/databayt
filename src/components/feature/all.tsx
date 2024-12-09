import React from 'react';
import { cn } from '@/lib/utils';
import {
  // KeyRound,
  // FileText,
  // LayoutDashboard,
  // Globe2,
  // Calculator,
  // Workflow,
  // Clock,
  // Calendar,
  // MessageSquare,
  // Bell,
  Edit3,
  // BookOpen,
  // Book,
  Newspaper,
  Users,
  Mail,
  FileSearch,
  Settings,
  ScrollText,
  UserCheck,
  Building2,
  Download,
  Share2,
  Printer,
  Database,
  Lock,
} from 'lucide-react';
// import Link from 'next/link';

const features = [
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
  { name: "Collaborative Editor", icon: Edit3 },
//   { name: "Service Manual", icon: BookOpen },
//   { name: "Documentation", icon: Book },
  { name: "Blog Management", icon: Newspaper },
  { name: "Team Management", icon: Users },
  { name: "Email Integration", icon: Mail },
  { name: "Document Search", icon: FileSearch },
  { name: "System Settings", icon: Settings },
  { name: "Report Generation", icon: ScrollText },
  { name: "User Management", icon: UserCheck },
  { name: "Department Control", icon: Building2 },
  { name: "File Manager", icon: Download },
  { name: "Sharing System", icon: Share2 },
  { name: "Print Service", icon: Printer },
  { name: "Database Backup", icon: Database },
  { name: "Access Control", icon: Lock }
];

const FeatureCard = ({
  icon: Icon,
  name
}: {
  icon: React.ElementType;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-xl border p-4 flex flex-col items-start justify-start gap-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <Icon size={24} className="text-gray-900 dark:text-gray-100" />
      <figcaption className="text-base font-medium text-gray-900 dark:text-gray-100">
        {name}
      </figcaption>
    </figure>
  );
};

const AllFeatures = () => {
  return (
    <div className="relative">
      <div className="mx-auto flex max-w-full flex-col ">
        {/* <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Wizard
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Prototype a business automation solution using wizard. Choose the features and design,<br /> and get real-time cost and delivery estimates.
        </p> */}
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-2xl md:text-4xl pb-2">
        Feature
          </h2>
          <p className="max-w-[65%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-7">
            End to end features you would like.
          </p>

        <div className="">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <FeatureCard key={feature.name} {...feature} />
            ))}
          </div>
        </div>

        {/* <Link href="/wizard" className="relative z-10 mt-8">
          <Button size="lg" className="px-8">
            Launch Wizard
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

export default AllFeatures;