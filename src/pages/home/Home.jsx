import HeroHeader from '../../components/hero-header/HeroHeader';
import Services from '../../components/services/Services';
import Tours from '../../components/tours/Tours';
import Pagination from "../../components/pagination/Pagination";
import Sort from "../../components/sort/Sort";
import Banner from '../../components/banner/Banner';
import NewsLetter from '../../components/news-letter/NewsLetter';
import Footer from '../../components/footer/Footer.jsx';
import {toursList} from "../../data.js";
import { useState } from 'react';
import { pagination } from '../../utils/pagination.js';
import { sorting } from '../../utils/sorting.js';

export default function Home() {
    const [currentPage, setCurrentPage]= useState(1);

    // Sort Tours
    const [sortItem, setSortItem] = useState("recommended");

    const sortedTours= sorting(sortItem, toursList);

    const {pages, pageTours} = pagination(toursList.length, sortedTours, currentPage);
    
    return (
        <>
            <HeroHeader />
            <Services />
            <Sort length={toursList.length} sortItem={sortItem} setSortItem={setSortItem} />
            <Tours toursList={pageTours} />
            <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Banner />
            <NewsLetter />
            <Footer />
        </>
    );
}