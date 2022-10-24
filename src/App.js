import logo from './logo.svg';
import './App.css';
import Falopa from './Falopa';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Puede ser que no entiendo nada?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
      <Falopa/>  
    </div>
  );
}

export default App;
