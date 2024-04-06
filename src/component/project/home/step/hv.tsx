// HvStep.tsx
import React from 'react';

import { SelectOption } from '@/component/atom/select/select';
import Item from '../../../atom/select/item';

interface HvStepProps {
  hvOptions: SelectOption[];
  HvSwgr: SelectOption[];
  setHvSwgr: (hvSwgr: SelectOption[]) => void;
  HvTrafo: SelectOption[];
  setHvTrafo: (hvTrafo: SelectOption[]) => void;
  HvCable: SelectOption[];
  setHvCable: (hvCable: SelectOption[]) => void;
  HvRmu: SelectOption[];
  setHvRmu: (hvRmu: SelectOption[]) => void;
}

const HvStep: React.FC<HvStepProps> = ({ hvOptions, HvSwgr, setHvSwgr, HvTrafo, setHvTrafo, HvCable, setHvCable, HvRmu, setHvRmu }) => {
  return (
    <div className='space-y-4'>
      <h3>High Voltage</h3>
      {hvOptions.some((option) => option.label === "Swgr") && (
        <Item
          label="HV Swgr"
          options={HvSwgr}
          onOptionChange={setHvSwgr}
        />
      )}
      {hvOptions.some((option) => option.label === "Trafo") && (
        <Item
          label="HV Trafo"
          options={HvTrafo}
          onOptionChange={setHvTrafo}
        />
      )}
      {hvOptions.some((option) => option.label === "Cable") && (
        <Item
          label="HV Cable"
          options={HvCable}
          onOptionChange={setHvCable}
        />
      )}
      {hvOptions.some((option) => option.label === "RMU") && (
        <Item
          label="HV RMU"
          options={HvRmu}
          onOptionChange={setHvRmu}
        />
      )}
    </div>
  );
};

export default HvStep;