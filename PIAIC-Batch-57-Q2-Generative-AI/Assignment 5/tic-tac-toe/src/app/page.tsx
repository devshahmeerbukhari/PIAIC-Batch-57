'use client'
import Gameboard from "@/components/Gameboard";
import { useState } from "react";

export default function Home() {

  const [boardValues, setBoardValues] = useState([
    [' ', 'border-r-4', 'border-t-0'], 
    [' ', 'border-r-4', 'border-t-0'], 
    [' ', 'border-r-0', 'border-t-0'], 
    [' ', 'border-r-4', 'border-t-4'], 
    [' ', 'border-r-4', 'border-t-4'], 
    [' ', 'border-r-0', 'border-t-4'], 
    [' ', 'border-r-4', 'border-t-4'], 
    [' ', 'border-r-4', 'border-t-4'], 
    [' ', 'border-r-0', 'border-t-4']
  ]);

  return (
    <>
   <Gameboard board={boardValues} setBoardValues={setBoardValues}/>
   </>
  );
}