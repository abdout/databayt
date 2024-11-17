
// components/TemplateSelector.tsx
import { Template } from '@/components/wizard/constant';
import Image from 'next/image';

type TemplateSelectorProps = {
  templates: Template[];
  selectedTemplate: string;
  selectedBusiness: string; // Add selected business prop
  onSelect: (templateId: string) => void;
};

export const TemplateSelector = ({
  templates,
  selectedTemplate,
  selectedBusiness,
  onSelect
}: TemplateSelectorProps) => {
  // Filter templates based on selected business
  const filteredTemplates = templates.filter(template => 
    template.businessTypes.includes(selectedBusiness)
  );

  return (
    <div>
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-2xl md:text-5xl flex items-center justify-center pb-7">
        Which Template!
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className={`cursor-pointer rounded-lg border-2 p-4 transition-all ${
              selectedTemplate === template.id
                ? 'border-blue-800'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onSelect(template.id)}
          >
            <Image
              src={template.imagePath}
              alt={template.name}
              width={400}
              height={300}
              className=""
            />
            <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
            <p className="text-gray-600">{template.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};