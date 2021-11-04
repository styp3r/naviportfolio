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
        
        setTimeout(()=>{
            glowBall.style.display = "none";
        }, 1500);
        
        
        setTimeout(()=>{
            interactiveContainer.style.backgroundColor = "#151e1e";
            interactiveContainer.style.transitionDuration = "0.7s";
            document.getElementById("heroText1").style.color = "#b3fff0";

            octopusEye.style.backgroundColor = "#ff9933";
            octopusEye.style.transitionDuration = "2.5s";
            octopusEye.style.transitionDelay = "0.5s";
            octopusPupil.style.backgroundColor = "red";
            octopusPupil.style.transitionDelay = "0.5s";
            octopusPupil.style.transitionDuration = "2.5s";
        }, 1500);

        setTimeout(()=>{
            octopusMouth.style.width = "1vmin";
            octopusMouth.style.height = "1vmin";
            octopusMouth.style.borderRadius = "100%";
            octopusMouth.style.transitionDelay = "0.5s";
            octopusMouth.style.transitionDuration = "1s";
        }, 2000);
        

        setTimeout(() => {
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
        }, 6000);

        setTimeout(()=>{
            document.getElementById("heroText1").style.color = "#000000";
            document.getElementById("heroText1").style.transitionDelay = "0s";
            glowBall.className = "";
            glowBall.style.transitionDuration = "0s";
            glowBall.style.display = "block";
            interactiveContainer.style.backgroundColor = "#aa80ff";
            interactiveContainer.style.transitionDelay = "0s";
            interactiveContainer.style.transitionDuration = "0.5s";
        }, 7000);
    }

    return (
        <div>
            <div onMouseOver = {toggleDark} id = "glowBall"></div>
        </div>
    );
}

export default GlowBall;