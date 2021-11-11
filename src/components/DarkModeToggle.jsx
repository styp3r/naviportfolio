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
            document.getElementById("heroText1").style.color = "#aa80ff";
            document.getElementById("heroContainer").style.background = "linear-gradient(45deg, #262626 , #262626)";
            //document.getElementById("blob1").style.backgroundColor = "#8c8c8c";
            //document.getElementById("blob2").style.backgroundColor = "#595959";
            setDark(1);
        } else {
            document.getElementById("heroText1").style.color = "#9933ff";
            document.getElementById("heroContainer").style.background = "linear-gradient(45deg, #9933ff , #ffffff)";
            //document.getElementById("blob1").style.backgroundColor = "#bf80ff";
            //document.getElementById("blob2").style.backgroundColor = "#6600cc";
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