import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


export const metadata = {
  title: "Pricing",
}

const pricingPlans = [
  {
    title: "One Project",
    description: "Perfect for businesses looking to automate a particular process or solve a focused challenge. We'll deliver a tailored solution built with precision — one project, one powerful outcome.",
    price: "$40",
    billing: "starting from",
    buttonText: "Custom Quote"
  },
  {
    title: "Strategic Partner", 
    description: "Ideal for businesses to outsource development, tap into specialized talent, or co-build long-term solutions. We become your tech partner — agile, reliable, and aligned with your vision.",
    price: "$10",
    billing: "per hours",
    buttonText: "Schedule Meet"
  },
  {
    title: "Product Access",
    description: "Access a growing library of deployable tools designed to solve common business problems — from workflow automation to intelligent integrations. Configure, connect, and go.",
    price: "$19", 
    billing: "Billed Monthly",
    buttonText: "Purchase Plan"
  }
]

const faqs = [
  {
    question: "What's included in the One Project plan?",
    answer: "The One Project plan includes complete custom development for a single automation solution, including consultation, development, testing, and deployment."
  },
  {
    question: "How does the hourly billing work for Strategic Partner?",
    answer: "With Strategic Partner, you get access to our development team at $10/hour. Perfect for ongoing projects, maintenance, or when you need flexible development resources."
  },
  {
    question: "Can I switch between plans?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
  },
  {
    question: "Do you offer enterprise solutions?",
    answer: "Absolutely! For enterprise needs, we offer custom solutions with dedicated teams, SLAs, and specialized support. Contact us for a tailored quote."
  }
]

