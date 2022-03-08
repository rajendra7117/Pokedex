import React, {useEffect, useState} from 'react'
import './EvolutionItem.css'
import '../../../App.css'
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {pokemonInfoActions} from '../../../Store/PokemonInfoSlice';
import { motion } from 'framer-motion';

export default function EvolutionItem(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const currentPokemon = useSelector(state => state.pokemonInfoSlice.pokemonData)
    
    
    const viewDetail = e => {
        dispatch(pokemonInfoActions.ShowPokemonInfo(pokemonData))
        history.push(`/info/${props.pokemon}/about`)
    }
    const [pokemonName, setPokemonName] = useState('')
    const [pokemonImg, setPokemonImg] = useState()
    const [pokemonData, setPokemonData] = useState([])
  
    const pokemonType =currentPokemon.types[0].type.name
  

    const bgColors = {
      water: "#1C658C",
      grass: "#019267",
      fire: "#F07B3F",
      ground: "#7C9473",
      ghost: "#222831",
      electric: "#FFCD3C",
      bug: "#9DAD7F",
      normal: "#F6F6F6",
    };
    var vals = Object.keys(bgColors).filter((key) => key === pokemonType);
    const bgColor = vals[0];
    
    
     useEffect(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}/`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPokemonData(data)
               setPokemonName(data.name)
               setPokemonImg(data.sprites.other.dream_world.front_default)
            })
     }, [props.pokemon])
    
    

  return (
      
    <motion.div className='container'
    initial={{opacity: 0}}
    animate={{opacity:1}}
    transition={{duration: 1, delay: 1, type: 'spring', stiffness: 100}}
    >
        <div className={`card pokemon-evolution-card`}>
            <img src={pokemonImg} className={`${bgColor}`}/>
            <h4>{pokemonName}</h4>
            <button onClick={viewDetail}>View Detail</button>
        </div>
    </motion.div>
  )
  }