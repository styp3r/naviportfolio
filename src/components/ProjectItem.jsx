import React from 'react';

function ProjectItem(props){

    let title = props.title;

    function handleMouseOver(){
        if(title == "one"){
            document.getElementById("one").style.transitionDuration = "0.5s";
            document.getElementById("one").style.backgroundColor = "#666666";
        }
        if(title == "two"){
            document.getElementById("two").style.transitionDuration = "0.5s";
            document.getElementById("two").style.backgroundColor = "#666666";
        }
        if(title == "three"){
            document.getElementById("three").style.transitionDuration = "0.5s";
            document.getElementById("three").style.backgroundColor = "#666666";
        }
    }

    function handleMouseOut(){
        if(title == "one"){
            document.getElementById("one").style.backgroundColor = "#ccccff";
        }
        if(title == "two"){
            document.getElementById("two").style.backgroundColor = "#ccccff";
        }
        if(title == "three"){
            document.getElementById("three").style.backgroundColor = "#ccccff";
        }
    }

    return (
        <div id = "ProjectItemContainer">
            <div id = {title} onMouseOver = {handleMouseOver} onMouseOut = {handleMouseOut}></div>
                <div id = "gradientBlob">
                    <div id = "gradientBlobChild1"></div>
                    <div id = "gradientBlobChild2"></div>
                </div>
                
                <div>
                    <p id = "itemTitle">{props.itemName}</p>
                </div>

        </div>
    );
}

export default ProjectItem;
