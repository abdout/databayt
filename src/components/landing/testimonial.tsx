import Image from "next/image"

export default function Testimonial() {
    const testimonials = [
        {
            name: "Amira Bashir",
            role: "Hospital Director",
            content: "40% reduction in admin work. Truly revolutionary for our hospital.",
            avatar: "/contributors/1.jpg"
        },
        {
            name: "Osman Abdout",
            role: "School Principal",
            content: "Streamlined operations and improved communication. Highly recommended.",
            avatar: "/contributors/2.jpg"
        },
        {
            name: "Fatima Mahdi",
            role: "HR Manager",
            content: "Simplified HR processes from hiring to performance reviews. Excellent.",
            avatar: "/contributors/3.jpg"
        },
        {
            name: "Ahmed Hassan",
            role: "Restaurant Owner",
            content: "Boosted efficiency in orders and inventory. A must-have for restaurants.",
            avatar: "/contributors/mazin.jpg"
        },
        {
            name: "Layla Osman",
            role: "Operations Manager",
            content: "Streamlined operations and improved team collaboration. Highly effective.",
            avatar: "/contributors/5.jpg"
        },
        {
            name: "Mohamed Khalid",
            role: "Café Owner",
            content: "Enhanced workflow and simplified inventory management. Highly efficient.",
            avatar: "/contributors/6.jpg"
        }        
    ]

    return (
        <section
            id="features"
            className="container space-y-6  dark:bg-transparent "
        >
            <div className="mx-auto flex max-w-full flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Testimonial
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-7">
                    Supports businesses across industries through a robust closed-loop feedback control system.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[150px] flex-col justify-between rounded-md p-6">
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">
                                    {testimonial.content}
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <Image
                                    src={testimonial.avatar}
                                    alt={`${testimonial.name}'s avatar`}
                                    width={40}
                                    height={40}
                                    className="rounded-full aspect-square object-cover"
                                />
                                <div className="flex flex-col">
                                    <strong className="font-medium">{testimonial.name}</strong>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}