"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQs() {
    return (
        <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <div className="text-center lg:text-left">
                        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p>Your guide to business automation with Databayt.</p>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-xl lg:mx-0">
                        <div className="pb-6">
                            <h3 className="font-medium">Is the codebase really open source?</h3>
                            <p className="text-muted-foreground my-4">Yes! Every component and building block is open source. We charge for crafting fully functional solutions and ensuring their ongoing reliability.</p>
                            <ul className="list-outside list-disc space-y-2 pl-4">
                                <li className="text-muted-foreground">All atomic components and templates are freely available</li>
                                <li className="text-muted-foreground">Contributors earn a share of the value they help create</li>
                                <li className="text-muted-foreground">Full transparency in development and business processes</li>
                                <li className="text-muted-foreground">Community-driven innovation and collaboration</li>
                            </ul>
                        </div>
                        <div className="pt-6">
                            <Accordion type="single" collapsible defaultValue="item-1">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-base font-medium">
                                        What exactly does Databayt automate?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-muted-foreground mb-4">We automate repetitive business processes, streamline workflows, and build custom solutions that save you time and reduce manual work.</p>
                                        <ol className="list-outside list-decimal space-y-2 pl-4">
                                            <li className="text-muted-foreground">Data processing and analysis automation</li>
                                            <li className="text-muted-foreground">Workflow optimization and task automation</li>
                                            <li className="text-muted-foreground">Custom enterprise applications and integrations</li>
                                        </ol>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-base font-medium">
                                        How do I know which plan is right for my business?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Choose One Project for specific challenges, Strategic Partner for ongoing development needs, or Product Access for ready-made automation tools. We can help you decide during a consultation.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-base font-medium">
                                        How can I contribute as a Data Scientist?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Build data analysis automation, predictive models, AI agents for business insights
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-base font-medium">
                                        Do you provide ongoing support?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Yes, we offer continuous support and maintenance to ensure your automation solutions keep running smoothly as your business grows and evolves.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5">
                                    <AccordionTrigger className="text-base font-medium">
                                        Is this work remote?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Yes, completely remote! Contributors work from anywhere in the world. We use GitHub for collaboration, async communication, and project management.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6">
                                    <AccordionTrigger className="text-base font-medium">
                                        What if I can only contribute part-time?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-muted-foreground mb-4">Perfect! Most contributors work part-time:</p>
                                        <ul className="list-outside list-disc space-y-2 pl-4">
                                            <li className="text-muted-foreground">No minimum time commitment required</li>
                                            <li className="text-muted-foreground">Contribute when your schedule allows</li>
                                            <li className="text-muted-foreground">Start with small tasks and grow your involvement</li>
                                            <li className="text-muted-foreground">Earn proportional to your contribution level</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-7">
                                    <AccordionTrigger className="text-base font-medium">
                                        How much do you pay contributors?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-muted-foreground mb-4">We use a revenue-sharing model:</p>
                                        <ul className="list-outside list-disc space-y-2 pl-4">
                                            <li className="text-muted-foreground">Contributors earn a percentage of revenue generated from components they build</li>
                                            <li className="text-muted-foreground">Higher contribution value = higher revenue share</li>
                                            <li className="text-muted-foreground">Transparent tracking of all contributions and earnings</li>
                                            <li className="text-muted-foreground">Payment details discussed during onboarding</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-8">
                                    <AccordionTrigger className="text-base font-medium">
                                        How do I get started contributing?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-outside list-disc space-y-2 pl-4">
                                            <li className="text-muted-foreground">Explore the codebase at our GitHub repository</li>
                                            <li className="text-muted-foreground">Join our community discussions to introduce yourself</li>
                                            <li className="text-muted-foreground">Pick a first issue - we have "good first issue" labels for newcomers</li>
                                            <li className="text-muted-foreground">Submit a pull request - start small and build up</li>
                                            <li className="text-muted-foreground">Earn your first revenue share as your contributions are used</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-9">
                                    <AccordionTrigger className="text-base font-medium">
                                        How do I get started?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Contact us for a consultation where we'll discuss your specific needs, challenges, and goals. We'll recommend the best approach and provide a detailed proposal.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-10">
                                    <AccordionTrigger className="text-base font-medium">
                                        Can I use Databayt components in my own projects?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Yes! All components are open source and can be used in your projects according to their respective licenses. We encourage reuse and building upon our work.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-11">
                                    <AccordionTrigger className="text-base font-medium">
                                        Still have questions?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-outside list-disc space-y-2 pl-4">
                                            <li className="text-muted-foreground">Join our community discussions on GitHub</li>
                                            <li className="text-muted-foreground">Contact us for a free consultation</li>
                                            <li className="text-muted-foreground">Check our documentation at databayt.org/docs</li>
                                            <li className="text-muted-foreground">Email us at hello@databayt.org</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}