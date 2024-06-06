import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import './styles/App.scss';

function App() {
  return (
    <div className='appDiv'>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        {/* add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;