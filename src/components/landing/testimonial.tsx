'use client'

import Image from "next/image"
import SectionHeading from "../atom/section-heading"
import { useLocale } from "@/hooks/use-locale"

export default function Testimonial() {
    const { t } = useLocale()

    const testimonials = [
        {
            name: t('landing.testimonials.items.amira.name'),
            role: t('landing.testimonials.items.amira.role'),
            content: t('landing.testimonials.items.amira.content'),
            avatar: "/contributors/1.jpg"
        },
        {
            name: t('landing.testimonials.items.osman.name'),
            role: t('landing.testimonials.items.osman.role'),
            content: t('landing.testimonials.items.osman.content'),
            avatar: "/contributors/2.jpg"
        },
        {
            name: t('landing.testimonials.items.fatima.name'),
            role: t('landing.testimonials.items.fatima.role'),
            content: t('landing.testimonials.items.fatima.content'),
            avatar: "/contributors/3.jpg"
        },
        {
            name: t('landing.testimonials.items.ahmed.name'),
            role: t('landing.testimonials.items.ahmed.role'),
            content: t('landing.testimonials.items.ahmed.content'),
            avatar: "/contributors/mazin.jpg"
        },
        {
            name: t('landing.testimonials.items.layla.name'),
            role: t('landing.testimonials.items.layla.role'),
            content: t('landing.testimonials.items.layla.content'),
            avatar: "/contributors/5.jpg"
        },
        {
            name: t('landing.testimonials.items.mohamed.name'),
            role: t('landing.testimonials.items.mohamed.role'),
            content: t('landing.testimonials.items.mohamed.content'),
            avatar: "/contributors/6.jpg"
        }        
    ]

    return (
        <section id="features" className="py-16 lg:py-24">
            <div className="container mx-auto max-w-6xl px-4">
                <SectionHeading
                    title={t('landing.testimonials.title')}
                    description={t('landing.testimonials.description')}
                />
                
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="group relative overflow-hidden rounded-xl border bg-background p-6 transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="flex h-full min-h-[180px] flex-col justify-between">
                                <div className="mb-6">
                                    <p className="text-sm leading-relaxed text-muted-foreground rtl:text-base rtl:leading-7">
                                        {testimonial.content}
                                    </p>
                                </div>
                                
                                <div className="flex items-center gap-3 rtl:gap-4">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={`${testimonial.name}'s avatar`}
                                        width={48}
                                        height={48}
                                        className="rounded-full aspect-square object-cover ring-2 ring-muted"
                                    />
                                    <div className="flex flex-col text-start rtl:text-start">
                                        <strong className="font-semibold text-foreground rtl:font-bold rtl:text-base">
                                            {testimonial.name}
                                        </strong>
                                        <p className="text-sm text-muted-foreground rtl:text-sm rtl:leading-6">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}