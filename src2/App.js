import React, {useState} from "react";
import Board from "./components/Board";
import {calculateWinner} from "./helper";
import History from "./components/History";
import Message from "./components/Message";
import "./styles/root.scss"

const App = () => {

  const [history, setHistory] = useState([
    {board : Array(9).fill(null), isXnext : true}
  ]);

  const [currentMove, setCurrentMove] = useState(0); 
  const current = history[currentMove];
  const winner = calculateWinner(current.board);
  const message = (winner) ? `${winner} won!` : `The Next Player is ${current.isXnext? 'X' : 'O'}`;
  console.log(message, current, winner);
  const handleClickSquare = (position) =>{
    if(current.board[position]!=null || winner != null){
      return
    }
    setHistory( (prev) => {

      const last = prev[prev.length-1];
      const newBoard = last.board.map((square,pos) => {
        if(pos === position){
          return last.isXnext?'X':'0';
        }
        return square;
      })
      return prev.concat({board : newBoard, isXnext : !last.isXnext})
    })
    setCurrentMove( (prev) => prev+1)
  }

  const moveTo = (move) => {
    setCurrentMove(move)
  }

  return (
    <div className="app">
    <h1>Tic Tac Toe !</h1>
    {/* <h2>{message}</h2> */}
    <Message current={current} winner={winner} />
    <Board board={current.board} handleClickSquare={handleClickSquare}/>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  );
};

export default App;
