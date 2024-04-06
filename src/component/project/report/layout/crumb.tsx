'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Fragment } from 'react';
import { useProject } from "@/provider/project";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  
}

interface Params {
    id: string;
  }
  
  const Breadcrumb = ({ params }: { params: Params }) => {
    const { project, fetchProject } = useProject();
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  // Find the index of 'project-report' in the pathnames array
  const projectReportIndex = pathnames.indexOf('report');

  // If 'project-report' is found, slice from the next index, else use the full pathnames array
  const breadcrumbPathnames = projectReportIndex !== -1 ? pathnames.slice(projectReportIndex + 1) : pathnames;

  const abbreviationMap: Record<string, string> = {
    ev: 'EV',
    lv: 'LV',
    hv: 'HV',
    mv: 'MV',
    swgr: 'Switchgear',
    trafo: 'Transformer',
    cable: 'Cable',
    rmu: 'RMU',

    
    // Add more mappings as needed
  };
  
  return (
    <div className="m-4 text-xl">
      {breadcrumbPathnames.map((value, index) => {
        const to = `/${breadcrumbPathnames.slice(0, index + 1).join('/')}`;
  
        return (
          <Fragment key={to}>
            {value
              .split('/')
              .map((part, partIndex) => {
                const partTo = `/project/${params.id}/report/${breadcrumbPathnames.slice(0, index + partIndex + 1).join('/')}`;
                return (
                  <Link href={partTo} key={partIndex} className="btn">
                    {abbreviationMap[part] || part.toUpperCase()}
                  </Link>
                );
              })
              .reduce((prev, curr, i) => <Fragment>{prev}{i > 0 ? ' / ' : ''}{curr}</Fragment>)}
            {index < breadcrumbPathnames.length - 1 && ' / '}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;