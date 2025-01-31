import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

function FooterAddressComponent() {
  return (
    <Card className="w-full bg-transparent border-none shadow-none">
      <CardContent className="p-0">
        <div className="flex space-x-8 text-sm items-center justify-center md:justify-start text-gray-500">
          <p className="text-[13px] md:text-[15px]">Sudan</p>
          <p className="text-[13px] md:text-[15px]">English</p>
          <p className="text-[13px] md:text-[15px]">$USD</p>
          <p className="text-[13px] md:text-[15px]">Light</p>
        </div>
      </CardContent>
    </Card>
  )
}

const footerSections = [
  {
    title: "ABOUT",
    links: [
      { text: "Paradigm", href: "/about/paradigm" },
      { text: "Contributors", href: "/contributor" },
      { text: "Careers", href: "/about/careers" },
      { text: "Investors", href: "/about/investors" }
    ]
  },
  {
    title: "SUPPORT",
    links: [
      { text: "Help Center", href: "/help" },
      { text: "FAQs", href: "/faqs" },
      { text: "Docs", href: "/docs" },
      { text: "Sitemap", href: "/sitemap" }
    ]
  },
  {
    title: "SOLUTION",
    links: [
      { text: "Workflow", href: "/solutions/workflow" },
      { text: "Integration", href: "/solutions/integration" },
      { text: "AI Agent", href: "/agent" },
      { text: "Features", href: "/features" }
    ]
  },
  {
    title: "RESOURCE",
    links: [
      { text: "Codebase", href: "/resources/codebase" },
      { text: "Showcase", href: "/resources/showcase" },
      { text: "Books", href: "/resources/books" },
      { text: "Videos", href: "/resources/videos" }
    ]
  }
]

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 md:py-12 relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen flex items-center justify-center">
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-10 md:gap-48">
          {footerSections.map((section, index) => (
            <div key={index} className="w-full">
              <h3 className="text-sm md:text-md font-semibold md:font-bold text-gray-900 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-500 hover:text-gray-900 transition-colors duration-300"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-5 md:my-8 border-gray-200" />
        <FooterAddressComponent />
      </div>
    </footer>
  )
}

export default Footer