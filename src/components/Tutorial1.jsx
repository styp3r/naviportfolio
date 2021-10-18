import React from 'react';
import Button from './Button';
import {Link} from 'react-router-dom';

function Tutorial1(){

    return (
        <div>
            <div className = "tutBox1 font">
            <p>Greetings!</p> 
            <p>Tap the button below to continue</p>
            <p>when you are ready.</p>
            <img></img>
            </div>          
            <div className = "blurBox"></div>
            <div className = "blurBox1"></div>
            <div className = "blurBox2"></div>
            <Button askToClick = "true"/>
        </div>);
}

export default Tutorial1;