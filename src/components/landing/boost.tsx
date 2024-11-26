import exp from 'constants'
import { PawPrintIcon as Patreon, Coffee } from 'lucide-react'
import Link from 'next/link'


const Boost = () => {
    return (
        <section id="open-source" className="container py-8 md:py-12 lg:py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Boost
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                
                Thank you for the boost
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="https://www.patreon.com/your_patreon_page"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 rounded-md transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Become a Patron"
                    >
                        <Patreon className="w-5 h-5 mr-2" aria-hidden="true" />
                        <span>Become a Patron</span>
                    </Link>
                    <Link
                        href="https://www.buymeacoffee.com/your_buymeacoffee_page"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Buy me a coffee"
                    >
                        <Coffee className="w-5 h-5 mr-2" aria-hidden="true" />
                        <span>Buy me a coffee</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Boost