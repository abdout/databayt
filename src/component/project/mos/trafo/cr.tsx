'use client';
import { useProject } from "@/provider/project";
import React, { useEffect } from "react";

interface IndexProps {
  params: Params;
}

interface Params {
  id: string;
}

const CR: React.FC<IndexProps> = ({ params }) => {
  const { project, fetchProject } = useProject();

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);

  const CR = project && (
    project.lvOptions.lvCable.some(item => item.value === '2') ||
    project.hvOptions.hvCable.some(item => item.value === '2') ||
    project.mvOptions.mvCable.some(item => item.value === '2') ||
    project.evOptions.evCable.some(item => item.value === '2')
  );

  if (!CR) {
    return null; // Don't render anything if CR is not selected
  }

  return (
    <div>
      <h1>Contact Resistance</h1>
      <p>
        Contact resistance is the resistance encountered at the point of contact between two conductive elements. It is a critical factor in many electronic devices and power systems. High contact resistance can lead to energy loss, overheating, and failure of the circuit. Therefore, it&apos;s important to minimize contact resistance to ensure efficient operation.
      </p>
    </div>
  );
};

export default CR;
