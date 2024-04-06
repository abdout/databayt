"use client";
import React, { useEffect } from "react";
import { usePDF } from "react-to-pdf";
import { useProject } from "@/provider/project";
import Index from "@/component/project/itp";
import ActivityWrapper from "@/component/project/itp/warpper";
import Action from "@/component/project/layout/action";

interface Params {
  id: string;
}

const ITP = ({ params }: { params: Params }) => {
  const { project, fetchProject } = useProject();
  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);
  const { toPDF, targetRef } = usePDF({
    filename: `${project?.customer} ITP.pdf`,
  });
  return (
    <div className="flex flex-col gap-8 mb-10">
      <Action projectTitle={project?.customer || ""} toPDF={toPDF} />
      <div ref={targetRef} className="space-y-8">
        <Index params={params} />
        <ActivityWrapper params={params} />
      </div>
    </div>
  );
};

export default ITP;
