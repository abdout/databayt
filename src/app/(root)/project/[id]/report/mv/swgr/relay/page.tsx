"use client";


import Footer from "@/component/report/footer/table";
import Header from "@/component/report/header/table";
import Kit from "@/component/report/kit/table";
import React, { useEffect, useState } from "react";
import { usePDF } from "react-to-pdf";
import Breadcrumb from "@/component/project/report/layout/crumb";
import Action from "@/component/project/layout/action";
import { useProject } from "@/provider/project";
import General from "@/component/report/general/info";
import { general } from "@/constant/report/cb";

// Get the current URL path
const path = window.location.pathname;

// Split the path into segments
const segments = path.split('/');

// Get the folder name
const description = segments[segments.length - 1]; // -2 because -1 would be the file name
interface Params {
    id: string;
}

const Relay = ({ params }: { params: Params }) => {
  const { project, fetchProject } = useProject();
  const [triggerUpdate, setTriggerUpdate] = useState(false);

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);
  const { toPDF, targetRef } = usePDF({
    filename: `${project?.customer} ITP.pdf`,
  });

  return (
   
      <div className="flex flex-col gap-4 mb-10">
        <Action projectTitle={project?.customer || ""} toPDF={toPDF} />
        <Breadcrumb params={params} />
        <div ref={targetRef} className="space-y-10 mr-20">
          <Header triggerUpdate={triggerUpdate} description={description}/>
          <General data={general}/>
          <Kit triggerUpdate={triggerUpdate}/>
          <Footer 
            triggerUpdate={triggerUpdate} 
            customer={project?.customer || ""} 
            consultant={project?.consultant || ""} 
          />
        </div>
      </div>
    
  );
};
export default Relay;