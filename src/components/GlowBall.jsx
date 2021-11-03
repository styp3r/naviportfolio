function GlowBall(){

    let glowBall = document.getElementById("glowBall");
    let interactiveContainer = document.getElementById("interactiveContainer");
    let octopusMouth = document.getElementById("octopusMouth");
    let octopusEye = document.getElementById("octopusEye");
    let octopusPupil = document.getElementById("octopusPupil");

    function toggleDark(){
        glowBall.className = "glowBallDark";
        document.getElementById("octopusHead").className = "octopusHeadSlurp";
        document.getElementById("octopusBody").className = "octopusBodySlurp";
        octopusMouth.className = "octopusMouthSlurp";
        document.getElementById("octopusLeg1").className = "octopusLeg1Slurp";
        document.getElementById("octopusLeg2").className = "octopusLeg2Slurp";
        document.getElementById("octopusLeg3").className = "octopusLeg3Slurp";
        document.getElementById("heroText1").style.color = "#bb99ff";
        document.getElementById("heroText1").style.transitionDelay = "2.5s";
        interactiveContainer.style.backgroundColor = "#151e1e";
        interactiveContainer.style.transitionDelay = "2.5s";
        interactiveContainer.style.transitionDuration = "0.7s";

        setTimeout(()=>{
            octopusEye.style.backgroundColor = "#ff9933";
            octopusEye.style.transitionDuration = "1s";
            octopusEye.style.transitionDelay = "0.5s";
            octopusPupil.style.backgroundColor = "red";
            octopusPupil.style.transitionDelay = "0.5s";
            octopusPupil.style.transitionDuration = "1s";
        }, 2000);

        setTimeout(()=>{
            octopusMouth.style.width = "1vmin";
            octopusMouth.style.height = "1vmin";
            octopusMouth.style.borderRadius = "100%";
            octopusMouth.style.transitionDelay = "0.5s";
            octopusMouth.style.transitionDuration = "1s";
        }, 2500);
        

        setTimeout(() => {
            glowBall.className = "";
            glowBall.style.width = "5vmin";
            glowBall.style.height = "5vmin";
            glowBall.style.transitionDuration = "1s";
            document.getElementById("heroText1").style.color = "#000000";
            document.getElementById("heroText1").style.transitionDelay = "0s";
            document.getElementById("octopusHead").className = "hoverOctopusHead";
            document.getElementById("octopusBody").className = "hoverOctopusBody";  
            octopusMouth.style.transitionDuration = "1s";
            octopusMouth.className = "hoverOctopusMouth";
            octopusMouth.style.width = "5vmin";
            octopusMouth.style.height = "3vmin";
            octopusMouth.style.borderRadius = "0 0 5vmin 5vmin";
            octopusMouth.style.transitionDuration = "1s";
            octopusEye.style.backgroundColor = "#ffffff";
            octopusEye.style.transitionDuration = "1s";
            octopusPupil.style.backgroundColor = "#00cca3";
            octopusPupil.style.transitionDuration = "1s";
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