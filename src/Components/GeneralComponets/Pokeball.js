import React from 'react'
import './Pokeball.css'
import { motion } from 'framer-motion'
import {CgPokemon} from 'react-icons/cg'
export default function Pokeball() {

  const variants = {
    animateBall :{
    x: [-40, 40],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5
      },
      y:{
        yoyo: Infinity,
        duration: 0.25
      }

    }
  }
  }
  return (
    <div className='pokeball card'>
        <motion.div
       variants={variants}
       animate = 'animateBall'
        >
        <CgPokemon />
        </motion.div>
        <div>Loading...</div>
    </div>
  )
}
