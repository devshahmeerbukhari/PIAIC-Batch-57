import React from 'react'
import { useState } from 'react'

function Cell({borderRight, borderTop, pading, index, value}:{
    borderRight: string,
    borderTop: string,
    pading: string,
    index: number,
    value: any
}) {
  const [Value, setValue] = useState('')

  const updateState = () =>{
    if(Value === ''){
      setValue('X'); 
    }
  }
  return (

    <div className={`${borderRight} ${pading} ${borderTop} text-white`} onClick={updateState}>
      {Value}
    </div>
  )
}

export default Cell
