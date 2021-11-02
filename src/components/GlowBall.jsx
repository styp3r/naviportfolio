function GlowBall(){

    function toggleDark(){
        document.getElementById("glowBall").className = "glowBallDark";
        document.getElementById("octopusHead").className = "octopusHeadSlurp";

        setTimeout(() => {
            document.getElementById("glowBall").className = "";
            document.getElementById("octopusHead").className = "hoverOctopusHead";
        }, 6000);
    }

    return (
        <div onMouseOver = {toggleDark} id = "glowBall"></div>
    );
}

export default GlowBall;