import React from 'react'
import { useState } from 'react'
import { secondTurn } from './Gameboard'
import { firstTurn } from './Gameboard'

function Cell({borderRight, borderTop, pading, setTurn, playerTurn}:{
    borderRight: string,
    borderTop: string,
    pading: string,
    setTurn: any,
    playerTurn: string
}) {
  const [Value, setValue] = useState(' ')

  const updateState = () =>{
    if(Value === ' '){
      if(playerTurn === firstTurn){
        setValue('X'); 
        setTurn(secondTurn)
      } else{
        setValue('O'); 
        setTurn(firstTurn)
      }
    }
  }
  return (

    <div className={`${borderRight} ${pading} ${borderTop} text-white cursor-pointer`} onClick={updateState}>
      {Value}
    </div>
  )
}

export default Cell
