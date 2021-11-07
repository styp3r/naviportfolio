document.addEventListener('mousemove', Parallax);

function Parallax(e){
    let x = e.offsetX; //x-coordinate
    let y = e.offsetY; //y-coordinate
    console.log(x+" "+y);
  
  document.getElementById("bigMonster").style.transform = "translate("+(x/10)+"%, "+(y/10)+"%)";

  document.getElementById("res").innerHTML = x;
}