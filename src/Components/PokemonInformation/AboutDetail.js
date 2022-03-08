import React from 'react'
import './AboutDetail.css'
export default function AboutDetail(props) {
  return (
    <div className='aboutDetail'>
        <div >
        {props.feature}
        </div>
        <div>
            {props.featureInfo}
        </div>
    </div>
  )
}
