import React from "react";

export default function Button() {
  function handleClick() {
    setTimeout(() => {
      window.open("https://www.google.com");
    }, 500);
  }

  return (
    <div className="App">
      <div className="section">
        <div
          id="button"
          onMouseOver={() => {
            document.getElementById("button").style.width = "11vmin";
          }}
          onMouseOut={() => {
            document.getElementById("button").style.width = "10vmin";
          }}
          onMouseUp={() => {
            document.getElementById("button").style.backgroundColor = "#ffffff";
            document.getElementById("button").style.boxShadow = "none";
            document.getElementById("button").style.transitionDuration = "0.5s";
            document.getElementById("button").style.width = "10vmin";
          }}
          onMouseDown={() => {
            document.getElementById("button").style.backgroundColor = "#80dfff";
            document.getElementById("button").style.width = "9vmin";
            document.getElementById("button").style.boxShadow =
              "0 0 8vmin 2vmin #007a99";
            document.getElementById("button").style.transitionDuration = "0.1s";
          }}
          onClick={handleClick}
        ></div>
      </div>
    </div>
  );
}
