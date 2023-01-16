import logo from './logo.svg';
import './App.css';
import Header from './header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/projects';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App bg-primary overflow-hidden">
        <Header></Header>
         <div className="content my-24">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/About"> 
                <About />
              </Route>
            </Switch>
         </div>
      </div>

    </Router>
  );
}

export default App;
