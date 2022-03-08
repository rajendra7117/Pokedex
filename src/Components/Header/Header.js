import React from 'react'
import './Header.css'
import { NavLink, Link } from 'react-router-dom'
import pikachu from '../../Images/pikachu.png'
export default function Header() {
  return (
    <div className='container header'>
        <div className='brand'>Pokedex <img src={pikachu}></img></div>
        <div className='nav-items'>
            <NavLink to="/">Random</NavLink>
            <NavLink to="/Search">Search</NavLink>

        </div>
        </div>
  )
}
