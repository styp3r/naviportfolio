function Octopus(){
    return (
        <div className = "octopusContainer">
            <div id = "octopusHead" className = "hoverOctopusHead" /*"octopusHeadSlurp"*/>
                <div id = "octopusEye">
                    <div id = "octopusPupil"></div>
                </div>
            </div>

            <div id = "octopusMouth"></div>

            <div id = "octopusBody"></div>
            <div id = "octopusLeg1"></div>
            <div id = "octopusLeg2"></div>
            <div id = "octopusLeg3"></div> 
        </div>
    );
}

export default Octopus;