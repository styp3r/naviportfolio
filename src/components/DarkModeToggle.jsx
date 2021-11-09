import React, {useState} from 'react';

function DarkModeToggle(){

    const [dark, setDark] = useState(0);

    function toggleDarkMode(){
        if(dark === 0){
            document.getElementById("heroContainer").style.background = "linear-gradient(45deg, #262626 , #262626)";
            document.getElementById("blob1").style.backgroundColor = "#8c8c8c";
            document.getElementById("blob2").style.backgroundColor = "#595959";
            document.getElementById("blob3").style.backgroundColor = "#b3b3b3";
            setDark(1);
        } else {
            document.getElementById("heroContainer").style.background = "linear-gradient(45deg, #9933ff , #ffffff)";
            document.getElementById("blob1").style.backgroundColor = "#bf80ff";
            document.getElementById("blob2").style.backgroundColor = "#6600cc";
            document.getElementById("blob3").style.backgroundColor = "#d9b3ff";
            setDark(0);
        }
    }

    return (
        <div onClick = {toggleDarkMode} id = "darkModeToggle"></div>
    );
}

export default DarkModeToggle;