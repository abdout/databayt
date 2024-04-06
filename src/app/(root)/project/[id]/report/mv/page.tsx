"use client";
import { useProject } from "@/provider/project";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePDF } from "react-to-pdf";
import Action from "@/component/project/layout/action";
import Breadcrumb from "@/component/project/report/layout/crumb";

interface IndexProps {
  params: Params;
}

interface Params {
  id: string;
}

interface Option {
  label: string;
  value: string;
}

interface VoltageOptions {
  mvSwgr: Option[];
  mvTrafo: Option[];
  mvCable: Option[];
  mvRmu: Option[];
}

interface Voltages {
  LV: boolean;
  MV: boolean;
  HV: boolean;
  EV: boolean;
}

interface Project {
  voltages: Voltages;
  mvOptions: VoltageOptions;
  // ... other project properties
}

const optionKeyToLabel = {
  mvSwgr: "Switchgear",
  mvTrafo: "Transformer",
  mvCable: "Cable",
  mvRmu: "RMU",
};

const MV: React.FC<IndexProps> = ({ params }) => {
  const { project, fetchProject } = useProject();

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);
  const { toPDF, targetRef } = usePDF({
    filename: `${project?.customer} ITP.pdf`,
  });

  if (!project || !project.voltages.MV) {
    return null; // Don't render anything if the project data is not loaded yet or MV is not selected
  }

  const selectedOptions = Object.entries(project.mvOptions)
    .filter(([key, optionArray]) => optionArray.length > 0) // Filter out empty option arrays
    .map(([key, optionArray]) => key) // Get the keys of the non-empty option arrays
    .filter((key) => key in optionKeyToLabel); // Filter out keys that are not in the mapping object

  return (
    <div className="flex flex-col  ">
      <Action projectTitle={project?.customer || ""} toPDF={toPDF} />
      <Breadcrumb params={params} />
      {selectedOptions.map((optionKey: string) => (
        <Link
        href={`/project/${params.id}/report/mv/${optionKey.toLowerCase().substring(2)}`}
        key={optionKey}
        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50"
      >
        <Icon icon={"ph:folder-simple-thin"} height="36" />
        <h2 className="mt-1">{optionKeyToLabel[optionKey as keyof typeof optionKeyToLabel]}</h2>
      </Link>
      ))}
    </div>
  );
};

export default MV;