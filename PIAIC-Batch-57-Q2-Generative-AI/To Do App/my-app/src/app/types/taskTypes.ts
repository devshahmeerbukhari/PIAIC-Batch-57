export type Task = {
    id: number;
    title: string;
    completed: boolean;
  };

  export interface TasksToDoProps {
      task: Task;
      setTask: React.Dispatch<React.SetStateAction<Task[]>>;
  }