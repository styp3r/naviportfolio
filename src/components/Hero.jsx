import React,  {useEffect, useState} from 'react';
import Plus from '../images/plusSign.png';
import InteractiveContainer from './InteractiveContainer';

function Hero(){

    const [title, setTitle] = useState("Designer");
    const [count, setCount] = useState(0);

    let interval = setInterval(()=>{
        if(title === "Designer"){
            setTitle("UI/UX Artificer");
        }
        if(title === "UI/UX Artificer"){
            setTitle("Gamification Architect");
        }
        if(title === "Gamification Architect"){
            setTitle("Designer");
        }
        clearInterval(interval);
        document.getElementById("plus").style.transitionDuration = "0.3s";
        document.getElementById("plus").style.transform = `rotate(${count}deg)`;
    }, 3000);

    useEffect(()=>{
        //setCount(count + 45);  //ENABLE THIS FOR THE ROTATION ANIMATION TO WORK 
    }, [title]);


    return (        
            <div style = {{width: window.innerWidth, height: window.innerHeight }} id = "heroContainer">
                <InteractiveContainer />
                <h3 className = "heroHeader">NAVJYOT JAISWAL</h3>
                <div className = "heroContentContainer">
                    <div className = "leftAlign">
                        <h1 id = "heroText1" className = "heroText1">Front End Developer</h1>
                        <h1 className = "heroText2"><img id = "plus" width = "40" height= "40" alt = "A rotating aqua colored plus graphic" src = {Plus}/><span id = "title"> {title}</span></h1>
                    </div>
                </div>
            </div>
    );
}

export default Hero;