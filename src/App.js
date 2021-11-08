import './App.css';
import Hero from './components/Hero';
import Intro from './components/Intro';

function App() {

  document.addEventListener('mousemove', Parallax);

function Parallax(e){
    let x = e.offsetX; //x-coordinate
    let y = e.offsetY; //y-coordinate
    console.log(x+" "+y);
}
  return (  
    <div className = "App">
    <Hero />
    <Intro />
    </div>
  );
}

export default App;
