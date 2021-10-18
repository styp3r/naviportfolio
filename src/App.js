import './App.css';
import {Switch, Route} from 'react-router-dom';
import Tutorial1 from './components/Tutorial1';
import Tutorial2 from './components/Tutorial2';
import EndTutorial from './components/EndTutorial';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';

function App() {
  return (  
    <div className = "App">
      <Switch>
        <Route path = "/" component = {Tutorial1} exact />
        <Route path = "/tut2" component = {Tutorial2} />
        <Route path = "/endtut" component = {EndTutorial} />
        <Route path = "/home" component = {Home} />
        <Route path = "/about" component = {About} />
        <Route path = "/work" component = {Work} />
      </Switch>
    </div>
  );
}

export default App;
