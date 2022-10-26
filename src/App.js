
import './App.css';
import logo from './logo.svg';
import CartWidget from './Components/CartWidget';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Navbar>  
        </Navbar>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Puede ser que no entiendo nada?
        </p>
        <a href='https://www.google.com/'>
          Hola
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
      
        </a>
        
      </header>
        
    </div>
  );
}

export default App;
