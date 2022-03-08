import React from 'react'
import './ErrorCard.css'
import duck from '../../Images/psyduck.png'
import eggos from '../../Images/eggos.png'
import snor from '../../Images/snorlax.png'
import meo from '../../Images/meowth.png'
import ghost from '../../Images/avatar.png'
export default function ErrorCard(props) {
  const imgArray = [duck, eggos, snor, meo, ghost]
  return (
    <div className='card error-card'>
        <div>
            <img src={imgArray[Math.floor(Math.random()*4)]}/>
            <h5>{props.message}</h5>
        </div>
    </div>
  )
}
