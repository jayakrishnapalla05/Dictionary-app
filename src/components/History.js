// src/components/History.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

function History() {
  const history = useSelector((state) => state.history);

  return (
    <div className="history-result">
      <h2>Search History</h2>
      <ul>
        {history.map((word, index) => (
          <li key={index}>
            <Link to={`/word/${word}`}>{word}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
