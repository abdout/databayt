import React, { useEffect } from "react";
import { useProject } from "@/provider/project";
import { HeadTitle } from "@/constant/project/itp/head";
import SubActivity from "./subactivity";

interface IndexProps {
  params: Params;
  option: OptionKey;
  index: number;
}

interface Params {
  id: string;
}

type OptionKey =
  | "evSwgr"
  | "evTrafo"
  | "evCable"
  | "evRmu"
  | "hvSwgr"
  | "hvTrafo"
  | "hvCable"
  | "hvRmu"
  | "mvSwgr"
  | "mvTrafo"
  | "mvCable"
  | "mvRmu"
  | "lvSwgr"
  | "lvTrafo"
  | "lvCable"
  | "lvRmu";

const Activity: React.FC<IndexProps> = ({ params, option, index }) => {
  const { project, fetchProject } = useProject();

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);

  const labels = HeadTitle(project)
    .map((item) => (item.value === option ? `${item.label}` : null))
    .filter(Boolean);

  return (
    <div className="flex flex-col">
      {labels.map((label, labelIndex) => (
        <h2
          key={labelIndex}>
          {`${index + labelIndex}. ${label}`}
        </h2>
      ))}
      <SubActivity params={params} option={option} index={index} />
    </div>
  );
};

export default Activity;
