// ItemStep.tsx
import React from 'react';

import { SelectOption } from '@/component/atom/select/select';
import Volt from './volt';
import Item from '../../../atom/select/item';

interface ItemStepProps {
  voltages: { [key: string]: boolean };
  setVoltages: (voltages: { [key: string]: boolean }) => void;
  lv: SelectOption[];
  setLvOptions: (lvOptions: SelectOption[]) => void;
  mv: SelectOption[];
  setMvOptions: (mvOptions: SelectOption[]) => void;
  hv: SelectOption[];
  setHvOptions: (hvOptions: SelectOption[]) => void;
  ev: SelectOption[];
  setEvOptions: (evOptions: SelectOption[]) => void;
}

const ItemStep: React.FC<ItemStepProps> = ({ voltages, setVoltages, lv, setLvOptions, mv, setMvOptions, hv, setHvOptions, ev, setEvOptions }) => {
  return (
    <div className="space-y-4 justify-center items-center">
      <h3>Item</h3>
      <Volt onVoltChange={setVoltages} />
      {voltages.LV && (<Item label="LV" options={lv} onOptionChange={setLvOptions} placeholder="Low voltage" />)}
      {voltages.MV && (<Item label="MV" options={mv} onOptionChange={setMvOptions} placeholder="Medium voltage" />)}
      {voltages.HV && (<Item label="HV" options={hv} onOptionChange={setHvOptions} placeholder="Hight voltage" /> )}
      {voltages.EV && (<Item label="EV" options={ev} onOptionChange={setEvOptions} placeholder="Extra high" />)}
    </div>
  );
};

export default ItemStep;