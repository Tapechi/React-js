import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
      </Router>
      <header className="App-header">
        <ItemListContainer cardTitle="Falopa" greeting="Emi esta re puesto"></ItemListContainer>
        <p>Puede ser que no entiendo nada?</p>
        <a href="https://www.google.com/">Hola</a>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
      </header>
    </div>
  );
}

export default App;
