'use client'

import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import Image from 'next/image'
import { useLocale } from '@/hooks/use-locale'

const sponsors = [
    { 
        name: "Faisal", 
        src: "/sponser/faisal.png", 
        width: 120, 
        height: 60, 
        className: "h-12 w-auto" 
    },
    { 
        name: "MTDT", 
        src: "/sponser/mtdt.png", 
        width: 120, 
        height: 60, 
        className: "h-12 w-auto" 
    },
    { 
        name: "Zain", 
        src: "/sponser/zain.png", 
        width: 100, 
        height: 50, 
        className: "h-10 w-auto" 
    },
    { 
        name: "Khartoum", 
        src: "/sponser/khartoum.png", 
        width: 120, 
        height: 60, 
        className: "h-12 w-auto" 
    },
    { 
        name: "Dal", 
        src: "/sponser/dal.png", 
        width: 120, 
        height: 60, 
        className: "h-12 w-auto" 
    },
    { 
        name: "249", 
        src: "/sponser/249.png", 
        width: 100, 
        height: 50, 
        className: "h-10 w-auto" 
    },
    { 
        name: "University of Khartoum", 
        src: "/sponser/uok.png", 
        width: 110, 
        height: 55, 
        className: "h-11 w-auto" 
    },
]

export default function LogoCloud() {
    const { t } = useLocale()

    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">{t('landing.logoCloud.trustedBy')}</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            {sponsors.map((sponsor, index) => (
                                <div key={index} className="flex items-center justify-center">
                                    <Image
                                        src={sponsor.src}
                                        alt={sponsor.name}
                                        width={sponsor.width}
                                        height={sponsor.height}
                                        className={`${sponsor.className} object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 dark:invert`}
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
