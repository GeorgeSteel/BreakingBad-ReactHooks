import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Phrase({phrase}) {
  return(
    <div className="frase">
      <h1>{ phrase.quote }</h1>
      <p>- { phrase.author }</p>
    </div>
  )
}

function App() {
  const [phrase, setPhrase] = useState({});

  // requesting a REST API
  const requestAPI = async () => {
    const result = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    setPhrase(result.data[0]);
  }

  useEffect(
    () => {
      requestAPI();
    }, []
  )

  return (
    <div className="contenedor">
      <Phrase
        phrase={ phrase }
      />
    </div>
  );
}

export default App;
