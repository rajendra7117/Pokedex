import React from 'react'
import './About.css'
import AboutDetail from './AboutDetail'

export default function About(props) {
    let abilities = props.pokemon.abilities.map(ability => ability.ability.name)
    let abiltyString = abilities.join(', ')
    let height = (props.pokemon.height * 0.1).toFixed(1)
    let weight = props.pokemon.weight * 0.1
   
  
  return (
    <div className='card about-card'>
            <AboutDetail feature={'species'} featureInfo={props.pokemon.species.name}/>
            <AboutDetail feature={'Height'} featureInfo={`${height} cm`}/>
            <AboutDetail feature={'Weight'} featureInfo={`${weight} kg`}/>
            <AboutDetail feature={'Abilities'} featureInfo={abiltyString}/>
         
        </div>
  )
}
