// pages/wizard.tsx
'use client';
import { useState } from 'react';
import { BusinessSelector } from '@/components/wizard/business';
import { FeatureSelector } from '@/components/wizard/feature';
import { TemplateSelector } from '@/components/wizard/template';

import { EstimatesDisplay } from '@/components/wizard/estimate';
import { StepIndicator } from '@/components/wizard/indicator';
import { businesses } from '@/components/wizard/constant';
import { Button, buttonVariants } from '@/components/ui/button';
import { WizardSelections } from '@/components/wizard/constant';
import ThemeSelector from '@/components/wizard/theme';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ExtendedWizardSelections extends WizardSelections {
  themeColor?: string;
  borderRadius?: number;
}

export default function SelectionWizard() {
  const [step, setStep] = useState<number>(1);
  const [selections, setSelections] = useState<ExtendedWizardSelections>({
    business: '',
    features: [],
    template: '',
    themeColor: 'zinc',
    borderRadius: 0.5,
  });

  const calculateEstimates = () => {
    let totalPrice = 0;
    let totalTime = 0;

    const selectedBusiness = businesses.find((b) => b.id === selections.business);
    selections.features.forEach((featureId) => {
      const feature = selectedBusiness?.features.find((f) => f.id === featureId);
      if (feature) {
        totalPrice += feature.price;
        totalTime += feature.time;
      }
    });

    return { price: totalPrice, time: totalTime };
  };

  const handleBusinessSelect = (businessId: string) => {
    setSelections({ ...selections, business: businessId, features: [] });
    setStep(2);
  };

  const handleFeatureToggle = (featureId: string) => {
    const updatedFeatures = selections.features.includes(featureId)
      ? selections.features.filter((f) => f !== featureId)
      : [...selections.features, featureId];
    setSelections({ ...selections, features: updatedFeatures });
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelections({ ...selections, template: templateId });
  };

  const handleThemeSelect = (color: string, radius: number) => {
    setSelections({ ...selections, themeColor: color, borderRadius: radius });
  };

  const estimates = calculateEstimates();
  const selectedBusiness = businesses.find((b) => b.id === selections.business);

  return (
    <div className="container mx-auto px-40 py-8 h-sreen pb-60 h-screen">
      <div className="flex items-end justify-end ">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }, ),
                "px-4"
              )}
            >
              Back
            </Link>
            </div>
      <div className="space-y-6">
        {step === 1 && (
          <BusinessSelector
            businesses={businesses}
            selectedBusiness={selections.business}
            onSelect={handleBusinessSelect}
          />
        )}

        {step === 2 && selectedBusiness && (
          <FeatureSelector
            features={selectedBusiness.features}
            selectedFeatures={selections.features}
            onToggle={handleFeatureToggle}
            businessName={selectedBusiness.name}
          />
        )}

        {step === 3 && (
          <TemplateSelector
            selectedTemplate={selections.template}
            onSelect={handleTemplateSelect}
          />
        )}

        {step === 4 && (
          <ThemeSelector
            selectedColor={selections.themeColor}
            selectedRadius={selections.borderRadius}
            onSelect={handleThemeSelect}
          />
        )}

        {step > 1 && <EstimatesDisplay {...estimates} />}
      </div>

      <div className="mt-8 flex flex-col items-center space-y-4">
        <StepIndicator currentStep={step} totalSteps={4} />
        
        <div className="space-x-4">
          <Button
            variant="outline"
            onClick={() => step > 1 && setStep(step - 1)}
          >
            Back
          </Button>
          <Button
            onClick={() => step < 4 && setStep(step + 1)}
            disabled={
              (step === 1 && !selections.business) ||
              (step === 2 && selections.features.length === 0)
            }
          >
            {step === 4 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}