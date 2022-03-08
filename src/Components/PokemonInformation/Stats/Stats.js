import React from 'react'
import Stat from './Stat'
import './Stats.css'
import { motion } from 'framer-motion'
export default function Stats(props) {
  const stats = props.stats.map(stat => <Stat stat={stat.stat.name} value={stat.base_stat} key={Math.random() * 100}/>)


  return (
    <motion.div className='stats'
    initial={{x: '200vw'}}
    animate={{x:0}}
    transition={{duration: '0.4', delay: 0.4}}
    exit={{x:'200vw'}}
    >
        {stats}
    </motion.div>
  )
}
