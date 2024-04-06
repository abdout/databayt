"use client";
import { useProject } from "@/provider/project";
import React from "react";
import Delete from "./crud/delete";
import Modal from "@/component/atom/modal/modal";
import Create from "./crud/create";
import Link from "next/link";
import { useModal } from "@/provider/modal";
import { Icon } from "@iconify/react";
import { Project } from '@/type/project/project';  // Import the Project type

interface ModalState {
  open: boolean;
  id: string | null;
}

const ProjectList: React.FC = () => {
  const { modal, openModal } = useModal();
  const { projects } = useProject();

  const handleEdit = (id: string) => {
    openModal(id);
  };

  const projectToEdit = projects.find((p: Project) => p._id === modal.id);

  return (
    <>
      {modal.open &&
        (modal.id !== null && projectToEdit ? (
          <Modal
            content={
              <Create />
            }
          />
        ) : (
          <Modal content={<Create />} />
        ))}
      {projects.map((t: Project) => (
        <div
          key={t._id}
          className="p-4 border m-2 w-60 flex flex-col items-start hover:border-black"
        >
          <Link href={`/project/${t._id}`}>
            <div>
              <h1>{t.customer}</h1>
              <h3>{t.location ? t.location : <span className="opacity-50">Location</span>}</h3>
              <h4>Osman</h4>
              <div className="flex gap-2 items-center">
                <div className="rounded-full bg-green-600 w-[13px] h-[13px] md:w-3 md:h-3"></div>
                <h4 className="md:text-[15px]">Done</h4>
              </div>
            </div>
          </Link>

          <div className="flex gap-2 mt-4 ">
            <Delete id={t._id || ''} />
            <button 
             className="opacity-80 hover:opacity-100"
             onClick={() => handleEdit(t._id || '')}>
              <Icon icon="iconoir:edit" width={30}/>
            </button>
          </div>
        </div>
      ))}

      <button
        className="p-4 border m-2  w-60  flex flex-col items-center justify-center hover:border-black opacity-70 hover:opacity-100"
        onClick={() => openModal("")}
      >
        <Icon icon="ph:plus-thin" width={70}/>
      </button>
    </>
  );
};

export default ProjectList;