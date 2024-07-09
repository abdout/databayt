import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 pt-10 ">
      <h5>اشترك في نشرتنا البريدية</h5>
    <div className="flex w-full max-w-sm items-center gap-4 scroll">
      <Input type="email" placeholder="البريد" />
      <Button type="submit">اشترك</Button>
    </div>
  </div>
  )
}

export default NewsLetter
