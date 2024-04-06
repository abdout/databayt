'use client';
import { domain } from "@/constant/domain";
import { PostProjectContextProps, PostProjectState } from "@/type/project/post";
import React, { createContext, useState, useContext } from "react";


const PostProjectContext = createContext<PostProjectContextProps | undefined>(undefined);

export const usePostProject = () => {
 
  const context = useContext(PostProjectContext);
  if (!context) {
    throw new Error('usePostProject must be used within a PostProjectProvider');
  }
  return context;
};

export const PostProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [postProjectState, setPostProjectState] = useState<PostProjectState>({ status: 'idle', error: null });
  

  const postTask = async (taskData: any) => {
    const res = await fetch(`${domain}/api/task`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    });

    if (!res.ok) {
      throw new Error("Failed to create a task");
    }
  };

  const postProject = async (data: {
    customer: string;
    location: string;
    consultant: string;
    client: string;
    voltages: string[];
    lvOptions: { lvSwgr: string; lvTrafo: string; lvCable: string; lvRmu: string };
    mvOptions: { mvSwgr: string; mvTrafo: string; mvCable: string; mvRmu: string };
    hvOptions: { hvSwgr: string; hvTrafo: string; hvCable: string; hvRmu: string };
    evOptions: { evSwgr: string; evTrafo: string; evCable: string; evRmu: string };
  }) => {
    setPostProjectState({ status: 'loading', error: null });
    try {
      const res = await fetch(`${domain}/api/project`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!res.ok) {
        throw new Error("Failed to create a project");
      }
  
      const getTaskTitles = (data: any) => {
        const options = [
          'lvSwgr', 'lvTrafo', 'lvCable', 'lvRmu',
          'mvSwgr', 'mvTrafo', 'mvCable', 'mvRmu',
          'hvSwgr', 'hvTrafo', 'hvCable', 'hvRmu',
          'evSwgr', 'evTrafo', 'evCable', 'evRmu',
        ];
      
        const taskTitles: string[] = [];
      
        for (const voltage of ['lvOptions', 'mvOptions', 'hvOptions', 'evOptions']) {
          for (const option of options) {
            if (data[voltage][option]) {
              if (Array.isArray(data[voltage][option])) {
                for (const item of data[voltage][option]) {
                  taskTitles.push(item.label);
                }
              } else {
                taskTitles.push(data[voltage][option].label);
              }
            }
          }
        }
      
        return taskTitles;
      };
      
      // Inside the postProject function
      const taskTitles = getTaskTitles(data);
      
      for (const title of taskTitles) {
        await postTask({
          title,
          project: data.customer,
          team: ['/team/eng/user.svg'],
          location: "Undefined",
          date: new Date(),
          status: "In Progress",
          priority: "Medium",
          estTime: "4",
          // Fill in with the other task fields...
        });
        
      }
      setPostProjectState({ status: 'succeeded', error: null });
    } catch (error) {
      setPostProjectState({ status: 'failed', error });
    }
  };

  return (
    <PostProjectContext.Provider value={{ postProjectState, postProject }}>
      {children}
    </PostProjectContext.Provider>
  );
};