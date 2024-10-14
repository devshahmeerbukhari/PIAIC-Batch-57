import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-5 bg-red-400">
      <div className="bg-white min-h-80 w-2/5 p-10 border rounded-xl shadow-2xl">
        <h1 className="text-center font-bold text-3xl">Todo App</h1>
        <div className="flex mt-5">
          <input className="border border-grey-600 rounded-lg p-2 w-full" type="text" placeholder="Add Task"/>
          <button className="border rounded-md p-2 bg-purple-700 text-white">Add</button>
        </div>
      </div>
    </div>
  );
}
