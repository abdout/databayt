export interface PostProjectState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: any;
  }
  
  export interface PostProjectContextProps {
    postProjectState: PostProjectState;
    postProject: (data: any) => Promise<void>;
  }