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
import { Icons } from '@/components/icons';
import { toast } from 'sonner';

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
    const selectedBusiness = businesses.find((b) => b.id === selections.business);
    const isSelected = selections.features.includes(featureId);
    const updatedFeatures = isSelected
      ? selections.features.filter((f) => f !== featureId)
      : [...selections.features, featureId];

    setSelections({ ...selections, features: updatedFeatures });

    // Show toast notification
    toast(
      `Feature ${isSelected ? 'removed' : 'added'}: ${
        selectedBusiness?.features.find((f) => f.id === featureId)?.name || featureId
      }`,
      {
        description: `Updated estimates: $${calculateEstimates().price} in ${calculateEstimates().time} days.`,
        duration: 3000,
      }
    );
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
    <div className=" flex h-screen  flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>

      <div className="space-y-6 max-w-[50%]">
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
            size="sm"
            onClick={() => step > 1 && setStep(step - 1)}
          >
            Back
          </Button>
          <Button
            size="sm"
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
