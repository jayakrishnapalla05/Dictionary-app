// src/components/WordDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

function WordDetails() {
  const { word } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Perform API call to fetch word details based on 'word' param
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]); // Assuming the first item in the response is the relevant word data
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [word]);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="word-details">
      {data && (
        <div className="history-list">
          <h2>{data.word}</h2>
          <ul>
            {data.phonetics.map((phonetic, index) => (
              <li key={index}>
                {phonetic.text}
                <br />
                <audio src={phonetic.audio} controls></audio>
              </li>
            ))}
          </ul>
          <ul>
            {data.meanings.map((meaning, index) => (
              <li key={index}>
                <h3>{meaning.partOfSpeech}</h3>
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

export default WordDetails;
