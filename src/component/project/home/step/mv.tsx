// MvStep.tsx
import React from 'react';

import { SelectOption } from '@/component/atom/select/select';
import Item from '../../../atom/select/item';
import { MvSwgr, MvTrafo, MvCable, MvRmu, } from "@/constant/project/item";

interface MvStepProps {
  mvOptions: SelectOption[];
  setMvSwgr: (mvSwgr: SelectOption[]) => void;
  setMvTrafo: (mvTrafo: SelectOption[]) => void;
  setMvCable: (mvCable: SelectOption[]) => void;
  setMvRmu: (mvRmu: SelectOption[]) => void;
}

const MvStep: React.FC<MvStepProps> = ({ mvOptions, setMvSwgr, setMvTrafo, setMvCable, setMvRmu }) => {
  return (
    <div className='space-y-4'>
      <h3>Medium Voltage</h3>
      {mvOptions.some((option) => option.label === "Swgr") && (
        <Item
          label="MV Swgr"
          options={MvSwgr}
          onOptionChange={setMvSwgr}
        />
      )}
      {mvOptions.some((option) => option.label === "Trafo") && (
        <Item
          label="MV Trafo"
          options={MvTrafo}
          onOptionChange={setMvTrafo}
        />
      )}
      {mvOptions.some((option) => option.label === "Cable") && (
        <Item
          label="MV Cable"
          options={MvCable}
          onOptionChange={setMvCable}
        />
      )}
      {mvOptions.some((option) => option.label === "RMU") && (
        <Item
          label="MV RMU"
          options={MvRmu}
          onOptionChange={setMvRmu}
        />
      )}
    </div>
  );
};

export default MvStep;