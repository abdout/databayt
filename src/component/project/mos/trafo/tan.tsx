'use client';
import { useProject } from "@/provider/project";
import React, { useEffect } from "react";

interface IndexProps {
  params: Params;
}

interface Params {
  id: string;
}

const Tan: React.FC<IndexProps> = ({ params }) => {
  const { project, fetchProject } = useProject();

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);

  const Tan = project && (
    project.lvOptions.lvCable.some(item => item.value === '2') ||
    project.hvOptions.hvCable.some(item => item.value === '2') ||
    project.mvOptions.mvCable.some(item => item.value === '2') ||
    project.evOptions.evCable.some(item => item.value === '2')
  );

  if (!Tan) {
    return null; // Don't render anything if Tan is not selected
  }

  return (
    <div>
      <h1>Tan Delta</h1>
      <p>
        Tan Delta, also known as Loss Angle or Dissipation Factor, is a measure of the electrical losses in an insulating material. It represents the angle in a power factor, impedance, or admittance diagram. A high Tan Delta value indicates a high level of dissipation and potential degradation of the insulation. It&apos;s a crucial parameter in assessing the health of electrical equipment and is often used in preventative maintenance and quality assurance.
      </p>
    </div>
  );
};

export default Tan;
