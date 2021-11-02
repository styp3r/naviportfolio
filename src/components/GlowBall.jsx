function GlowBall(){

    function toggleDark(){
        document.getElementById("glowBall").className = "glowBallDark";
        document.getElementById("octopusHead").className = "octopusHeadSlurp";
        document.getElementById("heroText1").style.color = "#bb99ff";
        document.getElementById("heroText1").style.transitionDelay = "2.5s";
        document.getElementById("interactiveContainer").style.backgroundColor = "#151e1e";
        document.getElementById("interactiveContainer").style.transitionDelay = "2.5s";
        document.getElementById("interactiveContainer").style.transitionDuration = "0.7s";


        setTimeout(() => {
            document.getElementById("glowBall").className = "";
            document.getElementById("glowBall").style.width = "5vmin";
            document.getElementById("glowBall").style.height = "5vmin";
            document.getElementById("glowBall").style.transitionDuration = "1s";
            document.getElementById("heroText1").style.color = "#000000";
            document.getElementById("heroText1").style.transitionDelay = "0s";
            document.getElementById("octopusHead").className = "hoverOctopusHead";
            document.getElementById("interactiveContainer").style.backgroundColor = "#bb99ff";
            document.getElementById("interactiveContainer").style.transitionDelay = "0s";
            document.getElementById("interactiveContainer").style.transitionDuration = "1s";
        }, 6000);
    }

    return (
        <div onMouseOver = {toggleDark} id = "glowBall"></div>
    );
}

export default GlowBall;