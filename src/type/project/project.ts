export interface Option {
    label: string;
    value: string;
  }
  
  export interface VoltageOptions {
    lvSwgr: Option[];
    lvTrafo: Option[];
    lvCable: Option[];
    lvRmu: Option[];
    mvSwgr: Option[];
    mvTrafo: Option[];
    mvCable: Option[];
    mvRmu: Option[];
    hvSwgr: Option[];
    hvTrafo: Option[];
    hvCable: Option[];
    hvRmu: Option[];
    evSwgr: Option[];
    evTrafo: Option[];
    evCable: Option[];
    evRmu: Option[];
  }
  
  export interface Voltages {
    LV: boolean;
    MV: boolean;
    HV: boolean;
    EV: boolean;
  }
  
  export interface Project {
    _id?: string;
    customer: string;
    location: string;
    consultant: string;
    client: string;
    voltages: Voltages;
    lvOptions: VoltageOptions;
    mvOptions: VoltageOptions;
    hvOptions: VoltageOptions;
    evOptions: VoltageOptions;
  }
  
  export interface ProjectContextProps {
    project: Project | null;
    projects: Project[]; // Add this line
    fetchProject: (id: string) => void;
    fetchProjects: () => void; // Add this line
    refreshProjects: () => void; // Add this line
  }