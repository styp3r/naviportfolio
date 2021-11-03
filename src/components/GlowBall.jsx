function GlowBall(){

    let glowBall = document.getElementById("glowBall");
    let interactiveContainer = document.getElementById("interactiveContainer");

    function toggleDark(){
        glowBall.className = "glowBallDark";
        document.getElementById("octopusHead").className = "octopusHeadSlurp";
        document.getElementById("octopusBody").className = "octopusBodySlurp";
        document.getElementById("octopusMouth").className = "octopusMouthSlurp";
        document.getElementById("octopusLeg1").className = "octopusLeg1Slurp";
        document.getElementById("octopusLeg2").className = "octopusLeg2Slurp";
        document.getElementById("octopusLeg3").className = "octopusLeg3Slurp";
        document.getElementById("heroText1").style.color = "#bb99ff";
        document.getElementById("heroText1").style.transitionDelay = "2.5s";
        interactiveContainer.style.backgroundColor = "#151e1e";
        interactiveContainer.style.transitionDelay = "2.5s";
        interactiveContainer.style.transitionDuration = "0.7s";


        setTimeout(() => {
            glowBall.className = "";
            glowBall.style.width = "5vmin";
            glowBall.style.height = "5vmin";
            glowBall.style.transitionDuration = "1s";
            document.getElementById("heroText1").style.color = "#000000";
            document.getElementById("heroText1").style.transitionDelay = "0s";
            document.getElementById("octopusHead").className = "hoverOctopusHead";
            document.getElementById("octopusBody").className = "hoverOctopusBody";
            document.getElementById("octopusMouth").className = "hoverOctopusMouth";
            document.getElementById("octopusLeg1").className = "hoverOctopusLeg1";
            document.getElementById("octopusLeg2").className = "hoverOctopusLeg2";
            document.getElementById("octopusLeg3").className = "hoverOctopusLeg3";
            interactiveContainer.style.backgroundColor = "#bb99ff";
            interactiveContainer.style.transitionDelay = "0s";
            interactiveContainer.style.transitionDuration = "1s";
        }, 6000);
    }

    return (
        <div onMouseOver = {toggleDark} id = "glowBall"></div>
    );
}

export default GlowBall;