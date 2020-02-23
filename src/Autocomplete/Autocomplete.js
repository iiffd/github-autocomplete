import React, { useState, useEffect } from 'react';
import SuggestionsList from './SuggestionsList';
import './Autocomplete.css';

const Autocomplete = () => {
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setfilteredSuggestions] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react/issues")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.map(item => item.title));
          setSuggestionsList(result.map(item => item.title));
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  const onChange = (e) => {
    const filteredSuggestions = suggestionsList.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
    setUserInput(e.currentTarget.value);
    setfilteredSuggestions(filteredSuggestions);
  }
  
  const onKeyDown = e => {
    console.log(filteredSuggestions);
    console.log(userInput);

  }

  return (
    <>
      <input
        className="autocomplete-input"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />
      <SuggestionsList
        userInput={userInput}
        filteredSuggestions={filteredSuggestions}
      />
    </>
  );
}

export default Autocomplete;
