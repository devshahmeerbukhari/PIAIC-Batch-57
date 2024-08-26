import Image from "next/image";
import Gameboard from "@/components/Gameboard";
import Scoreboard from "@/components/Scoreboard";
import { useState } from "react";

{/* <div className='grid grid-cols-3 p-10'>
          <div className='div border-r-4'>1</div>
          <div className='div border-r-4'>2</div>
          <div className='div'>3</div>
          <div className='div border-r-4 border-t-4'>4</div>
          <div className='div border-r-4 border-t-4'>5</div>
          <div className='div border-t-4'>6</div>
          <div className='div border-r-4 border-t-4'>7</div>
          <div className='div border-r-4 border-t-4'>8</div>
          <div className='div border-t-4'>9</div>
      </div> */}


export default function Home() {
  const BoardValue:any = [
    [null, 'border-r-4', 'border-t-0'], 
    [null, 'border-r-4', 'border-t-0'], 
    [null, 'border-r-0', 'border-t-0'], 
    [null, 'border-r-4', 'border-t-4'], 
    [null, 'border-r-4', 'border-t-4'], 
    [null, 'border-r-0', 'border-t-4'], 
    [null, 'border-r-4', 'border-t-4'], 
    [null, 'border-r-4', 'border-t-4'], 
    [null, 'border-r-0', 'border-t-4']
  ]
  return (
    <>
   <Gameboard board={BoardValue}/>
   </>
  );
}