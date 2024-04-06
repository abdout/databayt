"use client";
import { domain } from '@/constant/domain';
import { Project, ProjectContextProps } from '@/type/project/project';
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProjectContext = createContext<ProjectContextProps | undefined>(undefined);

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProject = async (id: string) => {
    const response = await fetch(`${domain}/api/project/${id}`);
    const data = await response.json();
    setProject(data.project);
  };

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${domain}/api/project`);
      const data = await res.json();
      setProjects(data.projects);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  };

  const refreshProjects = async () => {
    await fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ project, projects, fetchProject, fetchProjects, refreshProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};