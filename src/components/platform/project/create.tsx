import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useProject } from "./context";
import { useState } from "react";
import { useUpload } from "@/components/upload/context";
import SelectPopover from "@/components/atom/popover";
import { lead, leads, status, statuses } from "./constant";

interface FormData {
  title: string;
  desc: string;
  lead: string;
  status: string;
}

const formSchema = z.object({
  title: z.string(),
  desc: z.string(),
  lead: z.string(),
  status: z.string(),
});

interface CreateProps {
  onClose: () => void;
}

const CreateProject: React.FC<CreateProps> = ({ onClose }) => {
  const { refreshProjects } = useProject();
  const { image } = useUpload();
  const [step, setStep] = useState(1);
  const [selectedLead, setSelectedLead] = useState<lead | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<status | null>(null);

  const nextStep = () => setStep(prevStep => (prevStep < 2 ? prevStep + 1 : 2));
  const prevStep = () => setStep(prevStep => (prevStep > 1 ? prevStep - 1 : 1));

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      desc: "",
      lead: "",
      status: "",
    },
  });

  const handleSubmit = async (data: FormData) => {
    console.log("Form submitted", data);

    const postData = {
      ...data,
      lead: selectedLead?.value, // Use the value of the selected lead
      status: selectedStatus?.value, // Use the value of the selected status
    };

    const response = await fetch('/api/project', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    console.log(response);

    if (response.ok) {
      form.reset();
      setSelectedLead(null); // Reset selected lead
      setSelectedStatus(null); // Reset selected status
      refreshProjects();
      onClose();
    }
  };

  return (
    <div className="flex items-top h-screen w-5/6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={`${step === 1 ? 'w-screen px-72 pt-20' : 'w-screen px-32 pt-10 items-top justify-center '}`}
        >
          {step === 1 && (
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="الاسم" {...field} />
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
              <FormField
                control={form.control}
                name="lead"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <SelectPopover
                        items={leads}
                        selectedItem={selectedLead}
                        setSelectedItem={(item) => {
                          setSelectedLead(item);
                          form.setValue("lead", item?.value ?? ""); // Update form state with the selected lead value
                        }}
                        label="+ الامانة"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <SelectPopover
                        items={statuses}
                        selectedItem={selectedStatus}
                        setSelectedItem={(item) => {
                          setSelectedStatus(item);
                          form.setValue("status", item?.value ?? ""); // Update form state with the selected status value
                        }}
                        label="+ الحالة"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="mt-6 h-12 font-medium text-lg"
              >
                انشاء مشروع
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default CreateProject;
