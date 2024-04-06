import { FC } from "react";
import { useProject } from "@/provider/project";
import { Icon } from "@iconify/react";
import { domain } from "@/constant/domain";

interface DeleteProps {
  id: string | undefined;
}

const Delete: FC<DeleteProps> = ({ id }) => {
  const { refreshProjects } = useProject();

  const deleteProject = async () => {
    const confirmed = window.confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`${domain}/api/project?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        refreshProjects();
      }
    }
  };

  return (
    <button onClick={deleteProject} className="opacity-75 hover:opacity-100">
      <Icon icon="ant-design:delete-filled" width={40}/>
    </button>
  );
};

export default Delete;