import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
  const [board,setBoard] = useState(Array(9).fill(null))
  const [isXnext,setIsXnext] = useState(false);

  const handleClickSquare = (position) =>{
    if(board[position]!=null){
      return
    }
    setBoard( (prev) => {
      return prev.map((square,pos) => {
        if(pos === position){
          return isXnext?'X':'0';
        }
        return square;
      })
    })
    setIsXnext((prev)=>!prev);
  }

  const renderSquare = (position) =>{
    return (
    <Square 
      value={board[position]}
      onClick={()=>handleClickSquare(position)}
    />
    )
  }

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div> 
  )
}

export default Board

