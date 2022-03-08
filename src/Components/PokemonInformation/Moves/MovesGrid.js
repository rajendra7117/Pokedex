import React from 'react'
import Move from './Move'
import './MovesGrid.css';
import { motion } from 'framer-motion';
export default function MovesGrid(props) {
    const content = props.moves.map(move => <Move move={move} key={move}/>)
  return (
    <motion.div className='moves-div container'
    initial={{x: '-200vw'}}
    animate={{x: 0}}
    transition={{duration: .4}}
    >
        {content}
    </motion.div>
  )
}
