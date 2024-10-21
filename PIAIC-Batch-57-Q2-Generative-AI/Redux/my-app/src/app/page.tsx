'use client'
import { decrementCounter, incrementCounter } from "@/store/counter/counterSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const counterState = useSelector((state: any)=>state.counter)
  const dispatch = useDispatch()
  return (
    <div className="text-center font-bold p-5 bg-slate-400">
        <>
          <div className="flex justify-center items-center">
            <button onClick={() => dispatch(decrementCounter())} className="bg-red-500 border rounded-full p-5 mr-5">Subtract</button>
            <p>{counterState}</p>
            <button onClick={() => dispatch(incrementCounter())} className="bg-green-500 border rounded-full p-5 ml-5">Add</button>
          </div>
        </>
    </div>
  );
}
