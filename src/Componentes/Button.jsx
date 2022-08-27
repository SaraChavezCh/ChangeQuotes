import React from 'react';
import '../App.css'
const Button = ({change, bg}) => {
   
    return (
        <button onClick={change} style={{color:bg}}><i className="fa-solid fa-circle-arrow-right"></i></button>
       
    );
};

export default Button;