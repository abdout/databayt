// LvStep.tsx
import React from 'react';

import { SelectOption } from '@/component/atom/select/select';
import Item from '../../../atom/select/item';

interface LvStepProps {
  lvOptions: SelectOption[];
  LvSwgr: SelectOption[];
  setLvSwgr: (lvSwgr: SelectOption[]) => void;
  LvTrafo: SelectOption[];
  setLvTrafo: (lvTrafo: SelectOption[]) => void;
  LvCable: SelectOption[];
  setLvCable: (lvCable: SelectOption[]) => void;
  LvRmu: SelectOption[];
  setLvRmu: (lvRmu: SelectOption[]) => void;
}

const LvStep: React.FC<LvStepProps> = ({ lvOptions, LvSwgr, setLvSwgr, LvTrafo, setLvTrafo, LvCable, setLvCable, LvRmu, setLvRmu }) => {
  return (
    <div className='space-y-4'>
      <h3>Low Voltage</h3>
      {lvOptions.some((option) => option.label === "Swgr") && (
        <Item
          label="LV Swgr"
          options={LvSwgr}
          onOptionChange={setLvSwgr}
        />
      )}
      {lvOptions.some((option) => option.label === "Trafo") && (
        <Item
          label="LV Trafo"
          options={LvTrafo}
          onOptionChange={setLvTrafo}
        />
      )}
      {lvOptions.some((option) => option.label === "Cable") && (
        <Item
          label="LV Cable"
          options={LvCable}
          onOptionChange={setLvCable}
        />
      )}
      {lvOptions.some((option) => option.label === "RMU") && (
        <Item
          label="LV RMU"
          options={LvRmu}
          onOptionChange={setLvRmu}
        />
      )}
    </div>
  );
};

export default LvStep;