import React from "react";

export default function Button() {
    let interval;
    let flag = 0;

  return (
    <div className="btn">
        <div
          id="button"
          onMouseOver={() => {
            document.getElementById("button").style.width = "11vmin";
            document.getElementById("button").style.transitionDuration = "0.2s";
            interval = setTimeout(()=>{
                flag = 1;
                document.getElementById("button").style.width = "8vmin";
                document.getElementById("button").style.height = "8vmin";
                document.getElementById("button").style.borderRadius = "100%";
                document.getElementById("button").style.transitionDuration = "0.2s";
            }, 700);
          }}
          onMouseOut={() => {
                clearInterval(interval);
                document.getElementById("button").style.width = "10vmin";
                document.getElementById("button").style.height = "2vmin";
                document.getElementById("button").style.borderRadius = "2vmin";
                document.getElementById("button").style.transitionDuration = "0.2s";
          }}
          onMouseUp={() => {
                document.getElementById("button").style.backgroundColor = "#ffffff";
                document.getElementById("button").style.boxShadow = "none";
                document.getElementById("button").style.transitionDuration = "0.2s";
                document.getElementById("button").style.width = "10vmin";
                document.getElementById("button").style.height = "2vmin";
                document.getElementById("button").style.borderRadius = "2vmin";
                flag = 0;
          }}
          onMouseDown={() => {
            clearInterval(interval);
              if(flag === 1){
                document.getElementById("button").style.width = "9vmin";
                document.getElementById("button").style.height = "9vmin";
                document.getElementById("button").style.borderRadius = "100%";
                document.getElementById("button").style.transitionDuration = "0.2s";
              } else {
                document.getElementById("button").style.backgroundColor = "#f2f2f2";
                document.getElementById("button").style.width = "8vmin";
                document.getElementById("button").style.transitionDuration = "0.2s";
              }
          }}
        ></div>
      </div>
  );
}
