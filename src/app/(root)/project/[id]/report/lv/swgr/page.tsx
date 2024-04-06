"use client";
import { useProject } from "@/provider/project";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface Params {
  id: string;
}

interface Option {
  label: string;
  value: string;
}

const Swgr = ({ params }: { params: Params }) => {
  const { project, fetchProject } = useProject();

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);

  if (!project || !project.voltages.LV) {
    return null; // Don't render anything if the project data is not loaded yet or EV is not selected
  }

  const selectedOptions = project.lvOptions.lvSwgr;

  return (
    <div className="flex flex-col space-y-1 ">
      {selectedOptions.map((option: Option) => (
        <Link
          href={`/project/${
            params.id
          }/report/lv/${option.value.toLowerCase()}`}
          key={option.value}
          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50"
        >
          <Icon icon={"ph:folder-simple-thin"} height="36" />
          <h2 className="mt-1">{option.label}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Swgr;