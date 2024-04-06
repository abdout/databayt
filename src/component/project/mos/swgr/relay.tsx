'use client';
import { useProject } from "@/provider/project";
import React, { useEffect } from "react";

interface IndexProps {
  params: Params;
}

interface Params {
  id: string;
}

const Relay: React.FC<IndexProps> = ({ params }) => {
  const { project, fetchProject } = useProject();

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);

  const Relay = project && (
    project.lvOptions.lvCable.some(item => item.value === '2') ||
    project.hvOptions.hvCable.some(item => item.value === '2') ||
    project.mvOptions.mvCable.some(item => item.value === '2') ||
    project.evOptions.evCable.some(item => item.value === '2')
  );

  if (!Relay) {
    return null; // Don't render anything if Relay is not selected
  }

  return (
    <div>
      <h1>Relay</h1>
      <p>
      A relay is an electrically operated switch that allows you to turn on or off a circuit using voltage and/or current much higher than a human can safely handle. Relays are used where it is necessary to control a circuit by a separate low-power signal, or where several circuits must be controlled by one signal.
    </p>
      
    </div>
  );
};

export default Relay;
