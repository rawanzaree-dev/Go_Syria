import './App.css';
import Header from './components/header/Header';
import HeroHeader from './components/hero-header/HeroHeader';
import Services from './components/services/Services';
import Tours from './components/tours/Tours';
import {toursList} from "./data.js";
import Pagination from "./components/pagination/Pagination";
import Sort from "./components/sort/Sort";
import { useState } from 'react';
import { pagination } from './utils/pagination.js';
import { sorting } from './utils/sorting.js';
import Banner from './components/banner/Banner';

function App() {

  const [currentPage, setCurrentPage]= useState(1);

  // Sort Tours
  const [sortItem, setSortItem] = useState("recommended");

 const sortedTours= sorting(sortItem, toursList);

  const {pages, pageTours} = pagination(toursList.length, sortedTours, currentPage);

  return (
    <div className="App">
      <Header />
      <HeroHeader />
      <Services />
      <Sort length={toursList.length} sortItem={sortItem} setSortItem={setSortItem} />
      <Tours toursList={pageTours} />
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Banner />
    </div>
  );
}

export default App;