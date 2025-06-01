import { 
  StarterKit, 
  Onboarding, 
  Notification, 
  Contentlayer, 
  Authentication, 
  Subscription,
  Math,
  Flow,
  Docs,
  Report,
  PDF,
  Chatbot,
  Invoice,
  Salary,
  Timesheet,
  Leads,
  Proposal,
  Dashboard,
  Logbook,
  Rules,
  Prompts,
  Extensions
} from "@/components/atom/icons"

export interface Feature {
  id: string
  name: string
  icon: string | React.ComponentType<any>
  description?: string
}

export const features: Feature[] = [
  {
    id: "auth",
    name: "Authentication",
    icon: "/features/shield.png",
    description: "Advanced security features to protect your data"
  },
  // {
  //   id: "authentication",
  //   name: "Authentication",
  //   icon: Authentication,
  //   description: "Secure user authentication and authorization"
  // },
  {
    id: "api-keys",
    name: "API Key Management",
    icon: "/features/key.png",
    description: "Manage and secure your API keys"
  },
  {
    id: "analytics",
    name: "Analytics Dashboard",
    icon: "/features/pie.png",
    description: "Comprehensive analytics and insights"
  },
  {
    id: "reports",
    name: "Advanced Reports",
    icon: Report,
    description: "Generate detailed reports and analytics"
  },
  {
    id: "community",
    name: "Community",
    icon: "/features/community.png",
    description: "Connect and collaborate with the community"
  },
  {
    id: "library",
    name: "Component Library",
    icon: "/features/library.png",
    description: "Extensive library of reusable components"
  },
  {
    id: "starter-kit",
    name: "Starter Kits",
    icon: StarterKit,
    description: "Pre-built templates to jumpstart your projects"
  },
  {
    id: "command-palette",
    name: "Command Palette",
    icon: "/features/command.png",
    description: "Quick access to all features via command interface"
  },
  {
    id: "deployment",
    name: "Easy Deployment",
    icon: "/features/tent.png",
    description: "One-click deployment to multiple platforms"
  },
  
  {
    id: "internationalization",
    name: "Internationalization",
    icon: "/features/world.png",
    description: "24/7 support across all time zones"
  },
  {
    id: "ai-agent",
    name: "AI Agent",
    icon: "/features/teleport.png",
    description: "Real-time synchronization across devices"
  },
  {
    id: "personalization",
    name: "Personalization",
    icon: "/features/hat.jpeg",
    description: "Customize your experience to fit your needs"
  },
  {
    id: "labeling",
    name: "Smart Labeling",
    icon: "/features/label.png",
    description: "Intelligent tagging and categorization"
  },
  {
    id: "editor",
    name: "Text Editor",
    icon: "/features/pen-tool.png",
    description: "Professional design and editing tools"
  },
  {
    id: "file-management",
    name: "File Management",
    icon: "/features/folder.png",
    description: "Organize and manage your files efficiently"
  },
  {
    id: "user-management",
    name: "User Management",
    icon: "/features/user.png",
    description: "Comprehensive user and team management"
  },
  {
    id: "extensions",
    name: "Extensions",
    icon: Extensions,
    description: "Extend functionality with powerful extensions"
  },
  {
    id: "charts",
    name: "Data Visualization",
    icon: "/features/pie-chart.png",
    description: "Beautiful charts and data visualization"
  },
  {
    id: "workflows",
    name: "Workflows",
    icon: Flow,
    description: "Streamline processes with automated workflows"
  },
  {
    id: "documentation",
    name: "Documentation",
    icon: Docs,
    description: "Comprehensive documentation and guides"
  },
  {
    id: "notifications",
    name: "Notifications",
    icon: Notification,
    description: "Stay updated with intelligent notifications"
  },
  {
    id: "content-layer",
    name: "Content layer",
    icon: Contentlayer,
    description: "Powerful content management system"
  },
  {
    id: "subscription",
    name: "Subscription",
    icon: Subscription,
    description: "Flexible subscription and billing management"
  },
  {
    id: "onboarding",
    name: "Onboarding",
    icon: Onboarding,
    description: "Smooth onboarding experience for new users"
  },
  {
    id: "math-tools",
    name: "Mathematical",
    icon: Math,
    description: "Advanced mathematical calculations and tools"
  },
  {
    id: "pdf-processing",
    name: "PDF Processing",
    icon: PDF,
    description: "Generate, edit, and manipulate PDF documents"
  },
  {
    id: "chatbot",
    name: "AI Chatbot",
    icon: Chatbot,
    description: "Intelligent chatbot for customer support"
  },
  {
    id: "invoicing",
    name: "Invoice Management",
    icon: Invoice,
    description: "Create and manage invoices efficiently"
  },
  {
    id: "payroll",
    name: "Payroll Management",
    icon: Salary,
    description: "Comprehensive payroll and salary management"
  },
  {
    id: "time-tracking",
    name: "Time Tracking",
    icon: Timesheet,
    description: "Track time and manage productivity"
  },
  {
    id: "lead-generation",
    name: "Lead Generation",
    icon: Leads,
    description: "Generate and manage sales leads"
  },
  {
    id: "proposals",
    name: "Proposal Creator",
    icon: Proposal,
    description: "Create professional proposals and documents"
  },
  {
    id: "dashboard",
    name: "Custom Dashboards",
    icon: Dashboard,
    description: "Build custom dashboards for your needs"
  },
  {
    id: "activity-log",
    name: "Activity Logbook",
    icon: Logbook,
    description: "Keep detailed logs of all activities"
  },
  {
    id: "coding-rules",
    name: "Coding Standards",
    icon: Rules,
    description: "Enforce coding standards and best practices"
  },
  {
    id: "ai-prompts",
    name: "AI Prompt Library",
    icon: Prompts,
    description: "Ready-to-use AI prompts for development"
  }
]

// Helper function to get features by category
export const getFeaturesByCategory = (category: string) => {
  return features.filter(feature => 
    feature.id.includes(category) || 
    feature.name.toLowerCase().includes(category.toLowerCase())
  )
}

// Helper function to get feature by id
export const getFeatureById = (id: string) => {
  return features.find(feature => feature.id === id)
}
