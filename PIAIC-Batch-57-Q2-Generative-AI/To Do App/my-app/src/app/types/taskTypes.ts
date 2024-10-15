export type Task = {
    id: number;
    title: string;
    completed: boolean;
  };
  
export type TasksToDoProps = {
    tasks: Task;
    setTasks: any;
}