import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import './styles/App.scss';
import Footer from './components/Footer/Footer';
import NotFound404 from './pages/NotFound404/NotFound404';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;