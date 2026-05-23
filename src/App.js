import './App.css';
import Header from './components/header/Header';
import HeroHeader from './components/hero-header/HeroHeader';
import Services from './components/services/Services';
import Tours from './components/tours/Tours';
import {toursList} from "./data.js";

function App() {

  return (
    <div className="App">
      <Header />
      <HeroHeader />
      <Services />
      <Tours toursList={toursList} />
    </div>
  );
}

export default App;