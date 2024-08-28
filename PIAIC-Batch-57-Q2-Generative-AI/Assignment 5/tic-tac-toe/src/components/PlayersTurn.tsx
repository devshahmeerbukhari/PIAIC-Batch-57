import React from 'react'

function PlayersTurn({playersTurn}:{
  playersTurn: string
}) {
  return (
    <div className='mb-20'>
      {`This is Player ${playersTurn} Turn`}
    </div>
  )
}

export default PlayersTurn
