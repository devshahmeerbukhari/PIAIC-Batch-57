import React from 'react'

function Cell({Value, borderRight, borderTop, pading, index, onCellClick, checkResult}:{
    Value: string,
    borderRight: string,
    borderTop: string,
    pading: string,
    onCellClick: any,
    index: number,
    checkResult: any
}) {
  // score[4] = 12;
  // score[5] = 10;
  const updateState = () =>{
    if(Value === ' '){
      onCellClick(index)
    }
    checkResult();
  }
  return (

    <div className={`${borderRight} ${pading} ${borderTop} text-white cursor-pointer`} onClick={updateState}>
      {Value}
    </div>
  )
}

export default Cell