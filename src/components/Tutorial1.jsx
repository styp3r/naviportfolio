import React from 'react';
import Button from './Button';

function Tutorial1(){

    function handleClick(){
        
    }

    return (
        <div>
            <p className = "tutMessage1">Tap the button</p>
            <img></img>        
            <div className = "blurBlob"></div>
            <div className = "blurBlob1"></div>
            <div className = "blurBlob2"></div>
            <div onClick = {handleClick}><Button /></div>
        </div>);
}

export default Tutorial1;