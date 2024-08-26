'use client'
import React from 'react'
import Scoreboard from './Scoreboard'
import { useState } from 'react'
import Cell from './Cell'
import PlayersTurn from './PlayersTurn'


export const firstTurn: string = "Player 1"
export const secondTurn: string = "Player 2" 

function Gameboard({board}:{
  board :any[]
}) {
  const [scoreOfPlayer1, setscoreOfPlayer1] = useState(0);
  const [scoreOfPlayer2, setscoreOfPlayer2] = useState(0);
  const [tie, setTie] = useState(0);

  const player1Wins = () =>{
    setscoreOfPlayer1(scoreOfPlayer1 + 1)
  }
  const player2Wins = () =>{
    setscoreOfPlayer2(scoreOfPlayer2 + 1)
  }
  const matchTie = () => {
    setTie(tie + 1)
  }

  const [playerTurn, setTurn] = useState(firstTurn)
  return (
    <div className='flex flex-col justify-center items-center bg-black text-white h-screen'>
      {/* <div className='grid grid-cols-3 p-10'>
          <div className='div border-r-4'>1</div>
          <div className='div border-r-4'>2</div>
          <div className='div '>3</div>
          <div className='div border-r-4 border-t-4'>4</div>
          <div className='div border-r-4 border-t-4'>5</div>
          <div className='div border-t-4'>6</div>
          <div className='div border-r-4 border-t-4'>7</div>
          <div className='div border-r-4 border-t-4'>8</div>
          <div className='div border-t-4'>9</div>
      </div> */}
      <div>
        <PlayersTurn playersTurn={playerTurn} />
      </div>
      <div className='grid grid-cols-3 bg-black'>
       { board.map((value, index) => (
        <Cell key={index} pading='p-20' borderRight={value[1]} borderTop={value[2]} setTurn ={setTurn} playerTurn={playerTurn}/>
       ))}
      </div>
      <div>
        <Scoreboard ScoreOfPlayer1={scoreOfPlayer1} ScoreOfPlayer2={scoreOfPlayer2} Tie={tie}/>
      </div>
    </div>
  )
}

export default Gameboard