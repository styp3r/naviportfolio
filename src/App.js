import './App.css';
import Hero from './components/Hero';
import Work from './components/Work';

function App() {
/*
  document.addEventListener('mousemove', Parallax);

function Parallax(e){
    let x = e.offsetX; //x-coordinate
    let y = e.offsetY; //y-coordinate
    console.log(x+" "+y);
} */

  console.info("WEEWOO 🚨 WEEWOO 🚨 NAVJYOTJAISWAL.COM POLICE HERE 🚓👮‍♂️ JUST CHECKING 👀 IF EVERYTHING IS SAFE 🤸‍♂️");
  return (  
    <div className = "App">
    <Hero />
    <Work />
    </div>
  );
}

export default App;
