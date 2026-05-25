import './App.css';
import Header from './components/header/Header';
import HeroHeader from './components/hero-header/HeroHeader';
import Services from './components/services/Services';
import Tours from './components/tours/Tours';
import {toursList} from "./data.js";
import Pagination from "./components/pagination/Pagination";
import Sort from "./components/sort/Sort";
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage]= useState(1);
  const TOUR_PER_PAGE= 6;

  const startIndex= (currentPage - 1) * TOUR_PER_PAGE;
  const endIndex= currentPage * TOUR_PER_PAGE;

  // const pageTours= toursList.slice(startIndex, endIndex);

  const pages= Math.ceil(toursList.length / TOUR_PER_PAGE);

  // Sort Tours
  const [sortItem, setSortItem] = useState("recommended");

  const sortedTours= sortItem === "low" 
                    ? [...toursList].sort((a, b) => a.priceFrom - b.priceFrom)
                    : sortItem === "high"
                    ? [...toursList].sort((a, b) => b.priceFrom - a.priceFrom)
                    : [...toursList].sort((a, b) => b.rating - a.rating);

  const pageTours= sortedTours.slice(startIndex, endIndex);
  
  return (
    <div className="App">
      <Header />
      <HeroHeader />
      <Services />
      <Sort length={toursList.length} sortItem={sortItem} setSortItem={setSortItem} />
      <Tours toursList={pageTours} />
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;