import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quotes" element={<QuoteGenerator />} />
      </Routes>
    </Router>
  );
};

export default App;
