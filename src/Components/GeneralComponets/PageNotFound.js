import React from 'react'
import './PageNotFound.css'
import pika from '../../Images/pikachu-2.png'
export default function PageNotFound() {
  return (
    <div className='container notfound-container'>
        <div className='card notfound-card'>
                <img src={pika}/>
                <p>Sorry Page Not Found..</p>
        </div>
    </div>
  )
}
