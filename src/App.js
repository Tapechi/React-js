
import './App.css';
import logo from './logo.svg';
import CartWidget from './Components/CartWidget';

function App() {
  return (
    <div className="App">
      <CartWidget/> 
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
