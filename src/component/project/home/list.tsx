"use client";
import { useProject } from "@/provider/project";
import React, { useState } from "react";
import Delete from "./crud/delete";
import Modal from "@/component/atom/modal/modal";
import Create from "./crud/create";
import Link from "next/link";
import { useModal } from "@/provider/modal";
import { Icon } from "@iconify/react";
import { Project } from '@/type/project/project';  // Import the Project type
import SmIcon from "@/component/atom/icon/sm";

interface ModalState {
  open: boolean;
  id: string | null;
}

const ProjectList: React.FC = () => {
  const { modal, openModal } = useModal();
  const { projects } = useProject();

  const [contextMenu, setContextMenu] = useState<{ x: number, y: number, projectID: string | null }>({ x: 0, y: 0, projectID: null });

  const handleRightClick = (e: React.MouseEvent, projectID: string) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, projectID });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({ x: 0, y: 0, projectID: null });
  };

  const handleEdit = (id: string) => {
    openModal(id);
    handleCloseContextMenu();
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
          className="p-4 border m-2 w-[11rem] flex flex-col items-start hover:border-black relative"
          onContextMenu={(e) => {
            if (t._id) {
              handleRightClick(e, t._id);
            }
          }}
        >
          <div className={`${contextMenu.projectID === t._id ? 'opacity-20' : ''}`}>
            <Link href={`/project/${t._id}`}>
              <div>
                <h1>{t.customer}</h1>
                <h3>{t.location ? t.location : <span className="opacity-50">Location</span>}</h3>
                <div className="flex gap-2 items-center">
                  <SmIcon src="/profile.png" alt="Profile" path=""/>
                  <h4>Osman</h4>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="ml-[3px] rounded-full bg-green-600 w-[15px] h-[15px] md:w-3 md:h-3"></div>
                  <h4 className="md:text-[15px]">Done</h4>
                </div>
              </div>
            </Link>
          </div>

          {contextMenu.projectID === t._id && (
            <div
              className="absolute top-0 left-0 w-full h-full flex flex-row justify-center items-center space-x-4 p-8 bg-white bg-opacity-50 "
              onMouseLeave={handleCloseContextMenu}
            >
              <Delete id={contextMenu.projectID} />
              <button
                onClick={() => contextMenu.projectID && handleEdit(contextMenu.projectID)}
                className="flex gap-4 opacity-75 hover:opacity-100"
              >
                <Icon icon="icon-park-solid:edit" width={40} />
              </button>
            </div>
          )}
        </div>
      ))}

      <button
        className="p-4 border m-2  w-[11rem]  flex flex-col items-center justify-center hover:border-black opacity-70 hover:opacity-100"
        onClick={() => openModal("")}
      >
        <Icon icon="ph:plus-thin" width={70} />
      </button>
    </>
  );
};

export default ProjectList;