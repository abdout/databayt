export type Template = {
  id: string;
  name: string;
  imagePath: string;
  description: string;
  businessTypes: string[];
};

export type Feature = {
  id: string;
  name: string;
  price: number;
  time: number;
  popularity?: number;
  description: string;
};

export type Business = {
  id: string;
  name: string;
  popularity: number;
  features: Feature[];
  description: string;
};

export type WizardSelections = {
  business: string;
  features: string[];
  template: string;
};

export const businesses: Business[] = [
  {
    id: "clinic",
    name: "Clinic",
    popularity: 10,
    description: "Healthcare management system for medical practices",
    features: [
      {
        id: "patient-portal",
        name: "Patient Portal",
        price: 50,
        time: 4,
        popularity: 8,
        description:
          "Secure patient access to medical records and appointments",
      },
      {
        id: "appointment-booking",
        name: "Appointment Booking",
        price: 30,
        time: 3,
        popularity: 10,
        description: "Online scheduling system for patients",
      },
      {
        id: "medical-records",
        name: "Medical Records",
        price: 60,
        time: 5,
        popularity: 6,
        description: "Electronic health records management",
      },
      {
        id: "prescription-management",
        name: "Prescription Management",
        price: 40,
        time: 4,
        popularity: 7,
        description: "Digital prescription writing and tracking",
      },
      {
        id: "lab-integration",
        name: "Lab Integration",
        price: 45,
        time: 4,
        popularity: 6,
        description: "Connect with laboratory systems for test results",
      },
      {
        id: "billing",
        name: "Medical Billing",
        price: 55,
        time: 5,
        popularity: 9,
        description: "Insurance and patient billing management",
      },
      {
        id: "telemedicine",
        name: "Telemedicine",
        price: 70,
        time: 6,
        popularity: 9,
        description: "Virtual consultation platform",
      },
      {
        id: "inventory-management",
        name: "Medical Inventory",
        price: 35,
        time: 3,
        popularity: 7,
        description: "Track medical supplies and equipment",
      },
      {
        id: "analytics",
        name: "Practice Analytics",
        price: 40,
        time: 4,
        popularity: 6,
        description: "Business intelligence for medical practices",
      },
      {
        id: "patient-communication",
        name: "Patient Communication",
        price: 25,
        time: 2,
        popularity: 8,
        description: "Automated reminders and notifications",
      },
    ],
  },
  {
    id: "restaurant",
    name: "Restaurant",
    popularity: 9,
    description: "Complete restaurant management solution",
    features: [
      {
        id: "pos",
        name: "Point of Sale",
        price: 45,
        time: 4,
        popularity: 9,
        description: "Modern POS system for order management",
      },
      {
        id: "inventory",
        name: "Inventory Management",
        price: 35,
        time: 3,
        popularity: 8,
        description: "Track and manage restaurant inventory",
      },
      {
        id: "online-ordering",
        name: "Online Ordering",
        price: 40,
        time: 4,
        popularity: 9,
        description: "Custom branded online ordering system",
      },
      {
        id: "reservation",
        name: "Reservation System",
        price: 30,
        time: 3,
        popularity: 7,
        description: "Table reservation and management",
      },
      {
        id: "kitchen-display",
        name: "Kitchen Display",
        price: 35,
        time: 3,
        popularity: 8,
        description: "Digital kitchen order management",
      },
      {
        id: "menu-management",
        name: "Menu Management",
        price: 25,
        time: 2,
        popularity: 7,
        description: "Digital menu creation and updates",
      },
      {
        id: "loyalty-program",
        name: "Loyalty Program",
        price: 30,
        time: 3,
        popularity: 7,
        description: "Customer rewards and loyalty tracking",
      },
      {
        id: "staff-scheduling",
        name: "Staff Scheduling",
        price: 25,
        time: 2,
        popularity: 6,
        description: "Employee shift management",
      },
      {
        id: "analytics",
        name: "Restaurant Analytics",
        price: 35,
        time: 3,
        popularity: 7,
        description: "Business performance tracking",
      },
      {
        id: "delivery-management",
        name: "Delivery Management",
        price: 40,
        time: 4,
        popularity: 8,
        description: "Delivery order tracking and routing",
      },
    ],
  },
  {
    id: "retail",
    name: "Retail",
    popularity: 9,
    description: "Modern retail management platform",
    features: [
      {
        id: "pos",
        name: "Point of Sale",
        price: 40,
        time: 3,
        popularity: 9,
        description: "Retail POS with barcode scanning",
      },
      {
        id: "inventory",
        name: "Inventory Management",
        price: 45,
        time: 4,
        popularity: 9,
        description: "Stock tracking and management",
      },
      {
        id: "ecommerce",
        name: "E-commerce Integration",
        price: 50,
        time: 5,
        popularity: 8,
        description: "Online store with inventory sync",
      },
      {
        id: "customer-management",
        name: "Customer Management",
        price: 35,
        time: 3,
        popularity: 7,
        description: "Customer database and history",
      },
      {
        id: "loyalty-program",
        name: "Loyalty Program",
        price: 30,
        time: 3,
        popularity: 7,
        description: "Customer rewards system",
      },
      {
        id: "supplier-management",
        name: "Supplier Management",
        price: 35,
        time: 3,
        popularity: 6,
        description: "Vendor relationship management",
      },
      {
        id: "analytics",
        name: "Retail Analytics",
        price: 40,
        time: 4,
        popularity: 7,
        description: "Sales and inventory analytics",
      },
      {
        id: "employee-management",
        name: "Employee Management",
        price: 35,
        time: 3,
        popularity: 6,
        description: "Staff scheduling and performance",
      },
    ],
  },
  {
    id: "salon",
    name: "Salon",
    popularity: 8,
    description: "Salon and spa management system",
    features: [
      {
        id: "appointment-booking",
        name: "Appointment Booking",
        price: 35,
        time: 3,
        popularity: 9,
        description: "Online booking system",
      },
      {
        id: "pos",
        name: "Point of Sale",
        price: 40,
        time: 3,
        popularity: 8,
        description: "Payment processing and retail",
      },
      {
        id: "customer-management",
        name: "Customer Management",
        price: 30,
        time: 2,
        popularity: 7,
        description: "Client profiles and history",
      },
      {
        id: "inventory",
        name: "Inventory Management",
        price: 35,
        time: 3,
        popularity: 7,
        description: "Product and supply tracking",
      },
      {
        id: "staff-scheduling",
        name: "Staff Scheduling",
        price: 30,
        time: 2,
        popularity: 8,
        description: "Employee schedule management",
      },
      {
        id: "loyalty-program",
        name: "Loyalty Program",
        price: 25,
        time: 2,
        popularity: 6,
        description: "Customer rewards system",
      },
      {
        id: "marketing",
        name: "Marketing Tools",
        price: 30,
        time: 3,
        popularity: 6,
        description: "Email and SMS marketing",
      },
    ],
  },
  {
    id: "fitness",
    name: "Fitness",
    popularity: 8,
    description: "Gym and fitness center management platform",
    features: [
      {
        id: "membership-management",
        name: "Membership Management",
        price: 45,
        time: 4,
        popularity: 9,
        description: "Member profiles and subscriptions",
      },
      {
        id: "class-scheduling",
        name: "Class Scheduling",
        price: 35,
        time: 3,
        popularity: 8,
        description: "Fitness class management",
      },
      {
        id: "trainer-booking",
        name: "Trainer Booking",
        price: 30,
        time: 3,
        popularity: 7,
        description: "Personal trainer scheduling",
      },
      {
        id: "access-control",
        name: "Access Control",
        price: 40,
        time: 4,
        popularity: 8,
        description: "Member check-in system",
      },
      {
        id: "billing",
        name: "Billing Management",
        price: 35,
        time: 3,
        popularity: 7,
        description: "Payment processing",
      },
      {
        id: "equipment-tracking",
        name: "Equipment Tracking",
        price: 25,
        time: 2,
        popularity: 6,
        description: "Gym equipment management",
      },
      {
        id: "member-app",
        name: "Member Mobile App",
        price: 50,
        time: 5,
        popularity: 8,
        description: "Custom branded mobile app",
      },
    ],
  },
  {
    id: "hotel",
    name: "Hotel",
    popularity: 9,
    description: "Hotel management and booking system",
    features: [
      {
        id: "reservation",
        name: "Reservation System",
        price: 50,
        time: 5,
        popularity: 9,
        description: "Room booking management",
      },
      {
        id: "check-in",
        name: "Check-in/out System",
        price: 40,
        time: 4,
        popularity: 8,
        description: "Guest processing system",
      },
      {
        id: "housekeeping",
        name: "Housekeeping",
        price: 35,
        time: 3,
        popularity: 7,
        description: "Room maintenance tracking",
      },
      {
        id: "billing",
        name: "Billing System",
        price: 45,
        time: 4,
        popularity: 8,
        description: "Payment processing",
      },
      {
        id: "concierge",
        name: "Concierge Services",
        price: 30,
        time: 3,
        popularity: 6,
        description: "Guest service management",
      },
      {
        id: "inventory",
        name: "Inventory Management",
        price: 35,
        time: 3,
        popularity: 7,
        description: "Supply tracking system",
      },
      {
        id: "guest-app",
        name: "Guest Mobile App",
        price: 55,
        time: 5,
        popularity: 7,
        description: "Custom branded guest app",
      },
    ],
  },
  {
    id: "dental",
    name: "Dental",
    popularity: 8,
    description: "Dental practice management solution",
    features: [
      {
        id: "patient-records",
        name: "Patient Records",
        price: 50,
        time: 4,
        popularity: 9,
        description: "Digital patient files",
      },
      {
        id: "appointment-scheduling",
        name: "Appointment Scheduling",
        price: 35,
        time: 3,
        popularity: 8,
        description: "Online booking system",
      },
      {
        id: "imaging",
        name: "Imaging Integration",
        price: 60,
        time: 5,
        popularity: 8,
        description: "Digital imaging management",
      },
      {
        id: "billing",
        name: "Insurance Billing",
        price: 45,
        time: 4,
        popularity: 7,
        description: "Insurance claims processing",
      },
      {
        id: "treatment-planning",
        name: "Treatment Planning",
        price: 40,
        time: 3,
        popularity: 7,
        description: "Treatment plan management",
      },
      {
        id: "inventory",
        name: "Inventory Management",
        price: 30,
        time: 2,
        popularity: 6,
        description: "Supply tracking system",
      },
      {
        id: "patient-communication",
        name: "Patient Communication",
        price: 25,
        time: 2,
        popularity: 7,
        description: "Automated notifications",
      },
    ],
  },
  {
    id: "workshop",
    name: "Workshop",
    popularity: 7,
    description: "Auto repair shop management system",
    features: [
      {
        id: "work-orders",
        name: "Work Orders",
        price: 40,
        time: 3,
        popularity: 9,
        description: "Service ticket management",
      },
      {
        id: "appointment-scheduling",
        name: "Appointment Scheduling",
        price: 35,
        time: 3,
        popularity: 8,
        description: "Online booking system",
      },
      {
        id: "inventory",
        name: "Parts Inventory",
        price: 45,
        time: 4,
        popularity: 8,
        description: "Parts tracking system",
      },
      {
        id: "customer-management",
        name: "Customer Management",
        price: 35,
        time: 3,
        popularity: 7,
        description: "Customer relationship management",
      },
    ],
  },

  {
    id: "coffee",
    name: "Coffee",
    popularity: 8,
    description: "Café and coffee shop management platform",
    features: [
      {
        id: "pos",
        name: "Point of Sale",
        price: 35,
        time: 3,
        popularity: 9,
        description: "Café-specific POS system",
      },
      {
        id: "inventory",
        name: "Inventory Management",
        price: 30,
        time: 3,
        popularity: 8,
        description: "Coffee bean and supply tracking",
      },
      {
        id: "online-ordering",
        name: "Mobile Ordering",
        price: 40,
        time: 4,
        popularity: 9,
        description: "Mobile app ordering system",
      },
      {
        id: "loyalty",
        name: "Loyalty Program",
        price: 25,
        time: 2,
        popularity: 8,
        description: "Digital punch cards and rewards",
      },
      {
        id: "staff-scheduling",
        name: "Staff Scheduling",
        price: 20,
        time: 2,
        popularity: 7,
        description: "Barista shift management",
      },
      {
        id: "recipe-management",
        name: "Recipe Management",
        price: 25,
        time: 2,
        popularity: 7,
        description: "Drink recipe database and controls",
      },
      {
        id: "customer-display",
        name: "Customer Display",
        price: 30,
        time: 3,
        popularity: 6,
        description: "Digital menu and order status board",
      },
      {
        id: "analytics",
        name: "Sales Analytics",
        price: 35,
        time: 3,
        popularity: 7,
        description: "Business performance tracking",
      },
    ],
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    popularity: 9,
    description: "Complete pharmacy management system",
    features: [
      {
        id: "prescription-management",
        name: "Prescription Management",
        price: 65,
        time: 5,
        popularity: 10,
        description: "Digital prescription processing system",
      },
      {
        id: "inventory",
        name: "Medication Inventory",
        price: 55,
        time: 4,
        popularity: 9,
        description: "Pharmaceutical inventory control",
      },
      {
        id: "patient-records",
        name: "Patient Records",
        price: 50,
        time: 4,
        popularity: 8,
        description: "Patient history and medication tracking",
      },
      {
        id: "insurance-billing",
        name: "Insurance Billing",
        price: 45,
        time: 4,
        popularity: 8,
        description: "Insurance claim processing",
      },
      {
        id: "pos",
        name: "Point of Sale",
        price: 40,
        time: 3,
        popularity: 7,
        description: "Retail and prescription sales",
      },
      {
        id: "compliance",
        name: "Compliance Management",
        price: 60,
        time: 5,
        popularity: 9,
        description: "Regulatory compliance tracking",
      },
      {
        id: "customer-notifications",
        name: "Customer Notifications",
        price: 30,
        time: 2,
        popularity: 7,
        description: "Prescription ready alerts",
      },
      {
        id: "supplier-management",
        name: "Supplier Management",
        price: 40,
        time: 3,
        popularity: 6,
        description: "Pharmaceutical supplier coordination",
      },
    ],
  },
  {
    id: "school",
    name: "School",
    popularity: 9,
    description: "Comprehensive school management platform",
    features: [
      {
        id: "student-management",
        name: "Student Management",
        price: 55,
        time: 5,
        popularity: 9,
        description: "Student records and tracking",
      },
      {
        id: "attendance",
        name: "Attendance System",
        price: 35,
        time: 3,
        popularity: 8,
        description: "Digital attendance tracking",
      },
      {
        id: "grade-management",
        name: "Grade Management",
        price: 45,
        time: 4,
        popularity: 9,
        description: "Grading and assessment system",
      },
      {
        id: "course-scheduling",
        name: "Course Scheduling",
        price: 40,
        time: 4,
        popularity: 8,
        description: "Class schedule organization",
      },
      {
        id: "parent-portal",
        name: "Parent Portal",
        price: 50,
        time: 4,
        popularity: 8,
        description: "Parent communication platform",
      },
      {
        id: "library-management",
        name: "Library Management",
        price: 35,
        time: 3,
        popularity: 6,
        description: "Digital library system",
      },
      {
        id: "fee-management",
        name: "Fee Management",
        price: 40,
        time: 3,
        popularity: 7,
        description: "Student fee processing",
      },
      {
        id: "transportation",
        name: "Transportation Management",
        price: 35,
        time: 3,
        popularity: 6,
        description: "School bus tracking system",
      },
    ],
  },
  {
    id: "grocery",
    name: "Grocery",
    popularity: 9,
    description: "Grocery store management system",
    features: [
      {
        id: "pos",
        name: "Point of Sale",
        price: 45,
        time: 4,
        popularity: 9,
        description: "Grocery-specific POS system",
      },
      {
        id: "inventory",
        name: "Inventory Management",
        price: 50,
        time: 4,
        popularity: 9,
        description: "Perishable inventory tracking",
      },
      {
        id: "online-ordering",
        name: "Online Shopping",
        price: 55,
        time: 5,
        popularity: 8,
        description: "E-commerce platform",
      },
      {
        id: "supplier-management",
        name: "Supplier Management",
        price: 40,
        time: 3,
        popularity: 7,
        description: "Vendor relationship management",
      },
      {
        id: "loyalty",
        name: "Loyalty Program",
        price: 35,
        time: 3,
        popularity: 8,
        description: "Customer rewards system",
      },
      {
        id: "delivery-management",
        name: "Delivery Management",
        price: 45,
        time: 4,
        popularity: 8,
        description: "Delivery service coordination",
      },
      {
        id: "fresh-management",
        name: "Fresh Product Management",
        price: 40,
        time: 3,
        popularity: 7,
        description: "Produce and perishables tracking",
      },
    ],
  },
  {
    id: "supermarket",
    name: "Supermarket",
    popularity: 9,
    description: "Large-scale retail management solution",
    features: [
      {
        id: "pos",
        name: "Multi-Lane POS",
        price: 60,
        time: 5,
        popularity: 9,
        description: "Multi-checkout POS system",
      },
      {
        id: "inventory",
        name: "Advanced Inventory",
        price: 55,
        time: 5,
        popularity: 9,
        description: "Large-scale inventory management",
      },
      {
        id: "warehouse",
        name: "Warehouse Management",
        price: 50,
        time: 4,
        popularity: 8,
        description: "Warehouse operations system",
      },
      {
        id: "self-checkout",
        name: "Self-Checkout System",
        price: 65,
        time: 6,
        popularity: 8,
        description: "Automated checkout kiosks",
      },
      {
        id: "supplier-portal",
        name: "Supplier Portal",
        price: 45,
        time: 4,
        popularity: 7,
        description: "Vendor management platform",
      },
      {
        id: "loyalty",
        name: "Customer Loyalty",
        price: 40,
        time: 3,
        popularity: 8,
        description: "Rewards and membership system",
      },
      {
        id: "analytics",
        name: "Business Analytics",
        price: 50,
        time: 4,
        popularity: 7,
        description: "Advanced reporting system",
      },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    popularity: 8,
    description: "Real estate agency management platform",
    features: [
      {
        id: "property-management",
        name: "Property Management",
        price: 55,
        time: 5,
        popularity: 9,
        description: "Property listing and tracking",
      },
      {
        id: "client-management",
        name: "Client Management",
        price: 45,
        time: 4,
        popularity: 8,
        description: "Client database and communication",
      },
      {
        id: "showing-scheduler",
        name: "Showing Scheduler",
        price: 35,
        time: 3,
        popularity: 8,
        description: "Property viewing coordination",
      },
      {
        id: "document-management",
        name: "Document Management",
        price: 40,
        time: 3,
        popularity: 7,
        description: "Real estate document handling",
      },
      {
        id: "marketing-tools",
        name: "Marketing Tools",
        price: 45,
        time: 4,
        popularity: 7,
        description: "Property marketing automation",
      },
      {
        id: "commission-tracking",
        name: "Commission Tracking",
        price: 35,
        time: 3,
        popularity: 6,
        description: "Agent commission management",
      },
      {
        id: "property-analytics",
        name: "Property Analytics",
        price: 50,
        time: 4,
        popularity: 7,
        description: "Market analysis tools",
      },
    ],
  },
  {
    id: "construction",
    name: "Construction",
    popularity: 8,
    description: "Construction project management system",
    features: [
      {
        id: "project-management",
        name: "Project Management",
        price: 60,
        time: 5,
        popularity: 9,
        description: "Construction project tracking",
      },
      {
        id: "resource-planning",
        name: "Resource Planning",
        price: 50,
        time: 4,
        popularity: 8,
        description: "Equipment and material planning",
      },
      {
        id: "bid-management",
        name: "Bid Management",
        price: 45,
        time: 4,
        popularity: 7,
        description: "Project bidding system",
      },
      {
        id: "safety-compliance",
        name: "Safety Compliance",
        price: 55,
        time: 5,
        popularity: 8,
        description: "Safety regulation tracking",
      },
      {
        id: "time-tracking",
        name: "Time Tracking",
        price: 35,
        time: 3,
        popularity: 7,
        description: "Worker time management",
      },
      {
        id: "document-control",
        name: "Document Control",
        price: 40,
        time: 3,
        popularity: 6,
        description: "Project documentation system",
      },
      {
        id: "equipment-management",
        name: "Equipment Management",
        price: 45,
        time: 4,
        popularity: 7,
        description: "Construction equipment tracking",
      },
    ],
  },
  {
    id: "tourism",
    name: "Tourism",
    popularity: 8,
    description: "Travel and tourism management platform",
    features: [
      {
        id: "booking-management",
        name: "Booking Management",
        price: 50,
        time: 4,
        popularity: 9,
        description: "Tour and activity booking system",
      },
      {
        id: "package-builder",
        name: "Package Builder",
        price: 45,
        time: 4,
        popularity: 8,
        description: "Custom tour package creation",
      },
      {
        id: "customer-management",
        name: "Customer Management",
        price: 40,
        time: 3,
        popularity: 7,
        description: "Tourist database and profiles",
      },
      {
        id: "payment-processing",
        name: "Payment Processing",
        price: 35,
        time: 3,
        popularity: 8,
        description: "Secure payment handling",
      },
      {
        id: "itinerary-planning",
        name: "Itinerary Planning",
        price: 40,
        time: 4,
        popularity: 7,
        description: "Travel itinerary creation",
      },
      {
        id: "partner-management",
        name: "Partner Management",
        price: 35,
        time: 3,
        popularity: 6,
        description: "Tourism partner coordination",
      },
      {
        id: "travel-docs",
        name: "Travel Documentation",
        price: 30,
        time: 2,
        popularity: 7,
        description: "Travel document management",
      },
    ],
  },
  {
    id: "law",
    name: "Law",
    popularity: 8,
    description: "Legal practice management system",
    features: [
      {
        id: "case-management",
        name: "Case Management",
        price: 65,
        time: 5,
        popularity: 9,
        description: "Legal case tracking and management",
      },
      {
        id: "document-management",
        name: "Document Management",
        price: 55,
        time: 4,
        popularity: 8,
        description: "Legal document handling",
      },
      {
        id: "time-billing",
        name: "Time & Billing",
        price: 50,
        time: 4,
        popularity: 7,
        description: "Legal billing and time tracking",
      },
    ],
  },
];

export const templates: Template[] = [
  {
    id: "clinic-modern",
    name: "Modern Clinic",
    imagePath: "/templates/clinic-modern.png",
    description: "Clean and professional design for modern medical practices",
    businessTypes: ["clinic"]
  },
  {
    id: "clinic-minimal",
    name: "Classic Minimal",
    imagePath: "/templates/clinic-minimal.png",
    description: "Classic and trustworthy medical interface",
    businessTypes: ["clinic"]
  },
  {
    id: "clinic-bold",
    name: "Bold Clinic",
    imagePath: "/templates/clinic-bold.png",
    description: "Classic and trustworthy medical interface",
    businessTypes: ["clinic"]
  },
];