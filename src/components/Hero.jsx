import React,  {useState} from 'react';

function Hero(){

    const [title, setTitle] = useState("Designer");

    function animateTitle(){
        document.getElementById("title").animate([
            // keyframes
            { opacity: 1 },
            { opacity: 0 }
          ], {
            // timing options
            duration: 3100,
            iterations: 1
          });
    }

    let interval = setInterval(()=>{
        if(title === "Designer"){
            setTitle("UI/UX Engineer");
            animateTitle();
        }
        if(title === "UI/UX Engineer"){
            setTitle("Interactive Architect");
            animateTitle();
        }
        if(title === "Interactive Architect"){
            setTitle("Designer");
            animateTitle();
        }

        clearInterval(interval);
    }, 3000);



    return (        
            <div style = {{width: window.innerWidth, height: window.innerHeight }} className = "heroContainer">
                <h1 className = "heroHeader">Navjyot Jaiswal</h1>
                <div className = "heroContentContainer">
                    <div className = "leftAlign">
                        <h1 className = "heroText1">Front-End Developer</h1>
                        <h1 className = "heroText2"><span className = "grey">+</span><span id = "title"> {title}</span></h1>
                        <div className = "slider"></div>
                    </div>
                </div>
            </div>
    );
}

export default Hero;