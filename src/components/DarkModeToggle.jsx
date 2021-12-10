import React, {useState} from 'react';

function DarkModeToggle(){

    const [dark, setDark] = useState(0);

    function changeSq(){
        document.getElementById("sq").style.backgroundColor = "#bf80ff";
        document.getElementById("sq").style.transitionDuration = "0.2s";
    }

    
    function changeSqToNormal(){
        document.getElementById("sq").style.backgroundColor = "#000000";
        document.getElementById("sq").style.transitionDuration = "0.2s";
    }

    function toggleDarkMode(){
        if(dark === 0){
            document.getElementById("darkModeToggle").style.backgroundColor = "#262626";
            document.getElementById("darkModeToggle").style.border = "solid #ffffff";
            document.getElementById("sq").style.backgroundColor = "#00e5ff";
            document.getElementById("workTitle").style.color = "#ffffff";
            document.getElementById("heroText1").style.color = "#aa80ff";
            document.getElementById("heroContainer").style.background = "linear-gradient(45deg, #262626 , #262626)";
            document.getElementById("workContainer").style.background = "linear-gradient(45deg, #262626 , #262626)";
            setDark(1);
        } else {
            document.getElementById("darkModeToggle").style.border = "solid #00e5ff";
            document.getElementById("sq").style.backgroundColor = "#000000";
            document.getElementById("darkModeToggle").style.backgroundColor = "#ffffff";
            document.getElementById("workTitle").style.color = "#aa80ff";
            document.getElementById("heroText1").style.color = "#9933ff";
            document.getElementById("workContainer").style.background = "linear-gradient(135deg, #00e5ff, #ffffff)";
            document.getElementById("heroContainer").style.background = "linear-gradient(45deg, #00e5ff, #ffffff)";
            setDark(0);
        }
    }

    return (
        <div onMouseDown = {changeSq} onMouseUp = {changeSqToNormal} onClick = {toggleDarkMode} id = "darkModeToggle">
            <div id = "sq"></div>
        </div>
    );
}

export default DarkModeToggle;