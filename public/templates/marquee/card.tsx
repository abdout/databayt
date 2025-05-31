import { cn } from "@/lib/utils";
import { features, Feature } from "./constant";
import Image from "next/image";

interface FeatureCardProps {
  icon: string | React.ComponentType<any>;
  name: string;
  description?: string;
  className?: string;
}

export const FeatureCard = ({
  icon,
  name,
  description,
  className
}: FeatureCardProps) => {
  const renderIcon = () => {
    if (typeof icon === 'string') {
      // Handle image icons
      return (
        <Image
          src={icon}
          alt={`${name} icon`}
          width={24}
          height={24}
          className="text-gray-900 dark:text-gray-100"
        />
      );
    } else {
      // Handle React component icons
      const IconComponent = icon;
      return (
        <IconComponent 
          width={24} 
          height={24} 
          className="text-gray-900 dark:text-gray-100" 
        />
      );
    }
  };

  return (
    <figure
      className={cn(
        "relative min-w-fit cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "transition-colors duration-200",
        className
      )}
    >
      <div className="flex flex-col items-start gap-3">
        {renderIcon()}
        <div className="flex flex-col gap-1">
          <figcaption className="text-base font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
            {name}
          </figcaption>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </figure>
  );
};

// Component to render a grid of all features
export const FeaturesGrid = ({ 
  className,
  showDescription = true 
}: { 
  className?: string
  showDescription?: boolean 
}) => {
  return (
    <div className={cn(
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
      className
    )}>
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          name={feature.name}
          description={showDescription ? feature.description : undefined}
        />
      ))}
    </div>
  );
};

// Component to render specific features by IDs
export const SelectedFeatures = ({ 
  featureIds, 
  className,
  showDescription = true 
}: { 
  featureIds: string[]
  className?: string
  showDescription?: boolean 
}) => {
  const selectedFeatures = features.filter(feature => 
    featureIds.includes(feature.id)
  );

  return (
    <div className={cn(
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
      className
    )}>
      {selectedFeatures.map((feature) => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          name={feature.name}
          description={showDescription ? feature.description : undefined}
        />
      ))}
    </div>
  );
};

// Component to render features by category
export const FeaturesByCategory = ({ 
  category, 
  className,
  showDescription = true 
}: { 
  category: string
  className?: string
  showDescription?: boolean 
}) => {
  const categoryFeatures = features.filter(feature => 
    feature.id.includes(category.toLowerCase()) || 
    feature.name.toLowerCase().includes(category.toLowerCase()) ||
    (feature.description && feature.description.toLowerCase().includes(category.toLowerCase()))
  );

  if (categoryFeatures.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        No features found for category: {category}
      </div>
    );
  }

  return (
    <div className={cn(
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
      className
    )}>
      {categoryFeatures.map((feature) => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          name={feature.name}
          description={showDescription ? feature.description : undefined}
        />
      ))}
    </div>
  );
};