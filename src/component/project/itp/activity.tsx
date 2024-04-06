import Cell from "@/component/project/itp/cell";
import { useProject } from "@/provider/project";
import React, { useEffect } from "react";
import Header from "./header";
import Table from "./table";
import { Accept, Document } from "@/constant/project/itp/table";
import { HeadTitle } from "@/constant/project/itp/head";
import SubActivity from "./subactivity";

interface IndexProps {
  params: Params;
  option: OptionKey;
  index: number;
}

interface Params {
  id: string;
}

type OptionKey = 'evSwgr' | 'evTrafo' | 'evCable' | 'evRmu' | 'hvSwgr' | 'hvTrafo' | 'hvCable' | 'hvRmu' | 'mvSwgr' | 'mvTrafo' | 'mvCable' | 'mvRmu' | 'lvSwgr' | 'lvTrafo' | 'lvCable' | 'lvRmu';

const Activity: React.FC<IndexProps> = ({ params, option, index }) => {
  const { project, fetchProject } = useProject();

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);

  const labels = HeadTitle(project).map((item) => 
    item.value === option ? `${item.label}` : null
  ).filter(Boolean);

  return (
    <div className="flex flex-col">
      <Header />
      
      {labels.map((label, labelIndex) => (
        <Cell
          key={labelIndex}
          data={`${index + labelIndex}. ${label} PRECOMMISSIONING TEST`}
          head={true}
          bg={2}
          alian={true}
          end={true}
          width="1239"
        />
      ))}
      
      <Cell data="DOCUMENT REVIEW" alian={true} end={true} width="1239"/>
      
      <Table data={Document}/>
      
      <Cell
        data="PRECOMMISSIONING TEST"
        alian={true}
        end={true}
        top={false}
        width="1239"
      />
      
      <SubActivity params={params} option={option} />
      <Cell
        data="FINAL ACCEPTANCE"
        alian={true}
        end={true}
        top={false}
        width="1239"
      />
      <Table data={Accept} />
    </div>
  );
};

export default Activity;