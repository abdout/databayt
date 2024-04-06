import { domain } from "@/constant/domain";
import { useTask } from "@/provider/task";

// deleteTask.js
export const Delete = async (id: string) => {
  const { refreshTasks } = useTask();
  const confirmed = window.confirm("Are you sure?");

  if (confirmed) {
    const res = await fetch(`${domain}/api/task?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      refreshTasks();
    }
  }
};