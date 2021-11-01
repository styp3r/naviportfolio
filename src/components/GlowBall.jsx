function GlowBall(){

    function toggleDark(){
        document.getElementById("glowBall").className = "glowBallDark";
        document.getElementById("octopusTongue").className = "octopusTongue";

        setTimeout(() => {
            document.getElementById("glowBall").className = "";
            document.getElementById("octopusTongue").className = "";
        }, 6000);
    }

    return (
        <div onMouseOver = {toggleDark} id = "glowBall"></div>
    );
}

export default GlowBall;