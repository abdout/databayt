"use client";
import { useTask } from "@/provider/task";
import React, { useEffect, useState } from "react";
// import Delete from "./crud/delete";
// import SmIcon from "@/component/atom/icon/sm";
import Modal from "@/component/atom/modal/modal";
// import Edit from "./crud/edit";
import Create from "./crud/create";
import { useModal } from "@/provider/modal";
import { Icon } from "@iconify/react";
// import { Task } from '@/type/task/task';  // Import the Task type
// import Circle from "./circle";
// import Image from "next/image";
// import { Delete } from "./crud/delete";
// import SmIcon from "../atom/icon/sm";
import { useProject } from "@/provider/project";
import { domain } from "@/constant/domain";


const TimeList: React.FC = () => {
  const { modal, openModal } = useModal();
  const { refreshTasks, tasks } = useTask();
  const { projects } = useProject();

  const [contextMenu, setContextMenu] = useState<{ x: number, y: number, taskID: string | null }>({ x: 0, y: 0, taskID: null });
  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  const handleRightClick = (e: React.MouseEvent, taskID: string) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, taskID });
    setSelectedRow(taskID);
  };

  useEffect(() => {
    refreshTasks();
  }, [projects.length]);

  const handleCloseContextMenu = () => {
    setContextMenu({ x: 0, y: 0, taskID: null });
    setSelectedRow(null);
  };

  const Delete = async (id: string) => {
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

  const handleDelete = async (taskID: string | null) => {
    if (taskID) {
      await Delete(taskID);
      handleCloseContextMenu();
    }
  };

 

  // const handleEdit = (id: string) => {
  //   openModal(id);
  // };

  // const taskToEdit = tasks.find((task: Task) => task._id === modal.id);

  return (
    <>
  {modal.open && modal.id === null && <Modal content={<Create />} />}
  {/* <div className="flex justify-end">
    <button
      className="p-2 m-2 border rounded hover:border-black opacity-70 hover:opacity-100"
      onClick={() => openModal(null)}
    >
      <Icon icon="ph:plus-thin" width={30}/>
    </button>
  </div> */}
  
  
  <table className="table-auto w-[60rem] m-8 ">
    <thead>
      <tr>
        <td className="text-lg font-medium border-b border-black py-2">Date</td>
        <td className="text-lg font-medium border-b border-black py-2">Location</td>
        <td className="text-lg font-medium border-b border-black py-2">Project</td>
        <td className="text-lg font-medium border-b border-black py-2">Customer</td>
        <td className="text-lg font-medium border-b border-black py-2">Hour</td>
        <td className="text-lg font-medium border-b border-black py-2">Over</td>
        <td className="text-lg font-medium border-b border-black py-2">Remark</td>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => {
        const formattedEstTime = task.estTime ? task.estTime.toString().padStart(2, '0') + ' hr' : 'N/A'; // format estTime when displaying it
        return (
          <tr key={task._id || ''} className={`border-b ${task._id === selectedRow ? 'bg-black text-[#fcfcfc]' : ''} hover:bg-gray-100`} onContextMenu={(e) => handleRightClick(e, task._id || '')}>
            <td className="py-4">{new Date(task.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</td>
            <td className="py-4">
              <div className="w-24 overflow-hidden overflow-ellipsis whitespacenowrap">
                <a href={task.location} target="_blank" rel="noopener noreferrer">
                  {task.location}
                </a>
              </div>
            </td>
            <td className="py-4">{task.project}</td>
            <td className="py-4">{task.title}</td>
            <td className="py-4">{formattedEstTime}</td>
            <td className="py-4">{formattedEstTime}</td>
            <td>
              {/* <Delete id={task._id} />
              <button 
               className="w-[25px] h-[25px]"
               onClick={() => handleEdit(task._id)}>
                <SmIcon src="/edit.png" alt="Edit" path="" />
              </button> */}
            </td>
          </tr>
        );
      })}
      {contextMenu.taskID && (
        <div 
        style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }} 
        className="absolute flex flex-col space-y-4 p-8 justify-start items-start bg-white border shadow-lg"
        onMouseLeave={handleCloseContextMenu}
          
        >
          <button
          onClick={() => handleDelete(contextMenu.taskID)}
          className="flex gap-4 opacity-80 hover:opacity-100"
          >
           <Icon icon="ant-design:delete-outlined" width={30}/>
           <h3>Delete</h3>
          </button>
          <button 
        //   onClick={() => handleEdit(contextMenu.taskID)}
          className="flex gap-4 opacity-80 hover:opacity-100"
          >
            <Icon icon="iconoir:edit" width={30}/>
            <h3>Edit</h3>
          </button>
        </div>
      )}
      
    </tbody>
  </table>
</>
  );
};

export default TimeList;