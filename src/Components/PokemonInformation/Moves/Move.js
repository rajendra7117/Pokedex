import React from 'react'
import './Move.css'
export default function Move(props) {
  return (
    <div className='move'>
        <span className='badge bg-dark'>{props.move}</span>
    </div>
  )
}
