"use client";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Footer from "@/component/report/footer/table";
import Header from "@/component/report/header/table";
import Kit from "@/component/report/kit/table";
import React, { useEffect, useState, useRef } from "react";
import Breadcrumb from "@/component/project/report/layout/crumb";
import Action from "@/component/project/layout/action";
import { useProject } from "@/provider/project";
import General from "@/component/report/general/info";
import { coil, crm, electrical, general, hipot, ir, mechnical, timing } from "@/constant/report/cb";
import Mechnical from "@/component/report/cb/mechnical";
import Electrical from "@/component/report/cb/electrical";
import IR from "@/component/report/cb/ir";
import CRM from "@/component/report/cb/crm";
import HiPot from "@/component/report/cb/hipot";
import Coil from "@/component/report/cb/coil";
import Timing from "@/component/report/cb/timing";
import Spring from "@/component/report/cb/spring";

// Get the current URL path
const path = window.location.pathname;

// Split the path into segments
const segments = path.split('/');

// Get the folder name
const description = segments[segments.length - 1]; // -2 because -1 would be the file name
interface Params {
    id: string;
}

const CB = ({ params }: { params: Params }) => {
  const { project, fetchProject } = useProject();
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null); // Initialize the ref with a null value

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);

  const toPDF = async () => {
    if (targetRef.current) { // Check if the ref is not null
      const canvas = await html2canvas(targetRef.current);
      const imgData = canvas.toDataURL('image/png');
    
      // A4 dimensions are 210 x 297mm.
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
    
      // Calculate the width and height of the image in the PDF, considering padding
      const padding = 10; // 10mm padding on each side
      const imgWidth = pageWidth - 2 * padding;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
      let heightLeft = imgHeight;
      let position = 0;
    
      pdf.addImage(imgData, 'PNG', padding, padding, imgWidth, imgHeight + position, undefined, 'FAST');
    
      heightLeft -= pageHeight - 2 * padding;
    
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', padding, position, imgWidth, imgHeight + position, undefined, 'FAST');
        heightLeft -= pageHeight;
      }
    
      pdf.save(`${project?.customer} ITP.pdf`);
    }
  }

  return (
    <div className="flex flex-col gap-4 mb-10">
      <Action projectTitle={project?.customer || ""} toPDF={toPDF} />
      <Breadcrumb params={params} />
      <div ref={targetRef} className="space-y-10 mr-20">
        <Header triggerUpdate={triggerUpdate} description={description}/>
        <General data={general} />
        <Mechnical data={mechnical} />
        <Electrical data={electrical} />
        <IR data={ir} />
        <CRM data={crm} />
        <Coil data={coil} />
        <Spring />
        <Timing data={timing} />  
        <HiPot data={hipot} />
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
export default CB;