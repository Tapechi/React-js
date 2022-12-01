import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer.jsx/Footer';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
      <Hero/>
    
      <header className="App-header">
        <ItemListContainer cardTitle="Card" greeting="Prueba" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
      </header>
      
      <Footer/>
      
    </div>
    
  );
}

export default App;
