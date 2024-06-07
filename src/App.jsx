import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About';
import './styles/App.scss';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;