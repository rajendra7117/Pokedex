import React, { useState, useEffect } from "react";
import MovesGrid from "./MovesGrid";

export default function Moves(props) {
  const [moves, setMoves] = useState();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let movesArray = [];
        for (const key in data.moves) {
          movesArray.push(data.moves[key].move.name);
          if (key == 14) {
            break;
          }
        }
        setMoves(movesArray)
      });
  }, [props.id]);
  
  return <div>
    <h3>Main Moves</h3>
    {moves && (<MovesGrid moves={moves}/>)}
      
  </div>;
}
