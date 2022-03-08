import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Evolution.css";
import Pokeball from "../../GeneralComponets/Pokeball";
import EvolutionGrid from "./EvolutionGrid";
export default function Evolution() {
  const pokemon = useSelector((state) => state.pokemonInfoSlice.pokemonData);
  const [evolutionUrl, setEvolutionUrl] = useState("");
  const [pokeballState, setPokeballState] = useState(true);

  const [evolutionData, setEvolutionData] = useState([]);
  useEffect(() => {
    fetch(`${pokemon.species.url}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEvolutionUrl(data.evolution_chain.url);
      });
  });
  useEffect(() => {
    if (evolutionUrl) {
      fetch(`${evolutionUrl}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          var evoData = data.chain;
          let chain = [];

          do {
            var evoDetails = evoData["evolution_details"][0];

            chain.push({
              species_name: evoData.species.name,
              min_level: !evoDetails ? 1 : evoDetails.min_level,
              trigger_name: !evoDetails ? null : evoDetails.trigger.name,
              item: !evoDetails ? null : evoDetails.item,
            });

            evoData = evoData["evolves_to"][0];
          } while (!!evoData && evoData.hasOwnProperty("evolves_to"));
          setEvolutionData(chain);
          setPokeballState(false);
        });
    }
  }, [pokemon, evolutionUrl]);

  return (
    <div>
      {pokeballState ? <Pokeball /> : <EvolutionGrid chain={evolutionData} pokemon={pokemon} />}
    </div>
  );
}
