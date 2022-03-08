
import React, {useEffect, useState} from 'react'
import PokemonGrid from '../GeneralComponets/PokemonGrid';
import { motion } from 'framer-motion';
import './Random.css'
export default function Random() {

    const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [nextUrl, SetNextUrl] = useState()
    const [previousUrl, setPreviuosUrl] = useState()
    const [pokemons, setPokemons] = useState([])
    const [allPokemons, setAllPokemons] = useState([])


    useEffect(() => {
        fetch(currentUrl)
        .then(res => {
            return res.json()
        })
        .then(data => {
            SetNextUrl(data.next)
            setPreviuosUrl(data.previous)
            setPokemons(data.results)
        })

    }, [currentUrl])

useEffect(() => {
        if(pokemons){
            setAllPokemons([])
         pokemons.forEach(element => {
                fetch(element.url)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setAllPokemons(prev => [...prev, data])
                
                })
                
            });
          
            
        }
}, [pokemons])
const nextPage = e => {
    setCurrentUrl(nextUrl)
}
const previousPage = e => {
    setCurrentUrl(previousUrl)
}


   
  return (
    <motion.div className='container'
    
    initial={{x:'-200vw'}}
    animate={{x:0}}
    exit={{y:'-100vh'}}
    transition={{delay:0, ease: "easeIn"}}
    >
        {allPokemons ?  <PokemonGrid allPokemons={allPokemons}/> : (<h1>No Pokemons</h1>)}
           <div>
            
             <div className='container buttons-div'>
             {previousUrl &&  <button onClick={previousPage}>Prev</button> }
               <button onClick={nextPage}>Next</button>
               </div>
           </div>
        </motion.div>
  )
}
