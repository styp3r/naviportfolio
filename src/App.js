import './App.css';
import Hero from './components/Hero';
import Intro from './components/Intro';

function App() {

  document.addEventListener('mousemove', Parallax);

function Parallax(e){
    let x = e.offsetX; //x-coordinate
    let y = e.offsetY; //y-coordinate
    console.log(x+" "+y);

    document.getElementById("bigMonster").style.transform = "translate("+(-x/100)+"%, "+(-y/100)+"%)";
    document.getElementById("bigMonsterReflection").style.transform = "translate("+(-x/100)+"%, "+(-y/100)+"%)";
    document.getElementById("bigMonsterBody").style.transform = "translate("+(-x/100)+"%, "+(-y/100)+"%)";
    document.getElementById("bigMonsterBodyReflection").style.transform = "translate("+(-x/100)+"%, "+(-y/100)+"%)";
    document.getElementById("bigMonsterNeck").style.transform = "translate("+(-x/100)+"%, "+(-y/100)+"%)";
    document.getElementById("bigMonsterChest").style.transform = "translate("+(-x/100)+"%, "+(-y/100)+"%)";
    document.getElementById("glowMonsterUpperBody").style.transform = "translate("+(-x/100)+"%, "+(-y/100)+"%)";
    //document.getElementById("glowMonsterLowerBody").style.transform = "translate("+(x/100)+"%, "+(y/100)+"%)";
    document.getElementById("octopusHead").style.transform = "translate("+(-x/100)+"%, "+(-y/100)+"%)";

    
}
  return (  
    <div className = "App">
    <Hero />
    <Intro />
    </div>
  );
}

export default App;
