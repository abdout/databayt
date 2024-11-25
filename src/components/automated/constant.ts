import { Project } from './type';

export const projects: Project[] = [
  {
    id: "company",
    name: "Modern Company Management System",
    description: "A comprehensive company management system with HR, finance, and project management capabilities.",
    body: "A fully-featured company management solution that helps businesses streamline their operations. The platform includes modules for employee management, project tracking, financial reporting, and advanced analytics. Built with modern technologies to ensure scalability and performance.",
    src: "/project/office.png",
    images: [
      "/project/office.png",
      "/project/office-dashboard.png",
      "/project/office-analytics.png"
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
      "Employee management",
      "Project tracking",
      "Financial reporting",
      "Real-time analytics",
      "Role-based access control"
    ],
    price: 999,
    livePreview: "https://company.example.com",
    github: "https://github.com/your-repo/company"
  },
  {
    id: "health",
    name: "Healthcare Management Platform",
    description: "Digital health platform for managing patient records and appointments.",
    body: "A HIPAA-compliant healthcare management system designed to streamline medical practice operations. Features include patient record management, appointment scheduling, billing integration, and secure telemedicine capabilities.",
    src: "/project/alshifaa.png",
    images: [
      "/project/alshifaa.png",
      "/project/alshifaa-patients.png",
      "/project/alshifaa-appointments.png"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Auth.js",
      "Shadcn/ui",
      "TailwindCSS",
      "Stripe",
      "Zod"
    ],
    features: [
      "Patient records management",
      "Appointment scheduling",
      "Billing integration",
      "Prescription management",
      "Telemedicine support"
    ],
    price: 1499,
    livePreview: "https://health.example.com",
    github: "https://github.com/your-repo/health"
  },
  {
    id: "automotive",
    name: "Automotive Dealership Platform",
    description: "Complete dealership management system with inventory and sales tracking.",
    body: "A comprehensive automotive dealership management system that handles inventory management, sales processing, customer relationships, and service scheduling. Includes advanced features for vehicle tracking and reporting.",
    src: "/project/auto.png",
    images: [
      "/project/auto.png",
      "/project/auto-inventory.png",
      "/project/auto-sales.png"
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
      "Inventory management",
      "Sales tracking",
      "Customer CRM",
      "Service scheduling",
      "Financial reporting"
    ],
    price: 1299,
    livePreview: "https://automotive.example.com",
    github: "https://github.com/your-repo/automotive"
  },
  {
    id: "souq",
    name: "Modern E-commerce Platform",
    description: "Feature-rich e-commerce solution with advanced payment processing.",
    body: "A modern e-commerce platform built for scalability and performance. Includes features for product management, order processing, customer management, and analytics.",
    src: "/project/souq.png",
    images: [
      "/project/souq.png",
      "/project/souq-products.png",
      "/project/souq-orders.png"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Auth.js",
      "Stripe",
      "Shadcn/ui",
      "TailwindCSS",
      "Zod"
    ],
    features: [
      "Product management",
      "Order processing",
      "Payment integration",
      "Customer accounts",
      "Analytics dashboard"
    ],
    price: 1999,
    livePreview: "https://souq.example.com",
    github: "https://github.com/your-repo/souq"
  },
  {
    id: "coffee",
    name: "Coffee Shop Management System",
    description: "Complete solution for managing coffee shop operations.",
    body: "An all-in-one management system for coffee shops, including order management, inventory tracking, and customer loyalty programs.",
    src: "/project/riche.png",
    images: [
      "/project/riche.png",
      "/project/riche-orders.png",
      "/project/riche-inventory.png"
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
      "Order management",
      "Inventory tracking",
      "Customer loyalty program",
      "Staff scheduling",
      "Sales reporting"
    ],
    price: 799,
    livePreview: "https://coffee.example.com",
    github: "https://github.com/your-repo/coffee"
  },
  {
    id: "restaurant",
    name: "Restaurant Management Platform",
    description: "Complete restaurant management solution with online ordering.",
    body: "A comprehensive restaurant management system including table management, online ordering, kitchen display system, and inventory management.",
    src: "/project/tomato.png",
    images: [
      "/project/tomato.png",
      "/project/tomato-orders.png",
      "/project/tomato-kitchen.png"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Auth.js",
      "Shadcn/ui",
      "TailwindCSS",
      "Stripe",
      "Zod"
    ],
    features: [
      "Table management",
      "Online ordering",
      "Kitchen display system",
      "Inventory management",
      "Staff management"
    ],
    price: 1599,
    livePreview: "https://restaurant.example.com",
    github: "https://github.com/your-repo/restaurant"
  },
  {
    id: "estate",
    name: "Real Estate Management System",
    description: "Property management and listing platform for real estate agencies.",
    body: "A complete real estate management solution for agencies and property managers. Includes property listings, tenant management, and maintenance tracking.",
    src: "/project/real-estate.png",
    images: [
      "/project/real-estate.png",
      "/project/real-estate-listings.png",
      "/project/real-estate-management.png"
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
    livePreview: "https://estate.example.com",
    github: "https://github.com/your-repo/estate"
  },
  {
    id: "madrsa",
    name: "Education Automation",
    description: "Comprehensive education management platform.",
    body: "A complete school management system with features for student management, attendance tracking, grade management, and parent communication.",
    src: "/project/school.png",
    images: [
      "/project/madrsa/1.png",
      "/project/madrsa/2.png",
      "/project/madrsa/3.png",
      "/project/madrsa/4.png",
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
    livePreview: "https://madrsa.example.com",
    github: "https://github.com/your-repo/madrsa"
  }
];