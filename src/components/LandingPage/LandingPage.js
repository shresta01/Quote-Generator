import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/quotes');
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the Quotes World</h1>
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default LandingPage;
