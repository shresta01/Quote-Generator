import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuoteGenerator.css';

const Quote = ({ quote, author }) => (
  <div className="quote-container">
    <p className="quote-text">"{quote}"</p>
    <p className="quote-author">- {author}</p>
  </div>

);
const QuoteGenerator = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://quotes-api-self.vercel.app/quote');
        const randomQuote = response.data;
        if (randomQuote.quote && randomQuote.author) {
          setQuote({ text: randomQuote.quote, author: randomQuote.author });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching initial quote:", error);
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);
  const handleNewQuote = () => {
    setLoading(true);
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://quotes-api-self.vercel.app/quote');
        const randomQuote = response.data;
        if (randomQuote.quote && randomQuote.author) {
          setQuote({ text: randomQuote.quote, author: randomQuote.author });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching new quote:", error);
        setLoading(false);
      }
    };
    fetchQuote();
  };
  return (
    <div className="quote-generator">
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <Quote quote={quote.text} author={quote.author} />
      )}
      <button className="new-quote-button" onClick={handleNewQuote}>Click for a new quote</button>
    </div>
  );
};
export default QuoteGenerator;
