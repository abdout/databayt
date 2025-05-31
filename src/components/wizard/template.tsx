import Image from 'next/image';

type TemplateSelectorProps = {
  selectedTemplate: string;
  onSelect: (templateId: string) => void;
};

export const TemplateSelector = ({
  selectedTemplate,
  onSelect
}: TemplateSelectorProps) => {
  const templates = [
    { id: 'template-a', imagePath: '/templates/a.png' },
    { id: 'template-sudan', imagePath: '/templates/sudan.jpg' },
    { id: 'template-default', imagePath: '/templates/fallback.png' }
  ];

  return (
    <div className="w-full ">
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-2xl md:text-5xl flex items-center justify-center pb-7">
        Which Template!
      </h2>
      <div className="flex justify-center gap-x-5 -mx-20">
      
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => onSelect(template.id)}
            className={`cursor-pointer transition-all hover:scale-105 p-2 rounded-lg ${
              selectedTemplate === template.id
                ? 'ring-2 ring-blue-500'
                : ''
            }`}
          >
            
              <Image
                src={template.imagePath}
                alt="Template preview"
                width={750}
                height={400}
                className="object-cover object-center w-96 h-40"
              />
           
          </div>
        ))}
      </div>
    </div>
  );
};