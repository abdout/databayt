import React, { useEffect } from "react";
import { useProject } from "@/provider/project";
import {
  EvCable,
  EvRmu,
  EvSwgr,
  EvTrafo,
  HvCable,
  HvRmu,
  HvSwgr,
  HvTrafo,
  LvCable,
  LvRmu,
  LvSwgr,
  LvTrafo,
  MvCable,
  MvRmu,
  MvSwgr,
  MvTrafo,
} from "@/constant/project/item";

import { body } from "@/constant/project/mos/body";
import { Abb } from "@/constant/abb";

type OptionKey = 'evSwgr' | 'evTrafo' | 'evCable' | 'evRmu' | 'hvSwgr' | 'hvTrafo' | 'hvCable' | 'hvRmu' | 'mvSwgr' | 'mvTrafo' | 'mvCable' | 'mvRmu' | 'lvSwgr' | 'lvTrafo' | 'lvCable' | 'lvRmu';

interface IndexProps {
  params: Params;
  option: OptionKey;
  index: number;
}

interface Params {
  id: string;
}

interface Option {
  value: string;
}

const SubActivity: React.FC<IndexProps> = ({ params, option, index }) => {
  const { project, fetchProject } = useProject();

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);

  if (!project) {
    return null;
  }

  const optionArrays = {
    evSwgr: EvSwgr,
    evTrafo: EvTrafo,
    evCable: EvCable,
    evRmu: EvRmu,
    hvSwgr: HvSwgr,
    hvTrafo: HvTrafo,
    hvCable: HvCable,
    hvRmu: HvRmu,
    mvSwgr: MvSwgr,
    mvTrafo: MvTrafo,
    mvCable: MvCable,
    mvRmu: MvRmu,
    lvSwgr: LvSwgr,
    lvTrafo: LvTrafo,
    lvCable: LvCable,
    lvRmu: LvRmu,
  };

  const voltageType = option.substring(0, 2) + 'Options';

  const selectedOptions = optionArrays[option].filter(item => 
    (project as any)[voltageType][option]?.some((option: Option) => option.value === item.value)
  );
  
  const labels = selectedOptions.map((item, itemIndex) => {
    const Body = body[option][item.label];
      if (!Body) {
        console.error(`Body component not found for option: ${option}, label: ${item.label}`);
        return null;
      }
    return (
      <div key={itemIndex}>
        <h4>
          {`${index}.${itemIndex + 1}. ${Abb[item.label]}`}
        </h4>
        <div className="mt-4">
          <Body />
        </div>
      </div>
    );
  });
  
  return <div>{labels}</div>;
};

export default SubActivity;