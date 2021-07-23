import React, {useState} from "react";
import Board from "./components/Board";
import {calculateWinner} from "./helper";
import "./styles/root.scss"

const App = () => {

  const [board,setBoard] = useState(Array(9).fill(null))
  const [isXnext,setIsXnext] = useState(false);

  const winner = calculateWinner(board);

  const message = (winner) ? `${winner} won!` : `The Next Player is ${isXnext? 'X' : 'O'}`;
  console.log(message);
  
  const handleClickSquare = (position) =>{
    if(board[position]!=null || winner != null){
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

  return (
    <div className="app">
    <h1>Tic Tac Toe !</h1>
    <h2>{message}</h2>
    <Board board={board} handleClickSquare={handleClickSquare}/>
    </div>
  );
};

export default App;
