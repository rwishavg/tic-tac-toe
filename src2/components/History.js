import React from 'react'

const History = ({history, moveTo, currentMove}) => {
  return (
    <ul>
      {
        history.map((_,move) =>{
          return (
          <li key={move}>
            <button 
              type="button" 
              onClick={()=>moveTo(move)}
              style={{
                background: '#fff',
                fontWeight: move === currentMove ? 'bold' : 'normal',
              }}
              >
              {move===0 ? 'Restart' : move===9 ? 'Game Over. Its a Draw' : `Go to move #${move}`}
            </button>
          </li>
          )
        })
      }
    </ul>
  )
}

export default History
