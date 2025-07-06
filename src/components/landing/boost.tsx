'use client'

import Link from 'next/link'
import SectionHeading from '../atom/section-heading'
import { cn } from '@/lib/utils'
import { Patreon, Coffee } from '@/components/atom/icons'
import { useLocale } from '@/hooks/use-locale'

const Boost = () => {
    const { t } = useLocale()

    return (
        <section className="boost-section py-14">
            <SectionHeading
                title={t('landing.boost.title')}
                description={t('landing.boost.description')}
                className="text-center"
            />  
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center px-4">
                
                <div className="flex flex-col sm:flex-row rtl:sm:flex-row-reverse gap-4 w-full sm:w-auto justify-center">
                    <Link
                        href="https://www.patreon.com/your_patreon_page"
                        className={cn(
                            "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                            "bg-muted text-primary hover:bg-muted/90",
                            "h-11 px-6 py-2 min-w-[160px]"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t('landing.boost.patreonLabel')}
                    >
                        <Patreon className="w-4 h-4 me-2 rtl:me-0 rtl:ms-2 flex-shrink-0" />
                        <span className="leading-relaxed">{t('landing.boost.becomePatron')}</span>
                    </Link>
                    <Link
                        href="https://www.buymeacoffee.com/your_buymeacoffee_page"
                        className={cn(
                            "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                            "hover:bg-accent hover:text-accent-foreground border border-input",
                            "h-11 px-6 py-2 min-w-[160px]"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t('landing.boost.coffeeLabel')}
                    >
                        <Coffee className="w-5 h-5 me-2 rtl:me-0 rtl:ms-2 flex-shrink-0" />
                        <span className="leading-relaxed">{t('landing.boost.buyCoffee')}</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Boost