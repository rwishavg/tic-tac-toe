import React from 'react'

const Message = ({current, winner}) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <div>
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          `Next Player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}{' '}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span>
          <span className="text-orange">O</span> tied
        </>
      )}
    </div>
  )
}

export default Message