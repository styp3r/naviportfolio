import React from 'react';
import HelloHeader from '../images/helloBlackFinal.jpg';

function Hero(){

    let width = window.innerWidth;
    let height = window.innerHeight;
    return (
        <div className = "heroSection" style = {{width: width, height: height}}>
        <div className = "heroHeader">
            <img className = "hello" src = {HelloHeader} width = "500" height="300"/>
            <div className = "iAm"><span className = "topTextIAm">I am </span>Navjyot Jaiswal</div>
        </div>
        </div>
    );
}

export default Hero;