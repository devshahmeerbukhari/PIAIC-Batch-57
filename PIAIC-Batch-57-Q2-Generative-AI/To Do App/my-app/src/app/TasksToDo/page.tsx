import React from 'react';
import { TasksToDoProps } from '../types/taskTypes';
import { Task } from '../types/taskTypes';

function TasksToDo({ task, setTask }: TasksToDoProps) {
  const removeTask = () => {
    setTask((previousTasks: Task[]) => previousTasks.filter((t) => t.id !== task.id));
  };

  const handleCompleted = () => {
    if (task.completed) {
      alert('Task is already completed!');
    } else {
      setTask((previousTasks: Task[]) =>
        previousTasks.map((t) =>
          t.id === task.id ? { ...t, completed: true } : t
        )
      );
    }
  };

  return (
    <div className={`flex flex-row mt-5 p-1 border-none rounded-md ${task.completed ? 'bg-green-300' : 'bg-white'}`}>
      <p className="w-full h-10 overflow-auto flex items-center">{task.title}</p>
      <div className="flex flex-row">
        <button onClick={handleCompleted} className="p-2 bg-green-500 text-white mx-1 border rounded-md hover:shadow-xl hover:bg-green-600">
          {task.completed ? 'Completed' : 'Complete'}
        </button>
        <button onClick={removeTask} className="p-2 bg-red-500 text-white mx-2 rounded-md hover:shadow-xl hover:bg-red-600">
          Remove
        </button>
      </div>
    </div>
  );
}

export default TasksToDo;
