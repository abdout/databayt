'use client';
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Editor from '@/components/editor/ui';
import ImageUpload from '@/components/upload/image';

import { useState, useEffect } from "react";
import { useUpload } from "@/components/upload/context";
import { Icon } from "@iconify/react";
import SelectPopover from "@/components/atom/popover";
import { useArticle } from "@/components/root/article/context";

import { author, authors } from "@/components/root/article/constant";
import Link from 'next/link';
import { useRouter } from "next/navigation";

interface FormData {
    title: string;
    desc: string;
    body: string;
    image: string;
    author: string;
}

const formSchema = z.object({
    title: z.string().min(1, "العنوان مطلوب"),  // Title is required
    desc: z.string().min(1, "الوصف مطلوب"),     // Description is required
    body: z.string().min(1, "المحتوى مطلوب"),   // Body is required
    image: z.string().min(1, "الصورة مطلوبة"),  // Image is required
    author: z.string().min(1, "الكاتب مطلوب"),  // Author is required
});

const Create = () => {
    const { refreshArticles } = useArticle();
    const { image } = useUpload();
    const [step, setStep] = useState(1);
    const [selectedAuthor, setSelectedAuthor] = useState<author | null>(null);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            desc: "",
            body: "",
            image: "",
            author: "",
        },
    });

    useEffect(() => {
        // Update form values for image and author when they change
        form.setValue("image", image || "");
        form.setValue("author", selectedAuthor?.value || "");
    }, [image, selectedAuthor, form]);

    const nextStep = () => { setStep(prevStep => (prevStep < 2 ? prevStep + 1 : 2)); };
    const prevStep = () => { setStep(prevStep => (prevStep > 1 ? prevStep - 1 : 1)); };

    const router = useRouter();
    const handleSubmit = async (data: FormData) => {
        console.log("Form submitted", data);

        const response = await fetch('/api/article', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        console.log(response);

        if (response.ok) {
            form.reset();
            refreshArticles();
            router.push('/article');
        }
    };

    return (
        <div className="flex items-top h-screen z-50">
            <Form  {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className={`${step === 1 ? 'w-screen px-72 pt-20' : 'w-screen px-32 pt-10 items-top justify-center '}`}
                >
                    <div className="flex items-center gap-2 absolute top-4 right-[4.3rem]">
                        <Link href="/article">
                            <Button size='icon' variant='outline' className="rounded-full">
                                <Icon icon='ic:twotone-close' width={25} />
                            </Button>
                        </Link>
                        {step === 1 ? (
                            <Button type="button" size='icon' className="rounded-full" onClick={nextStep}>
                                <Icon icon='ic:sharp-arrow-back' width={25} />
                            </Button>
                        ) : (
                            <Button type="button" size='icon' className="rounded-full" onClick={prevStep}>
                                <Icon icon='ic:sharp-arrow-forward' width={25} />
                            </Button>
                        )}
                    </div>

                    {step === 1 && (
                        <div className="flex flex-col gap-6">
                            <SelectPopover
                                items={authors}
                                selectedItem={selectedAuthor}
                                setSelectedItem={setSelectedAuthor}
                                label="+ اختر كاتب"
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
                            <FormField
                                control={form.control}
                                name="body"
                                render={({ field }) => (
                                    <Editor value={field.value} onChange={(value) => field.onChange(value)} />
                                )}
                            />
                            <Button
                                type="submit"
                                disabled={!form.formState.isValid}  // Disable the button if the form is invalid
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
