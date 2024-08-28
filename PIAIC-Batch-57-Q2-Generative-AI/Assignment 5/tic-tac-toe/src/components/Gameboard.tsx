'use client'
import React from 'react'
import Scoreboard from './Scoreboard'
import { useState } from 'react'
import Cell from './Cell'
import PlayersTurn from './PlayersTurn'


export const firstTurn: string = "X"
export const secondTurn: string = "O" 

const player1WinsConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
  [0, 4, 8], [2, 4, 6]            // Diagonal
];
const player2WinsConditions = player1WinsConditions;

function Gameboard({board, setBoardValues}:{
  board :any[]
  setBoardValues: any
}) {
  const [scoreOfPlayer1, setscoreOfPlayer1] = useState(0);
  const [scoreOfPlayer2, setscoreOfPlayer2] = useState(0);
  const [tie, setTie] = useState(0);
  const [playerTurn, setTurn] = useState(firstTurn)

  const [score, setScore] = useState(Array(9).fill(null))

  const handleScore = (index: number)=>{
    const updatedScore = [...score]
    updatedScore[index] = playerTurn === 'X' ? 'X' : 'O'
    setScore(updatedScore)
    setBoardValues((currentBoard: any) => {
      const newBoard = [...currentBoard]
      newBoard[index][0] = playerTurn === 'X' ? 'X' : 'O'
      return newBoard
    })
    setTurn(playerTurn === 'X' ? 'O': 'X');
  }

  function checkResult() {
    const finalScore = [...score]

    const player1Wins: boolean = player1WinsConditions.some(indices => (
      indices.every(index => finalScore[index] === 'X')
    ))
    const player2Wins: boolean = player2WinsConditions.some(indices => (
      indices.every(index => finalScore[index] === 'O')
    ))

    if(player1Wins){
      setscoreOfPlayer1(scoreOfPlayer1 + 1)
      alert("Congratulations Player 1, you won the game 🎉🎂✨🍰🥳");

      setBoardValues(board.map(item => [' ', item[1], item[2]]));
      setScore(Array(9).fill(null));

    } else if(player2Wins){
      setscoreOfPlayer2(scoreOfPlayer2 + 1)
      alert("Congratulations Player 2, you won the game 🎉🎂✨🍰🥳");
      setBoardValues(board.map(item => [' ', item[1], item[2]]));
      setScore(Array(9).fill(null));

    } else if(finalScore.every(index => (index !== null))){
      setTie(tie + 1)
      alert("Oh ho, match tie 👀");
      setBoardValues(board.map(item => [' ', item[1], item[2]]));
      setScore(Array(9).fill(null));
    }
  }
  
  
  return (
    <div className='flex flex-col justify-center items-center bg-black text-white h-screen m-0'>
      <div>
        <PlayersTurn playersTurn={playerTurn} />
      </div>
      <div className='grid grid-cols-3 bg-black'>
       { board.map((value, index) => (
        <Cell Value={value[0]} key={index} pading='p-20' borderRight={value[1]} borderTop={value[2]} index={index} onCellClick={() => handleScore(index)} checkResult={checkResult}/>
       ))}
      </div>
      <div>
        <Scoreboard ScoreOfPlayer1={scoreOfPlayer1} ScoreOfPlayer2={scoreOfPlayer2} Tie={tie}/>
      </div>
    </div>
  )
}

export default Gameboard