import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';



import './AlertCustom.css'

function AlertCustom({message, action, visible}) {

  return (
    visible && (
        <div className={`AlertCustom ${action}`}>
            {message}
            <img src={`public/images/${action}.png`}/>
        </div>
    )
  );
}

export default AlertCustom;