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
            document.getElementById("bigMonsterMouth").className = "bigMonsterShocked";
            document.getElementById("bigMonster").style.backgroundColor = "#1b1e26";
            document.getElementById("bigMonsterBody").style.backgroundColor = "#1b1e26";
            document.getElementById("bigMonsterFace").style.backgroundColor = "#1c262a";
            document.getElementById("rightPupil").style.backgroundColor = "#00cca3";
            document.getElementById("leftPupil").style.backgroundColor = "#00cca3";
            document.getElementById("bigMonsterMouth").style.border = "solid #1e7b4e";
            document.getElementById("bigMonsterMouth").style.borderWidth = "1vmin";
            document.getElementById("bigMonsterNeck").style.backgroundColor = "#1c262a";
            document.getElementById("bigMonsterChest").style.backgroundColor = "#1c262a";
            document.getElementById("bigMonsterBodyReflection").style.backgroundColor = "#1e7b4e";
            document.getElementById("bigMonsterReflection").style.backgroundColor = "#1e7b4e";

            interactiveContainer.style.background = "linear-gradient(#000000, #0d1a26)"; 
            interactiveContainer.style.transitionDuration = "0.7s";
            document.getElementById("heroText1").style.color = "#ccff99";
            document.getElementById("glowMonsterUpperBody").className = "addGlow";
            document.getElementById("glowMonsterUpperBody").style.transitionDuration = "0.5s";

            document.getElementById("octopusHead").style.backgroundColor = "#1c262a";
            document.getElementById("octopusBody").style.backgroundColor = "#1c262a";
            document.getElementById("octopusLeg1").style.backgroundColor = "#1c262a";
            document.getElementById("octopusLeg2").style.backgroundColor = "#1c262a";
            document.getElementById("octopusLeg3").style.backgroundColor = "#1c262a"; 

            octopusEye.className = "addOrangeGlow";
            octopusEye.style.backgroundColor = "#ff9933";
            octopusEye.style.transitionDuration = "2.5s";
            octopusEye.style.transitionDelay = "0.5s";
            octopusPupil.style.backgroundColor = "#ffff99";
            octopusPupil.style.transitionDelay = "0.5s";
            octopusPupil.style.transitionDuration = "2.5s";

            document.getElementById("glowMonsterPupil").className = "moveGlowMonsterPupil";
            document.getElementById("glowMonsterPupil").style.transitionDuration = "1s";
        }, 1500);

        setTimeout(()=>{
            octopusMouth.style.width = "1vmin";
            octopusMouth.style.height = "1vmin";
            octopusMouth.style.borderRadius = "100%";
            octopusMouth.style.transitionDelay = "0.5s";
            octopusMouth.style.transitionDuration = "1s";
        }, 2000);
        

        setTimeout(() => {
            octopusEye.className = "";
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
            document.getElementById("octopusHead").style.backgroundColor = "aqua";
            document.getElementById("octopusBody").style.backgroundColor = "aqua";
            document.getElementById("octopusLeg1").style.backgroundColor = "aqua";
            document.getElementById("octopusLeg2").style.backgroundColor = "aqua";
            document.getElementById("octopusLeg3").style.backgroundColor = "aqua";  

            document.getElementById("heroText1").style.color = "#000000";
            document.getElementById("heroText1").style.transitionDelay = "0s";
            glowBall.className = "";
            glowBall.style.transitionDuration = "0s";
            glowBall.style.display = "block";
            interactiveContainer.style.background = "linear-gradient(#aa80ff, #d147a3)";
            interactiveContainer.style.transitionDelay = "0s";
            interactiveContainer.style.transitionDuration = "0.5s";
            document.getElementById("glowMonsterUpperBody").className = "";

            document.getElementById("glowMonsterPupil").className = "";

            document.getElementById("bigMonster").style.backgroundColor = "#b30086";
            document.getElementById("bigMonsterMouth").className = "";
            document.getElementById("bigMonsterBody").style.backgroundColor = "#b30086";
            document.getElementById("bigMonsterFace").style.backgroundColor = "#990073";
            document.getElementById("rightPupil").style.backgroundColor = "#9900cc";
            document.getElementById("leftPupil").style.backgroundColor = "#9900cc";
            document.getElementById("bigMonsterMouth").style.border = "solid #800060";
            document.getElementById("bigMonsterMouth").style.borderWidth = "1vmin";
            document.getElementById("bigMonsterNeck").style.backgroundColor = "#990073";
            document.getElementById("bigMonsterChest").style.backgroundColor = "#990073";
            document.getElementById("bigMonsterBodyReflection").style.backgroundColor = "#ffffff";
            document.getElementById("bigMonsterReflection").style.backgroundColor = "#ffffff";
        }, 7000);
    }

    return (
        <div>
            <div onClick = {toggleDark} onMouseOver = {toggleDark} id = "glowBall"></div>
        </div>
    );
}

export default GlowBall;