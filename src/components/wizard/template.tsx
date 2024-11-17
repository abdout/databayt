
// components/TemplateSelector.tsx
import { Template } from '@/components/wizard/constant';
import Image from 'next/image';

type TemplateSelectorProps = {
  templates: Template[];
  selectedTemplate: string;
  onSelect: (templateId: string) => void;
};

export const TemplateSelector = ({
  templates,
  selectedTemplate,
  onSelect
}: TemplateSelectorProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Template</h2>
      <div className="grid grid-cols-2 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`cursor-pointer rounded-lg border-2 p-4 transition-all ${
              selectedTemplate === template.id
                ? 'border-blue-500'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onSelect(template.id)}
          >
            <Image
              src={template.imagePath}
              alt={template.name}
              width={400}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
            <p className="text-gray-600">{template.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// components/EstimatesDisplay.tsx
type EstimatesDisplayProps = {
  price: number;
  time: number;
};
