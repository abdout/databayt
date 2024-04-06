"use client";
import { domain } from '@/constant/domain';
import { Task, TaskContextProps } from '@/type/task/task';
import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [task, setTask] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTask = async (id: string) => {
    const response = await fetch(`${domain}/api/task/${id}`);
    const data = await response.json();
    setTask(data.task);
  };

  const fetchTasks = async () => {
    try {
      const res = await fetch(`${domain}/api/task`);
      const data = await res.json();
      setTasks(data.tasks);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  const refreshTasks = async () => {
    await fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ task, tasks, fetchTask, fetchTasks, refreshTasks }}>
      {children}
    </TaskContext.Provider>
  );
};