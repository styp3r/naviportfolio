import React from 'react';

function ProjectItem(props){

    let title = props.title;

    function handleHover(){
        if(title == "one"){
            document.getElementById("one").className = "PopOut";
        }
        if(title == "two"){
            document.getElementById("two").className = "PopOut";
        }
        if(title == "three"){
            document.getElementById("three").className = "PopOut";
        }
    }

    function handleHoverOut(){
        if(title == "one"){
            document.getElementById("one").className = "";
        }
        if(title == "two"){
            document.getElementById("two").className = "";
        }
        if(title == "three"){
            document.getElementById("three").className = "";
        }
    }

    return (
        <div onMouseOver = {handleHover} onMouseOut = {handleHoverOut} id = "ProjectItemContainer">
            <div id = {props.title}>
                <p id = "itemTitle">{props.itemName}</p>
            </div>
        </div>
    );
}

export default ProjectItem;
