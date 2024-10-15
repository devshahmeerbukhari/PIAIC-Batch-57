'use client'
import { useState } from "react";
import TasksToDo from "./TasksToDo/page";
import { Task } from "./types/taskTypes";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [getTask, setTask] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (getTask.length > 0) {
      const newTask: Task = {
        id: tasks.length + 1,
        title: getTask,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTask("");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-5 bg-red-400">
      <div className="bg-white min-h-80 w-2/5 p-10 border rounded-xl shadow-2xl">
        <h1 className="text-center font-bold text-3xl">Todo App</h1>
        <div className="flex mt-5">
          <input
            onChange={handleChange}
            className="border border-grey-600 rounded-lg p-2 w-full focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
            type="text"
            placeholder="Add Task"
          />
          <button
            onClick={addTask}
            className="border rounded-md p-2 bg-purple-700 text-white"
          >
            Add
          </button>
        </div>
        <div className="mt-5 h-60 overflow-y-scroll scrollbar-hide">
          {tasks.length === 0 ? (
            <p className="text-center">No Task for Today!😊</p>
          ) : (
            tasks.map((task:Task) => (
              <TasksToDo key={task.id} task={task} setTask={setTasks} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
