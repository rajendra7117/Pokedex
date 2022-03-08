import React from 'react'
import './DetailsBar.css'
import { NavLink, useRouteMatch } from 'react-router-dom'
export default function DetailsBar() {
    let {path, url} = useRouteMatch();

    
  return (
    <div className='detail-card'>
        <NavLink to={`${url}/about`} activeClassName='selected'>About</NavLink>
        <NavLink to={`${url}/stats`} activeClassName='selected' >Stats</NavLink>
        <NavLink to={`${url}/evolution`} activeClassName='selected'>Evolution</NavLink>
        <NavLink to={`${url}/moves`} activeClassName='selected'>Moves</NavLink>
        </div>
  )
}
