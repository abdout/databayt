import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Editor from '@/components/editor/ui';
import ImageUpload from '@/components/upload/image';
import { usePaper } from "./context";
import { useState } from "react";
import { useUpload } from "@/components/upload/context";
import { Icon } from "@iconify/react";
import { author, authors } from "./author";
import SelectPopover from "@/components/atom/popover";

interface FormData {
  title: string;
  desc: string;
  body: string;
  image: string;
  author: string;
  // Add other fields as needed
}

const formSchema = z.object({
  title: z.string(),
  desc: z.string(),
  body: z.string(),
  image: z.string(),
  author: z.string(),
  // Add other fields as needed
});

interface CreateProps {
  onClose: () => void;
}

const Create: React.FC<CreateProps> = ({ onClose }) => {
  const { refreshPapers } = usePaper();
  const { image } = useUpload();
  const [step, setStep] = useState(1);
  const [selectedAuthor, setSelectedAuthor] = useState<author | null>(null);

  const nextStep = () => { setStep(prevStep => prevStep < 2 ? prevStep + 1 : 2) };
  const prevStep = () => { setStep(prevStep => prevStep > 1 ? prevStep - 1 : 1) };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      desc: "",
      body: "",
      image: "",
      author: "",
      // Add other fields as needed
    },
  });

  const handleSubmit = async (data: FormData) => {
    console.log("Form submitted", data);

    const response = await fetch('/api/article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, image: image, author: selectedAuthor?.value }),
    });
    console.log(response);

    if (response.ok) {
      form.reset();
      refreshPapers();
      onClose();
    }
  };

  return (
    <div className="flex items-top h-screen">
      <Form  {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={`${step === 1 ? 'w-screen px-72 pt-20' : 'w-screen px-32 pt-10 items-top justify-center '}`}
        >
          {step === 1 && (
            <div className="flex flex-col gap-6">
              <Button size='icon' className="absolute top-4 right-[4.5rem]" onClick={nextStep}>
                <Icon icon='ic:sharp-arrow-back' width={25} />
              </Button>
              <SelectPopover
                items={authors}
                selectedItem={selectedAuthor}
                setSelectedItem={setSelectedAuthor}
                label="+ اختر الامانة"
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="العنوان" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="desc"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="h-14" placeholder="الوصف" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <ImageUpload />
            </div>
          )}
          {step === 2 && (
            <div>
              <Button size='icon' className="absolute top-4 right-[4.5rem]" onClick={prevStep}>
                <Icon icon='ic:sharp-arrow-forward' width={25} />
              </Button>
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <Editor value={field.value} onChange={(value) => field.onChange(value)} />
                )}
              />
              <Button
                type="submit"
                className="mt-6 font-medium text-lg">
                نشر المقال
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default Create;
