
// components/FeatureSelector.tsx
import { Feature } from '@/components/wizard/constant';

type FeatureSelectorProps = {
  features: Feature[];
  selectedFeatures: string[];
  onToggle: (featureId: string) => void;
  businessName: string;
};

export const FeatureSelector = ({
  features,
  selectedFeatures,
  onToggle,
  businessName
}: FeatureSelectorProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Select Features for {businessName}
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {features.map(({ id, name, popularity }) => (
          <span
            key={id}
            className={`cursor-pointer transition-all hover:opacity-100 ${
              selectedFeatures.includes(id)
                ? 'text-blue-500 font-bold opacity-100'
                : 'text-gray-700 opacity-50'
            }`}
            style={{
              fontSize: `${0.6 + (popularity || 5) / 15}rem`,
            }}
            onClick={() => onToggle(id)}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};
