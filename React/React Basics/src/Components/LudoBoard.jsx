import { useState } from 'react'

export default function LudoBoard() {
    let [moves, setMoves] = useState({red : 0, blue : 0, yellow : 0, green : 0});
    let [arr, setArr] = useState([]);
    let updateBlue = () =>{
        setMoves( (prev) =>{
           return  {...prev, blue : prev.blue+1}
        });
        setArr((prev) =>{
            return ([...arr, "Blue"])
        });  
    }

    let updateRed = () =>{
        setMoves( (prev) =>{
           return  {...prev, red : prev.red+1}
        });
        setArr((prev) =>{
            return ([...arr, "Red"])
        });
    }

    let updateYellow = () =>{
        setMoves( (prev) =>{
           return  {...prev, yellow : prev.yellow+1}
        });
        setArr((prev) =>{
            return ([...arr, "Yellow"])
        });
    }

    let updateGreen = () =>{
        setMoves( (prev) =>{
           return  {...prev, green : prev.green+1}
        });
        setArr((prev) =>{
            return ([...arr, "Green"])
        });
    }

  return (
    <div>
        <h1>Ludo Game</h1>
        <h3>Moves</h3>
        <ul>
        {arr.map((element)=>(
            <li>{element}</li>
        ))
        }
        </ul>
        <div className = "board">
            <p>Blue moves = {moves.blue} </p>
            <button style = {{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
            <p>Red moves = {moves.red}</p>
            <button style = {{backgroundColor : "red"}} onClick={updateRed}>+1</button>
            <p>Yellow moves = {moves.yellow}</p>
            <button style = {{backgroundColor : "yellow", color : "black"}} onClick={updateYellow}>+1</button>
            <p>Green moves = {moves.green}</p>
            <button style = {{backgroundColor : "green"}} onClick={updateGreen}>+1</button>
        </div>

    </div>
  )
}

