import { useProject } from "@/provider/project";
import React, { useEffect } from "react";

interface IndexProps {
  params: Params;
}

interface Params {
  id: string;
}

const Index: React.FC<IndexProps> = ({ params }) => {
  const { project, fetchProject } = useProject();

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);

  const selectedItems = [
    {
      label: "ITP FOR EV SWITCHGEAR PRECOMMISSIONING TEST",
      value: project?.evOptions?.evSwgr,
    },
    {
      label: "ITP FOR EV TRANSFORMER PRECOMMISSIONING TEST",
      value: project?.evOptions?.evTrafo,
    },
    {
      label: "ITP FOR EV CABLE PRECOMMISSIONING TEST",
      value: project?.evOptions?.evCable,
    },
    {
      label: "ITP FOR EV RMU PRECOMMISSIONING TEST",
      value: project?.evOptions?.evRmu,
    },
    {
      label: "ITP FOR HV SWITCHGEAR PRECOMMISSIONING TEST",
      value: project?.hvOptions?.hvSwgr,
    },
    {
      label: "ITP FOR HV TRANSFORMER PRECOMMISSIONING TEST",
      value: project?.hvOptions?.hvTrafo,
    },
    {
      label: "ITP FOR HV CABLE PRECOMMISSIONING TEST",
      value: project?.hvOptions?.hvCable,
    },
    {
      label: "ITP FOR HV RMU PRECOMMISSIONING TEST",
      value: project?.hvOptions?.hvRmu,
    },
    {
      label: "ITP FOR MV SWITCHGEAR PRECOMMISSIONING TEST",
      value: project?.mvOptions?.mvSwgr,
    },
    {
      label: "ITP FOR MV TRANSFORMER PRECOMMISSIONING TEST",
      value: project?.mvOptions?.mvTrafo,
    },
    {
      label: "ITP FOR MV CABLE PRECOMMISSIONING TEST",
      value: project?.mvOptions?.mvCable,
    },
    {
      label: "ITP FOR MV RMU PRECOMMISSIONING TEST",
      value: project?.mvOptions?.mvRmu,
    },
    {
      label: "ITP FOR LV SWITCHGEAR PRECOMMISSIONING TEST",
      value: project?.lvOptions?.lvSwgr,
    },
    {
      label: "ITP FOR LV TRANSFORMER PRECOMMISSIONING TEST",
      value: project?.lvOptions?.lvTrafo,
    },
    {
      label: "ITP FOR LV CABLE PRECOMMISSIONING TEST",
      value: project?.lvOptions?.lvCable,
    },
    {
      label: "ITP FOR LV RMU PRECOMMISSIONING TEST",
      value: project?.lvOptions?.lvRmu,
    },
  ].filter((item) => item.value && item.value.length > 0);

  return (
    <div className="w-3/4 mx-auto">
      <table className="w-full border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black text-center px-2 py-1 w-1/12">
              Se. No
            </th>
            <th className="border border-black text-center p-2">Item</th>
            <th className="border border-black text-center p-2">Page</th>
          </tr>
        </thead>
        <tbody>
          {selectedItems.map((item, index) => (
            <tr key={index}>
              <td className="border border-black text-center p-2">
                {index + 1}
              </td>
              <td className="border border-black text-center p-2">
                {item.label}
              </td>
              <td className="border border-black text-center p-2"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
