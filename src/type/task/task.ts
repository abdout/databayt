export interface Task {
  _id?: string;
    title: string;
    team: string[];
    location: string;
    date: Date;
    status: 'In Progress' | 'Stuck' | 'Done' | 'Undefined';
    priority: 'Low' | 'Medium' | 'High';
    estTime: string;
    project: string;
  }
  
  export interface TaskContextProps {
    task: Task | null;
    tasks: Task[];
    fetchTask: (id: string) => void;
    fetchTasks: () => void;
    refreshTasks: () => void;
  }