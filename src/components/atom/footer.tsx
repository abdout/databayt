import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface FooterAddressComponentProps {
  address: string
  email: string
  phone: string
}

function FooterAddressComponent({
  address,
  email,
  phone
}: FooterAddressComponentProps) {
  return (
    <Card className="w-full bg-transparent border-none shadow-none">
      <CardContent className="p-0">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
          <p>{address}</p>
          <a href={`mailto:${email}`} className="hover:text-gray-900 transition-colors duration-300">
            {email}
          </a>
          <a href={`tel:${phone}`} className="hover:text-gray-900 transition-colors duration-300">
            {phone}
          </a>
          <p>Available 24/7</p>
        </div>
      </CardContent>
    </Card>
  )
}

const footerSections = [
  {
    title: "ABOUT",
    links: ["Paradigm", "Contributors", "Careers", "Investors"]
  },
  {
    title: "SUPPORT",
    links: ["Help Center", "FAQs", "Docs", "Sitemap"]
  },
  {
    title: "SOLUTION",
    links: ["Workflow", "Integration", "AI Agent", "Features"]
  },
  {
    title: "RESOURCE",
    links: ["Codebase", "Showcase", "Books", "Videos"]
  }
]

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 md:py-12 relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen flex items-center justify-center">
      <div className=" ">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-10 md:gap-48 ">
          {footerSections.map((section, index) => (
            <div key={index} className="w-full">
              <h3 className="text-sm md:text-md font-semibold md:font-bold text-gray-900 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href="#" 
                      className="text-base text-gray-500 hover:text-gray-900 transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-8 border-gray-200" />
        <FooterAddressComponent
          address="Arkaweit, Sudan"
          email="info@databayt.org"
          phone="+249912310205"
        />
      </div>
    </footer>
  )
}

export default Footer

