import React from 'react'
import EvolutionItem from './EvolutionItem'
import './EvolutionGrid.css'
export default function EvolutionGrid(props) {
    let content = props.chain.map(item => <EvolutionItem pokemonData={item} pokemon={item.species_name} key={Math.random() * 100}/>)
  return (
    <div className='evolution-grid'>
        {content}
    </div>
  )
}
