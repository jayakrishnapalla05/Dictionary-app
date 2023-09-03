// src/components/Home.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToHistory } from "../Store/History/action";
import "./style.css";

function Home() {
  const [word, setWord] = useState("");
  const [wordDetails, setWordDetails] = useState(null); // State to store word details
  const dispatch = useDispatch();

  const handleSearch = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming 'data' contains the word details as received from the API
        setWordDetails(data[0]); // Set word details in state
        dispatch(addToHistory(word));
        setWord("");
      })
      .catch((error) => {
        console.error("Error fetching word details:", error);
      });
  };

  return (
    <div className="home-result">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {wordDetails && (
        <div className="result">
          <h2> {wordDetails.word}</h2>
          <ul>
            {wordDetails.phonetics.map((phonetic, index) => (
              <li key={index}>
                {phonetic.text} <br />
                <audio src={phonetic.audio} controls></audio>
              </li>
            ))}
          </ul>
          <ul>
            {wordDetails.meanings.map((meaning, index) => (
              <li key={index}>
                <h3> {meaning.partOfSpeech}</h3>
                <ul>
                  {meaning.definitions.map((definition, dIndex) => (
                    <li key={dIndex}>
                      <p>{definition.definition}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
