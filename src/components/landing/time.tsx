'use client'

import React from 'react'
import Clock from './clock'
import { useLocale } from '@/hooks/use-locale'

const Time = () => {
    const { t } = useLocale()

    return (
        <section className="py-8 lg:py-12 bg-black dark:invert text-background">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* RTL-aware layout using Tailwind utilities */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
                    <div className="flex flex-col items-center lg:items-start rtl:lg:items-end text-center lg:text-start rtl:lg:text-end flex-1 order-1 rtl:lg:order-2"> 
                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight rtl:leading-relaxed dark:invert mb-2">
                            {t('landing.time.title')}
                        </h2>
                        <p className="font-heading text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground rtl:text-base rtl:leading-8 rtl:font-medium max-w-2xl dark:invert">
                            {t('landing.time.subtitle')}
                        </p>
                    </div>
                    
                    <div className="flex-shrink-0 order-2 rtl:lg:order-1">
                        <Clock />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Time