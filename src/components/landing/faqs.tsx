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
                            <h3 className="font-medium">What exactly does Databayt automate?</h3>
                            <p className="text-muted-foreground mt-4">We automate repetitive business processes, streamline workflows, and build custom solutions that save you time and reduce manual work.</p>

                            <ol className="list-outside list-decimal space-y-2 pl-4">
                                <li className="text-muted-foreground mt-4">Data processing and analysis automation</li>
                                <li className="text-muted-foreground mt-4">Workflow optimization and task automation</li>
                                <li className="text-muted-foreground mt-4">Custom enterprise applications and integrations</li>
                            </ol>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How do I know which plan is right for my business?</h3>
                            <p className="text-muted-foreground mt-4">Choose One Project for specific challenges, Strategic Partner for ongoing development needs, or Product Access for ready-made automation tools. We can help you decide during a consultation.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Is the codebase really open source?</h3>
                            <p className="text-muted-foreground my-4">Yes! Every component and building block is open source. We charge for crafting fully functional solutions and ensuring their ongoing reliability.</p>
                            <ul className="list-outside list-disc space-y-2 pl-4">
                                <li className="text-muted-foreground">All atomic components and templates are freely available</li>
                                <li className="text-muted-foreground">Contributors earn a share of the value they help create</li>
                                <li className="text-muted-foreground">Full transparency in development and business processes</li>
                                <li className="text-muted-foreground">Community-driven innovation and collaboration</li>
                            </ul>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How long does a typical project take?</h3>
                            <p className="text-muted-foreground mt-4">Most automation projects are completed within 2-4 weeks, depending on complexity. We provide regular updates and maintain clear communication throughout the development process.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Do you provide ongoing support?</h3>
                            <p className="text-muted-foreground mt-4">Yes, we offer continuous support and maintenance to ensure your automation solutions keep running smoothly as your business grows and evolves.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How do I get started?</h3>
                            <p className="text-muted-foreground mt-4">Contact us for a consultation where we&apos;ll discuss your specific needs, challenges, and goals. We&apos;ll recommend the best approach and provide a detailed proposal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}