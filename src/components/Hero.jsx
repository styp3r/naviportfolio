import React,  {useState} from 'react';

function Hero(){

    const [title, setTitle] = useState("Designer");


    let interval = setInterval(()=>{
        if(title === "Designer"){
            setTitle("UI/UX Engineer");
        }
        if(title === "UI/UX Engineer"){
            setTitle("Interactive Architect");
        }
        if(title === "Interactive Architect"){
            setTitle("Designer");
        }

        clearInterval(interval);
    }, 4000);



    return (        
            <div style = {{width: window.innerWidth, height: window.innerHeight }} className = "heroContainer">
                <h1 className = "heroHeader">Navjyot Jaiswal</h1>
                <div className = "heroContentContainer">
                    <div className = "leftAlign">
                        <h1 className = "heroText1">Front-End Developer</h1>
                        <h1 className = "heroText2"><span className = "grey">+</span><span id = "title"> {title}</span></h1>
                    </div>
                </div>
            </div>
    );
}

export default Hero;