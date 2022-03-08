import React, { useEffect, useState } from "react";
import ErrorCard from "../GeneralComponets/ErrorCard";
import "./Search.css";
import Pokeball from "../GeneralComponets/Pokeball";
import PokemonCard from "../GeneralComponets/PokemonCard";
import { motion } from "framer-motion";
export default function Search() {

  const [enteredInput, setEnteredInput] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [showPokeball, setShowPokeball] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const inputHandler = (e) => {
    e.preventDefault();
    setEnteredInput(e.target.value);
    setErrorMsg(null);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setPokemon(enteredInput.toLowerCase());
    setPokemonData([]);
  };
  useEffect(() => {
    if (pokemon) {
      setErrorMsg(null);
      setShowPokeball(true);
    
      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              setShowPokeball(false);
              throw new Error("pokemon not found");
            }
          })
          .then((data) => {
            setShowPokeball(false);
            setPokemonData(data);
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      }, 2000);
    }
  }, [pokemon]);
  console.log(pokemonData);
  return (
    <motion.div className="container search-container"
    initial={{y:'-100vh'}}
    animate={{y:0}}
    
    exit={{y:'-100vh'}}
    transition={{duration:.5, ease: "easeIn"}}
    >
      <div>
        <h4>Find a Pokemon</h4>
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="search for a pokemon"
            onChange={inputHandler}
          />
          <button>Search</button>
        </div>
      </form>
      {Object.keys(pokemonData).length > 0 && (
        <div className="container search-card">
          <PokemonCard
            img={pokemonData.sprites.other.dream_world.front_default}
            name={pokemonData.name}
            pokemon={pokemonData}
          />
        </div>
      )}
      {showPokeball && <Pokeball />}
      {errorMsg && <ErrorCard message={errorMsg} />}
    </motion.div>
  );
}
