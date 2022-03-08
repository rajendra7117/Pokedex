import React from "react";
import './Stat.css'
import { ProgressBar } from "react-bootstrap";
export default function Stat(props) {
  
  return (
    <div className="stat">
      <div>
        <h4>{props.stat}</h4>
      </div>
      <div>
        
        {props.value}
        
       <ProgressBar now={props.value} variant={props.value>=60 ? 'success' : 'danger'} style={{width: '100%'}}/>
      </div>
    </div>
  );
}
