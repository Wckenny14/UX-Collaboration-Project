import React from 'react'
import { Link } from 'react-router-dom';

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <Link to='/'><button className="close-btn" onClick={() => props.setTrigger(false)}>X</button></Link> 
        { props.children }
      </div>
    </div>
  ) : ""
}

export default Popup;
