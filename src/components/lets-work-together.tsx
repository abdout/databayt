import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Icon } from '@iconify/react'

export default function LetsWorkTogether() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6 lg:px-40">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Let&apos;s Work Together</h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 ">
          <div className="flex-1">
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-4">
              Ready to revolutionize your business with our automation solutions? Whether you&apos;re in healthcare, education, or hospitality, we&apos;re here to streamline your operations and boost efficiency.
            </p>
            <div className="flex gap-4 mt-4 items-center">
              <Icon icon="bytesize:github" width="30" height="30" />
              <Icon icon="ri:discord-fill" width="35" height="35" />
            </div>
          </div>
          <div className="flex-1 pt-1">
            <form className="space-y-4">
              <Input
                placeholder="Email address"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                required
                aria-label="Email"
              />
              <Textarea
                placeholder="What routine you would like to automate?"
                required
                className="min-h-[70px] resize-none"
                aria-label="Automation needs"
              />
              <div className="flex gap-2">

                <Button type="submit" className="w-fit px-8">
                  Submit
                </Button>
                <Button type="submit" variant="ghost" className="w-fit px-4">
                  Live chat
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
