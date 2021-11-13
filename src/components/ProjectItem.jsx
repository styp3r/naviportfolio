import React from 'react';

function ProjectItem(props){

    return (
        <div id = "ProjectItemContainer">
            <div id = "insetGradient"></div>
                <div id = "gradientBlob">
                    <div id = "gradientBlobChild1"></div>
                    <div id = "gradientBlobChild2"></div>
                </div>
                <div id = {props.title}>
                    <p id = "itemTitle">{props.itemName}</p>
                </div>
        </div>
    );
}

export default ProjectItem;
