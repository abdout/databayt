export const footerSections = [
  {
    title: "ABOUT",
    key: "about",
    links: [
      { text: "Paradigm", href: "/about/paradigm", key: "paradigm" },
      { text: "Contributors", href: "/contribute", key: "contributors" },
      { text: "Careers", href: "/about/careers", key: "careers" },
      { text: "Investors", href: "/about/investors", key: "investors" }
    ]
  },
  {
    title: "CONTRIBUTE",
    key: "contribute",
    links: [
      { text: "Documentation", href: "/contribute/documentation", key: "documentation" },
      { text: "Guidelines", href: "/contribute/guidelines", key: "guidelines" },
      { text: "Inspiration", href: "/contribute/inspiration", key: "inspiration" },
      { text: "Issues", href: "/contribute/issues", key: "issues" },
      { text: "Pull Requests", href: "/contribute/pull-requests", key: "pullRequests" },
      { text: "Code of Conduct", href: "/contribute/code-of-conduct", key: "codeOfConduct" },
      
    ]
  },
  {
    title: "SOLUTION",
    key: "solution",
    links: [
      { text: "Workflow", href: "/solutions/workflow", key: "workflow" },
      { text: "Integration", href: "/solutions/integration", key: "integration" },
      { text: "AI Agent", href: "/agent", key: "aiAgent" },
      { text: "Features", href: "/features", key: "features" },
      { text: "Blockchain", href: "/blockchain", key: "blockchain" }
    ]
  },
  {
    title: "SUPPORT",
    key: "support",
    links: [
      { text: "Help Center", href: "/help", key: "helpCenter" },
      { text: "FAQs", href: "/faqs", key: "faqs" },
      { text: "Contact", href: "/contact", key: "contact" },
      { text: "Sitemap", href: "/sitemap", key: "sitemap" }
    ]
  },
 
  
] as const

export const footerInfo = ["Sudan", "English", "$USD", "Light"] as const
