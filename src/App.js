import logo from './logo.svg';
import './App.css';
import Header from './header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/projects';

function App() {
  return (

      <div className="App overflow-hidden pb-[15vh] bg-[#0d1117] px-[5vh] lg:px-[30vh]">
        <Header></Header>
         <div className="content h-full">
           <Home/>
            <Projects/>
         </div>
      </div>

  );
}

export default App;
