import React from 'react'

function PlayersTurn({playersTurn}:{
  playersTurn: string
}) {
  return (
    <div className='mb-20'>
      {`This is ${playersTurn} Turn`}
    </div>
  )
}

export default PlayersTurn
