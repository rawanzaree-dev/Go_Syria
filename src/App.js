import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Login from './pages/forms/Login.jsx';
import Register from './pages/forms/Register.jsx';
import SingleTour from './pages/tour/SingleTour.jsx';
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tour/:id" element={<SingleTour />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;