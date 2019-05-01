import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="">
      
    </div>
  );
}

export default App;
