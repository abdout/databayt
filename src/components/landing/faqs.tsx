"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { useLocale } from "@/hooks/use-locale"

export default function FAQs() {
    const { t } = useLocale()
    return (
        <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="container mx-auto px-4">
                <div className="grid gap-y-16 lg:gap-y-12 lg:[grid-template-columns:1fr_auto] lg:gap-x-16">
                    <div className="text-center lg:text-start rtl:lg:text-end space-y-4">
                        <h2 className="mb-6 text-3xl font-semibold md:text-4xl leading-tight">
                            {t('landing.faqs.title')}
                        </h2>
                        <p className="text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 rtl:lg:me-0">{t('landing.faqs.subtitle')}</p>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-2xl lg:mx-0 lg:max-w-3xl space-y-6">
                        <div className="pb-8">
                            <h3 className="font-medium mb-4 text-lg leading-tight">{t('landing.faqs.questions.openSource.title')}</h3>
                            <p className="text-muted-foreground my-4 leading-relaxed">{t('landing.faqs.questions.openSource.description')}</p>
                            <ul className="list-outside list-disc space-y-3 ps-6 rtl:ps-0 rtl:pe-6">
                                <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.openSource.points.1')}</li>
                                <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.openSource.points.2')}</li>
                                <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.openSource.points.3')}</li>
                                <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.openSource.points.4')}</li>
                            </ul>
                        </div>
                        <div className="pt-8">
                            <Accordion type="single" collapsible defaultValue="item-1">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-base font-medium">
                                        {t('landing.faqs.questions.whatAutomate.title')}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-muted-foreground mb-4">{t('landing.faqs.questions.whatAutomate.description')}</p>
                                        <ol className="list-outside list-decimal space-y-2 ps-4 rtl:ps-0 rtl:pe-4">
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.whatAutomate.points.1')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.whatAutomate.points.2')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.whatAutomate.points.3')}</li>
                                        </ol>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-base font-medium">
                                        {t('landing.faqs.questions.planSelection.title')}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {t('landing.faqs.questions.planSelection.description')}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-base font-medium">
                                        {t('landing.faqs.questions.dataScientist.title')}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {t('landing.faqs.questions.dataScientist.description')}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-base font-medium">
                                        {t('landing.faqs.questions.support.title')}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {t('landing.faqs.questions.support.description')}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5">
                                    <AccordionTrigger className="text-base font-medium">
                                        {t('landing.faqs.questions.remote.title')}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {t('landing.faqs.questions.remote.description')}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6">
                                    <AccordionTrigger className="text-base font-medium">
                                        {t('landing.faqs.questions.partTime.title')}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-muted-foreground mb-4">{t('landing.faqs.questions.partTime.description')}</p>
                                        <ul className="list-outside list-disc space-y-2 ps-4 rtl:ps-0 rtl:pe-4">
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.partTime.points.1')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.partTime.points.2')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.partTime.points.3')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.partTime.points.4')}</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-7">
                                    <AccordionTrigger className="text-base font-medium">
                                        {t('landing.faqs.questions.payment.title')}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-muted-foreground mb-4">{t('landing.faqs.questions.payment.description')}</p>
                                        <ul className="list-outside list-disc space-y-2 ps-4 rtl:ps-0 rtl:pe-4">
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.payment.points.1')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.payment.points.2')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.payment.points.3')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.payment.points.4')}</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-8">
                                    <AccordionTrigger className="text-base font-medium">
                                        {t('landing.faqs.questions.getStartedContributing.title')}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-outside list-disc space-y-2 ps-4 rtl:ps-0 rtl:pe-4">
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.getStartedContributing.points.1')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.getStartedContributing.points.2')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.getStartedContributing.points.3')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.getStartedContributing.points.4')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.getStartedContributing.points.5')}</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-9">
                                    <AccordionTrigger className="text-base font-medium">
                                        {t('landing.faqs.questions.getStarted.title')}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {t('landing.faqs.questions.getStarted.description')}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-10">
                                    <AccordionTrigger className="text-base font-medium">
                                        {t('landing.faqs.questions.useComponents.title')}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {t('landing.faqs.questions.useComponents.description')}
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-12">
                                    <AccordionTrigger className="text-base font-medium">
                                        {t('landing.faqs.questions.portfolio.title')}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-muted-foreground mb-4">{t('landing.faqs.questions.portfolio.description')}</p>
                                        <ul className="list-outside list-disc space-y-2 ps-4 rtl:ps-0 rtl:pe-4">
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.portfolio.points.1')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.portfolio.points.2')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.portfolio.points.3')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.portfolio.points.4')}</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-13">
                                    <AccordionTrigger className="text-base font-medium">
                                        {t('landing.faqs.questions.earningModel.title')}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-muted-foreground mb-4">{t('landing.faqs.questions.earningModel.description')}</p>
                                        <ul className="list-outside list-disc space-y-2 ps-4 rtl:ps-0 rtl:pe-4">
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.earningModel.points.1')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.earningModel.points.2')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.earningModel.points.3')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.earningModel.points.4')}</li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.earningModel.points.5')}</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-11">
                                    <AccordionTrigger className="text-base font-medium">
                                        {t('landing.faqs.questions.moreQuestions.title')}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-outside list-disc space-y-2 ps-4 rtl:ps-0 rtl:pe-4">
                                            <li className="text-muted-foreground leading-relaxed">
                                                <Link 
                                                    href="https://github.com/abdout/databayt/discussions" 
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline"
                                                >
                                                    {t('landing.faqs.questions.moreQuestions.links.github')}
                                                </Link>
                                            </li>
                                            <li className="text-muted-foreground leading-relaxed">
                                                <Link 
                                                    href="https://discord.gg/uPa4gGG62c" 
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline"
                                                >
                                                    {t('landing.faqs.questions.moreQuestions.links.discord')}
                                                </Link>
                                            </li>
                                            <li className="text-muted-foreground leading-relaxed">{t('landing.faqs.questions.moreQuestions.links.consultation')}</li>
                                            <li className="text-muted-foreground leading-relaxed">
                                                <Link 
                                                    href="/docs" 
                                                    className="hover:underline"
                                                >
                                                    {t('landing.faqs.questions.moreQuestions.links.docs')}
                                                </Link>
                                            </li>
                                            <li className="text-muted-foreground leading-relaxed">
                                                <Link 
                                                    href="mailto:hello@databayt.org"
                                                    className="hover:underline"
                                                >
                                                    {t('landing.faqs.questions.moreQuestions.links.email')}
                                                </Link>
                                            </li>
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