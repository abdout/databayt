'use client';
import { useProject } from "@/provider/project";
import React, { useEffect } from "react";

interface IndexProps {
  params: Params;
}

interface Params {
  id: string;
}

const IR: React.FC<IndexProps> = ({ params }) => {
  const { project, fetchProject } = useProject();

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);

  const IR = project && (
    project.lvOptions.lvCable.some(item => item.value === '2') ||
    project.hvOptions.hvCable.some(item => item.value === '2') ||
    project.mvOptions.mvCable.some(item => item.value === '2') ||
    project.evOptions.evCable.some(item => item.value === '2')
  );

  if (!IR) {
    return null; // Don't render anything if IR is not selected
  }

  return (
    <div>
      <h1>Insulation Resistance</h1>
      <p>
      Insulation resistance is a measure of the resistance offered by an insulating material to the flow of electric current. It is a key parameter in assessing the quality and integrity of electrical insulation in cables, transformers, motors, and other electrical devices. A high insulation resistance value is desirable as it indicates good insulation and helps prevent leakage currents and potential faults.
    </p>
      
    </div>
  );
};

export default IR;
