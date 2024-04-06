// EvStep.tsx
import React from 'react';

import { SelectOption } from '@/component/atom/select/select';
import Item from '../../../atom/select/item';

interface EvStepProps {
  evOptions: SelectOption[];
  EvSwgr: SelectOption[];
  setEvSwgr: (evSwgr: SelectOption[]) => void;
  EvTrafo: SelectOption[];
  setEvTrafo: (evTrafo: SelectOption[]) => void;
  EvCable: SelectOption[];
  setEvCable: (evCable: SelectOption[]) => void;
  EvRmu: SelectOption[];
  setEvRmu: (evRmu: SelectOption[]) => void;
}

const EvStep: React.FC<EvStepProps> = ({ evOptions, EvSwgr, setEvSwgr, EvTrafo, setEvTrafo, EvCable, setEvCable, EvRmu, setEvRmu }) => {
  return (
    <div className='space-y-4'>
      <h3>Extra High</h3>
      {evOptions.some((option) => option.label === "Swgr") && (
        <Item
          label="EV Swgr"
          options={EvSwgr}
          onOptionChange={setEvSwgr}
        />
      )}
      {evOptions.some((option) => option.label === "Trafo") && (
        <Item
          label="EV Trafo"
          options={EvTrafo}
          onOptionChange={setEvTrafo}
        />
      )}
      {evOptions.some((option) => option.label === "Cable") && (
        <Item
          label="EV Cable"
          options={EvCable}
          onOptionChange={setEvCable}
        />
      )}
      {evOptions.some((option) => option.label === "RMU") && (
        <Item
          label="EV RMU"
          options={EvRmu}
          onOptionChange={setEvRmu}
        />
      )}
    </div>
  );
};

export default EvStep;