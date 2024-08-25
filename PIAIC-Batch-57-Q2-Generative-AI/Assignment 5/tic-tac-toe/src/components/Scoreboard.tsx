import React from 'react'

function Scoreboard({ScoreOfPlayer1, ScoreOfPlayer2, Tie}:{
    ScoreOfPlayer1: number,
    ScoreOfPlayer2: number,
    Tie: number
}) {
  return (
    <div className='grid grid-cols-3 gap-20 mt-10'>
      <div>Player 1 (X)</div>
      <div>TIE</div>
      <div>Player 2 (O)</div>
      <div>{ScoreOfPlayer1}</div>
      <div>{Tie}</div>
      <div>{ScoreOfPlayer2}</div>
    </div>
  )
}

export default Scoreboard
