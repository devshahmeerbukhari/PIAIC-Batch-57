'use client'
import { createContext, useState } from "react";

export const MyContext = createContext();

export function ContextProvider ({children}:any){
    const [name, setName] = useState("Shahmeer")
    return (
        <MyContext.Provider value={{name, setName}}>
            {children}
        </MyContext.Provider>
    )
}