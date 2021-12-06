import React, {useState} from 'react';

function DarkModeToggle(){

    const [dark, setDark] = useState(0);

    function handleHoverOn(){
        document.getElementById("darkModeToggle").style.border = "solid #bf80ff";
        document.getElementById("darkModeToggle").style.borderWidth = "0.5vmin";
        document.getElementById("darkModeToggle").style.transitionDuration = "0.5s";
    }

    function handleHoverOut(){
        document.getElementById("darkModeToggle").style.border = "solid aqua";
        document.getElementById("darkModeToggle").style.borderWidth = "0.5vmin";
        document.getElementById("darkModeToggle").style.transitionDuration = "3s";
    }

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
            document.getElementById("workTitle").style.color = "#ffffff";
            document.getElementById("heroText1").style.color = "#aa80ff";
            document.getElementById("heroContainer").style.background = "linear-gradient(45deg, #262626 , #262626)";
            document.getElementById("workContainer").style.backgroundColor = "#262626";
            setDark(1);
        } else {
            document.getElementById("workTitle").style.color = "#000000";
            document.getElementById("heroText1").style.color = "#9933ff";
            document.getElementById("workContainer").style.backgroundColor = "#ffffff";
            document.getElementById("heroContainer").style.background = "linear-gradient(20deg, #facd68, #fc76b3)";
            setDark(0);
        }
    }

    return (
        <div onMouseOver = {handleHoverOn} onMouseOut = {handleHoverOut} onMouseDown = {changeSq} onMouseUp = {changeSqToNormal} onClick = {toggleDarkMode} id = "darkModeToggle">
            <div id = "sq"></div>
        </div>
    );
}

export default DarkModeToggle;