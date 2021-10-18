import React from "react";

export default function Button(props){ 
    
  let circle = (props.askToClick == "true")? "circle": null;

   return <div id = "button">
     <div className = {circle}></div>
     <div className = {circle+"1"}></div>
   </div>;
}
