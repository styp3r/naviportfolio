function Octopus(){
    return (
        <div className = "octopusContainer">
            <div id = "octopusHead" className = "hoverOctopusHead" /*"octopusHeadSlurp"*/>
                <div id = "octopusEye">
                    <div id = "octopusPupil">
                        <div id ="octopusPupilReflection"></div>
                    </div>
                </div>
            </div>

            <div id = "octopusMouth" className = "hoverOctopusMouth" /*"octopusMouthSlurp"*/></div>

            <div id = "octopusBody" className = "hoverOctopusBody" /*"octopusBodySlurp"*/></div>

            <div id = "octopusLeg1" className = "hoverOctopusLeg1" /*"octopusLeg1Slurp"*/></div>
            <div id = "octopusLeg2" className = "hoverOctopusLeg2"/*"octopusLeg2Slurp"*/></div>
            <div id = "octopusLeg3" className = "hoverOctopusLeg3"/*"octopusLeg3Slurp"*/></div> 
        </div>
    );
}

export default Octopus;