export default function PricingPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8 md:pb-12 lg:pb-24">
      <div className="flex w-full max-w-4xl flex-col gap-4 text-center">
        <div className="flex justify-center">
          <Badge className="bg-muted text-foreground">ROI Guaranteed</Badge>
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-3xl md:text-6xl">
          Simple. Transparent.
        </h2>
        <p className="max-w-[85%] mx-auto leading-normal text-muted-foreground sm:text-lg sm:leading-7">
         All components and building blocks are open source — we charge for crafting fully functional masterpieces and ensuring their ongoing reliability.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full pt-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="flex flex-col w-full items-center justify-between gap-10 rounded-lg border p-10 text-center">
            <div className="grid gap-6">
              <h3 className="text-lg font-bold sm:text-xl">
                {plan.title}
              </h3>
              <p className="font-light">
                {plan.description}
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <div>
                <h4 className="text-7xl font-bold">{plan.price}</h4>
                <p className="text-sm font-medium text-muted-foreground">
                  {plan.billing}
                </p>
              </div>
              <Link href="/login" className={cn(buttonVariants({ size: "lg" }), "bg-muted text-foreground hover:bg-muted/80")}>
                {plan.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-[62rem] flex-col gap-6 text-center pt-16">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Not sure about these plans? Try us for your first project. You will want us for your next. And if you don&apos;t like working with us, we will even refund the money... or something... I don&apos;t know, we&apos;ve never been there before.
        </p>
        <div className="flex justify-center">
          <Link href="/docs/community/support" className={cn(buttonVariants({ size: "lg" }), "")}>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="flex w-full max-w-6xl flex-col gap-8 pt-16">
        <div className="flex w-full flex-col gap-4 text-center">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl">
            Is Databayt really that good?
          </h3>
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We are changing the way businesses see automation. Since 2020.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg border">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-4 text-left font-semibold">Features</th>
                <th className="p-4 text-center font-semibold">Databayt</th>
                <th className="p-4 text-center font-semibold">Traditional Agencies</th>
                <th className="p-4 text-center font-semibold">In-House Team</th>
                <th className="p-4 text-center font-semibold">Freelancers</th>
                <th className="p-4 text-center font-semibold">DIY Solutions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">
                  <div>
                    <div className="font-medium">Quality</div>
                    <div className="text-sm text-muted-foreground">
                      Our expert team ensures consistent, high-quality automation solutions with thorough testing and optimization.
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">😰</td>
                <td className="p-4 text-center text-2xl">😰</td>
                <td className="p-4 text-center text-2xl">💡</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div>
                    <div className="font-medium">Cost-effectiveness</div>
                    <div className="text-sm text-muted-foreground">
                      We believe in fairness and transparency in our pricing. Get enterprise-level solutions without enterprise costs.
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">💩</td>
                <td className="p-4 text-center text-2xl">😰</td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">☀️</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div>
                    <div className="font-medium">Fast Turnaround</div>
                    <div className="text-sm text-muted-foreground">
                      We&apos;ve been doing this for years. Our streamlined processes and automation expertise deliver results quickly.
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">💡</td>
                <td className="p-4 text-center text-2xl">💩</td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">☀️</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div>
                    <div className="font-medium">Ongoing Support</div>
                    <div className="text-sm text-muted-foreground">
                      Continuous support and maintenance to ensure your automation keeps running smoothly as your business grows.
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">💡</td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">😰</td>
                <td className="p-4 text-center text-2xl">💩</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div>
                    <div className="font-medium">Scalability</div>
                    <div className="text-sm text-muted-foreground">
                      Solutions that grow with your business, from startup to enterprise scale without major rebuilds.
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">💡</td>
                <td className="p-4 text-center text-2xl">😰</td>
                <td className="p-4 text-center text-2xl">💩</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div>
                    <div className="font-medium">Industry Savvy</div>
                    <div className="text-sm text-muted-foreground">
                      We have people with specific skills working in-house with us. Whatever you want, they have done hundreds of times before.
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">💡</td>
                <td className="p-4 text-center text-2xl">💡</td>
                <td className="p-4 text-center text-2xl">💡</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div>
                    <div className="font-medium">Reliability</div>
                    <div className="text-sm text-muted-foreground">
                      Thanks to the tremendous experience with business automation and development, our people will take complete care of your project. Start to finish, and beyond.
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">😰</td>
                <td className="p-4 text-center text-2xl">💡</td>
                <td className="p-4 text-center text-2xl">💡</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div>
                    <div className="font-medium">Team Support</div>
                    <div className="text-sm text-muted-foreground">
                      Dedicated team of specialists working together to ensure your success with continuous support.
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">💩</td>
                <td className="p-4 text-center text-2xl">💩</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div>
                    <div className="font-medium">Production Process</div>
                    <div className="text-sm text-muted-foreground">
                      Streamlined, proven workflow with clear milestones and communication channels.
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">😰</td>
                <td className="p-4 text-center text-2xl">💡</td>
                <td className="p-4 text-center text-2xl">💡</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div>
                    <div className="font-medium">Revision Flexibility</div>
                    <div className="text-sm text-muted-foreground">
                      Structured yet flexible revision process to ensure your complete satisfaction.
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">😰</td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">😰</td>
                <td className="p-4 text-center text-2xl">💩</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div>
                    <div className="font-medium">Technical Expertise</div>
                    <div className="text-sm text-muted-foreground">
                      Advanced technical capabilities across all aspects of automation development and system integration.
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">💡</td>
                <td className="p-4 text-center text-2xl">😰</td>
                <td className="p-4 text-center text-2xl">😰</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">
                  <div>
                    <div className="font-medium">Asset Management</div>
                    <div className="text-sm text-muted-foreground">
                      Comprehensive documentation, code management, and knowledge transfer for long-term maintainability.
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">💡</td>
                <td className="p-4 text-center text-2xl">☀️</td>
                <td className="p-4 text-center text-2xl">💩</td>
                <td className="p-4 text-center text-2xl">💩</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Which Plan is Right for You Section */}
      <div className="flex w-full max-w-6xl flex-col gap-8 pt-16">
        <div className="flex w-full flex-col gap-4 text-center">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl">
            Which Plan is Right for You?
          </h3>
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Each plan serves different business needs. Find the perfect fit for your situation.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg border">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-4 text-left font-semibold">Use Case</th>
                <th className="p-4 text-center font-semibold">
                  <div className="flex flex-col gap-2 items-center">
                    <Badge className="bg-green-100 text-green-800">Project-Based</Badge>
                    <span>One Project</span>
                  </div>
                </th>
                <th className="p-4 text-center font-semibold">
                  <div className="flex flex-col gap-2 items-center">
                    <Badge className="bg-blue-100 text-blue-800">Hourly Support</Badge>
                    <span>Strategic Partner</span>
                  </div>
                </th>
                <th className="p-4 text-center font-semibold">
                  <div className="flex flex-col gap-2 items-center">
                    <Badge className="bg-purple-100 text-purple-800">SaaS Tools</Badge>
                    <span>Product Access</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">Specific automation challenge</td>
                <td className="p-4 text-center">
                  <span className="text-green-500">✓</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Custom solution from scratch</td>
                <td className="p-4 text-center">
                  <span className="text-green-500">✓</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-green-500">✓</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Fixed-scope project delivery</td>
                <td className="p-4 text-center">
                  <span className="text-green-500">✓</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Ongoing development support</td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-green-500">✓</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Flexible team scaling</td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-green-500">✓</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Multiple/long-term projects</td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-green-500">✓</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Ready-made automation tools</td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-green-500">✓</span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Monthly subscription model</td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-green-500">✓</span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Quick deployment without custom dev</td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-muted-foreground">-</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-green-500">✓</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Trust Signals Section */}
      <div className="flex w-full max-w-4xl flex-col gap-8 pt-16">
        <div className="flex w-full flex-col gap-4 text-center">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl">
            Why Choose Databayt?
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 text-center">
            <div className="flex justify-center">
              <Badge className="bg-green-100 text-green-800">100% Satisfaction</Badge>
            </div>
            <h4 className="font-semibold">Money-Back Guarantee</h4>
            <p className="text-sm text-muted-foreground">
              Not satisfied with our work? Get a full refund within 30 days.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 text-center">
            <div className="flex justify-center">
              <Badge className="bg-blue-100 text-blue-800">Fast Delivery</Badge>
            </div>
            <h4 className="font-semibold">Quick Turnaround</h4>
            <p className="text-sm text-muted-foreground">
              Most projects completed within 2-4 weeks, with regular updates.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 text-center">
            <div className="flex justify-center">
              <Badge className="bg-purple-100 text-purple-800">Expert Team</Badge>
            </div>
            <h4 className="font-semibold">Experienced Developers</h4>
            <p className="text-sm text-muted-foreground">
              Our team has 10+ years of experience in business automation.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex w-full max-w-4xl flex-col gap-8 pt-16">
        <div className="flex w-full flex-col gap-4 text-center">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl">
            Frequently Asked Questions
          </h3>
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Have questions? We&apos;ve got answers.
          </p>
        </div>
        
        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border p-6">
              <h4 className="font-semibold mb-2">{faq.question}</h4>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="flex w-full max-w-4xl flex-col gap-6 text-center pt-16">
        <div className="flex justify-center">
          <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">Enterprise</Badge>
        </div>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl">
          Need Something Bigger?
        </h3>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          For enterprises and large organizations, we offer custom solutions with dedicated teams, SLAs, and specialized support tailored to your unique requirements.
        </p>
        <div className="flex justify-center">
          <Link href="/docs/community/support" className={cn(buttonVariants({ size: "lg", variant: "outline" }))}>
            Talk to Sales
          </Link>
        </div>
      </div>
      
      <div className="flex w-full max-w-4xl flex-col gap-4">
        {/* <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          Taxonomy is a demo app.{" "}
          <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p> */}
      </div>
    </section>
  )
}
