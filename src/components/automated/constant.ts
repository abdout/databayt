import { Automated } from './type';

export const automated: Automated[] = [
  {
    id: "company",
    name: "Company",
    description: "- Flow, finance and docs automation",
    body: "A fully-featured company management solution that helps businesses streamline their operations. The platform includes modules for employee management, project tracking, financial reporting, and advanced analytics. Built with modern technologies to ensure scalability and performance.",
    src: "/automated/co.png",
    images: [
      "/automated/company/hero.png",
      "/automated/company/docs-dark.png",
      "/automated/company/shop.png",
      "/automated/company/auth-dark.png",
      "/automated/company/task-dark.png"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Neon",
      "Prisma",
      "Auth.js",
      "Shadcn/ui",
      "TailwindCSS",
      "Zod",
      "Framer Motion",
      "Stripe",
      "ImageKit",
      "Resend",
      "Twilio",
      
    ],
    features: [
      "Employee management",
      "Project tracking",
      "Financial reporting",
      "Real-time analytics",
      "Role-based access control"
    ],
    price: 999,
    livePreview: "https://co.databayt.org",
    github: "https://github.com/abdout/company-underway"
  },
  {
    id: "health",
    name: "Healthcare Management Platform",
    description: "Digital health platform for managing patient records and appointments.",
    body: "A HIPAA-compliant healthcare management system designed to streamline medical practice operations. Features include patient record management, appointment scheduling, billing integration, and secure telemedicine capabilities.",
    src: "/automated/alshifaa.png",
    images: [
      "/automated/alshifaa.png",
      "/automated/alshifaa-dashboard.png",
      "/automated/alshifaa-appointments.png"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Auth.js",
      "Shadcn/ui",
      "TailwindCSS",
      "Stripe",
      "Framer Motion"
    ],
    features: [
      "Patient record management",
      "Appointment scheduling",
      "Billing integration",
      "Telemedicine capabilities",
      "HIPAA compliance"
    ],
    price: 1299,
    livePreview: "https://health.databayt.org",
    github: "https://github.com/abdout/health-underway"
  },

  {
    id: "auto",
    name: "Auto Shop Management",
    description: "Complete solution for automotive service centers and garages.",
    body: "An all-in-one automotive shop management system featuring service scheduling, customer management, inventory tracking, and billing. Perfect for auto repair shops looking to modernize their operations.",
    src: "/automated/auto.png",
    images: [
      "/automated/auto.png",
      "/automated/auto-service.png",
      "/automated/auto-inventory.png"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
      "Shadcn/ui",
      "TailwindCSS",
      "Stripe",
      "Framer Motion"
    ],
    features: [
      "Service scheduling",
      "Customer management",
      "Inventory tracking",
      "Billing system",
      "Parts ordering"
    ],
    price: 1499,
    livePreview: "https://auto.databayt.org",
    github: "https://github.com/abdout/auto-underway"
  },

  {
    id: "souq",
    name: "Souq",
    description: "Modern e-commerce solution with advanced features.",
    body: "A comprehensive e-commerce platform with product management, shopping cart, payment processing, and order tracking. Built for scalability and performance.",
    src: "/automated/souq.png",
    images: [
      "/automated/souq.png",
      "/automated/souq-products.png",
      "/automated/souq-checkout.png"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Stripe",
      "Auth.js",
      "Shadcn/ui",
      "TailwindCSS",
      "Framer Motion"
    ],
    features: [
      "Product management",
      "Shopping cart",
      "Payment processing",
      "Order tracking",
      "Inventory management"
    ],
    price: 1699,
    livePreview: "https://souq.databayt.org",
    github: "https://github.com/abdout/ecommerce-underway"
  },

  {
    id: "public party",
    name: "Public Party Management",
    description: "Complete event planning and management solution.",
    body: "A comprehensive event management system for planning, organizing, and managing events of all sizes. Features include venue booking, attendee management, and ticketing.",
    src: "/automated/stamp.png",
    images: [
      "/automated/stamp.png",
      "/automated/stamp-events.png",
      "/automated/stamp-tickets.png"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Auth.js",
      "Shadcn/ui",
      "TailwindCSS",
      "Stripe",
      "Framer Motion"
    ],
    features: [
      "Event planning",
      "Venue booking",
      "Attendee management",
      "Ticketing system",
      "Payment processing"
    ],
    price: 1799,
    livePreview: "https://dome.databayt.org",
    github: "https://github.com/abdout/dome-underway"
  },

  {
    id: "restaurant",
    name: "Restaurant Management System",
    description: "Complete restaurant operations management platform.",
    body: "A full-featured restaurant management system with POS, inventory, staff management, and customer ordering. Perfect for restaurants looking to streamline operations.",
    src: "/automated/tomato.png",
    images: [
      "/automated/tomato.png",
      "/automated/tomato-pos.png",
      "/automated/tomato-kitchen.png"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Auth.js",
      "Shadcn/ui",
      "TailwindCSS",
      "Stripe",
      "Framer Motion"
    ],
    features: [
      "Point of sale",
      "Online ordering",
      "Kitchen display system",
      "Inventory management",
      "Staff management"
    ],
    price: 1599,
    livePreview: "https://rs.databayt.org",
    github: "https://github.com/abdout/restaurant-underway"
  },

  {
    id: "estate",
    name: "Real Estate Management System",
    description: "Property management and listing platform for real estate agencies.",
    body: "A complete real estate management solution for agencies and property managers. Includes property listings, tenant management, and maintenance tracking.",
    src: "/automated/key.png",
    images: [
      "/automated/real-estate.png",
      "/automated/real-estate-listings.png",
      "/automated/real-estate-management.png"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Auth.js",
      "Shadcn/ui",
      "TailwindCSS",
      "Stripe",
      "Framer Motion"
    ],
    features: [
      "Property listings",
      "Tenant management",
      "Maintenance tracking",
      "Payment processing",
      "Document management"
    ],
    price: 1799,
    livePreview: "https://estate.databayt.org",
    github: "https://github.com/abdout/estate-underway"
  },

  {
    id: "school",
    name: "Education Automation",
    description: "Comprehensive education management platform.",
    body: "A complete school management system with features for student management, attendance tracking, grade management, and parent communication.",
    src: "/automated/school.png",
    images: [
      "/automated/madrsa/1.png",
      "/automated/madrsa/2.png",
      "/automated/madrsa/3.png",
      "/automated/madrsa/4.png",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Auth.js",
      "Shadcn/ui",
      "TailwindCSS",
      "Zod",
      "Framer Motion"
    ],
    features: [
      "Student management",
      "Attendance tracking",
      "Grade management",
      "Parent portal",
      "Communication system"
    ],
    price: 1899,
    livePreview: "https://ed.databayt.org",
    github: "https://github.com/abdout/school-underway"
  }
];