export interface AppData {
  id: string;
  name: string;
  description: string;
  repositoryUrl: string;
  previewUrl: string;
}

export const appsData: AppData[] = [
  {
    id: "databayt",
    name: "Databayt",
    description: "Business automation platform with comprehensive documentation architecture, hero sections, landing pages, authentication, technical record patterns, MCP protocols, roadmap templates, pricing strategies, and legal compliance blocks.",
    repositoryUrl: "https://github.com/abdout/databayt",
    previewUrl: "https://databayt.org"
  },
  {
    id: "codebase",
    name: "Codebase",
    description: "Component library platform featuring shadcn/ui components, atomic templates, dashboard blocks, authentication forms, payment methods, calendar widgets, navigation patterns, card layouts, and interactive playground sections.",
    repositoryUrl: "https://github.com/abdout/codebase",
    previewUrl: "https://cb.databayt.org"
  },
  {
    id: "company",
    name: "Company",
    description: "Corporate website template with hero sections, service offerings, team displays, testimonials, contact forms, portfolio showcases, pricing tables, and professional landing page components.",
    repositoryUrl: "https://github.com/abdout/company",
    previewUrl: "https://co.databayt.org"
  },
  {
    id: "school",
    name: "School",
    description: "Educational management platform with student registration, attendance tracking, grade management, course scheduling, parent communication, teacher dashboards, exam systems, and collaborative editing features.",
    repositoryUrl: "https://github.com/abdout/hogwarts",
    previewUrl: "https://ed.databayt.org"
  },
  {
    id: "health",
    name: "Health",
    description: "Healthcare management system featuring appointment scheduling, patient records, medical forms, doctor profiles, treatment room management, prescription handling, telemedicine integration, and health status tracking.",
    repositoryUrl: "https://github.com/abdout/shifa",
    previewUrl: "https://hc.databayt.org"
  },
  {
    id: "realestate",
    name: "Real Estate",
    description: "Property platform with listing templates, search filters, property details, agent profiles, virtual tours, mortgage calculators, contact forms, and neighborhood information displays.",
    repositoryUrl: "https://github.com/abdout/mkan",
    previewUrl: "https://mk.databayt.org"
  },
  {
    id: "publicparty",
    name: "Public Party",
    description: "Event management system with booking forms, venue listings, catering options, entertainment packages, guest management, payment processing, and event timeline features.",
    repositoryUrl: "https://github.com/abdout/nmbd",
    previewUrl: "https://nmbdsd.org"
  },
  {
    id: "food",
    name: "Food",
    description: "Restaurant management platform featuring menu displays, order processing, delivery tracking, customer reviews, reservation systems, kitchen management, payment integration, and loyalty programs.",
    repositoryUrl: "https://github.com/abdout/food",
    previewUrl: "https://fd.databayt.org"
  }
]
