import React from "react";
import './PokemonInfo.css'
import { useSelector } from "react-redux";
import BioCard from "./BioCard";
import DetailsBar from "./DetailsBar";
import About from "./About";
import Stats from "./Stats/Stats";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Evolution from "./Evolutions/Evolution";
import { motion } from "framer-motion";

import Moves from "./Moves/Moves";

export default function PokemonInfo() {
  const pokemon = useSelector((state) => state.pokemonInfoSlice.pokemonData);
  let { path, url } = useRouteMatch();

  return (
    <motion.div className="container card pokemon-info-card"
  
   
    >
      <BioCard
        img={pokemon.sprites.other.dream_world.front_default}
        name={pokemon.name}
        types={pokemon.types}
      />
      <DetailsBar />

      <Switch>
        <Route path={`/info/${pokemon.name}/about`} exact>
          <About pokemon={pokemon} />
        </Route>
        <Route path={`/info/${pokemon.name}/stats`} exact>
          <Stats stats={pokemon.stats} />
        </Route>
        <Route path={`/info/${pokemon.name}/evolution`}>
          <Evolution />
        </Route>
        <Route path={`/info/${pokemon.name}/moves`}>
         <Moves id={pokemon.id}/>
        </Route>
      </Switch>
    </motion.div>
  );
}
