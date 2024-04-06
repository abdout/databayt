"use client";
import React, { useEffect } from "react";
import { usePDF } from "react-to-pdf";
import { useProject } from "@/provider/project";
import Action from "@/component/project/layout/action";
import Team from "@/component/project/plan/team";
import Kit from "@/component/project/plan/kit";

interface Params {
  id: string;
}
const teamMembers = [
  { image: '/team/eng/osman.png', lead: true },
  { image: '/team/eng/osman.png', lead: false },
  { image: '/team/eng/osman.png', lead: false },
  { image: '/team/eng/osman.png', lead: false },
];
const kit = [
  { image: '/kit/b10e.png' },
  { image: '/kit/ct.png' },
  { image: '/kit/delta4000.png'},
  { image: '/kit/dlro600.png'},
];
const Plan = ({ params }: { params: Params }) => {
  const { project, fetchProject } = useProject();
  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);
  const { toPDF, targetRef } = usePDF({
    filename: `${project?.customer} Plan.pdf`,
  });
  return (
    <div className="flex flex-col gap-8 mb-10">
      <Action projectTitle={project?.customer || ""} toPDF={toPDF} />
      <div ref={targetRef} className="space-y-8">
        <Team members={teamMembers} />
        <Kit items={kit} />
      </div>
    </div>
  );
};

export default Plan;
