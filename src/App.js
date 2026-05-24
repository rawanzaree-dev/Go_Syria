import './App.css';
import Header from './components/header/Header';
import HeroHeader from './components/hero-header/HeroHeader';
import Services from './components/services/Services';
import Tours from './components/tours/Tours';
import {toursList} from "./data.js";
import Pagination from "./components/pagination/Pagination";
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage]= useState(1);
  const TOUR_PER_PAGE= 6;

  const startIndex= (currentPage - 1) * TOUR_PER_PAGE;
  const endIndex= currentPage * TOUR_PER_PAGE;

  const pageTours= toursList.slice(startIndex, endIndex);

  const pages= Math.ceil(toursList.length / TOUR_PER_PAGE);

  return (
    <div className="App">
      <Header />
      <HeroHeader />
      <Services />
      <Tours toursList={pageTours} />
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;