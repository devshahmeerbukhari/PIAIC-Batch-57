'use client'
import React,{useContext} from 'react'
import { MyContext } from '@/app/context/MyContext'

type Context = {
    name: "String",
    [key: string]: any
}

function GrandChild() {
    const ourContext:any = useContext(MyContext);
    const {name, setName} = ourContext; 
    const handleName = () => {
        name === "Shahmeer" ? setName("Bukhari"): setName("Shahmeer");
    }
    return (
    <>
        <div>
            GrandChild Component Name: {name}
        </div>
        <button onClick={handleName} className='bg-slate-400 px-5 py-2 border rounded-full border-gray-500 border-4 hover:border-4 hover:border-black'>
            {`Click Me (Shahmeer <=> Bukhari)`}    
        </button>
    </>
  )
}

export default GrandChild
