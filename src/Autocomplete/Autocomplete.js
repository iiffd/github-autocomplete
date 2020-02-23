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
          setSuggestionsList(result.map((item, i) => [item.title, i]));
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  const onChange = (e) => {
    const filteredSuggestions = suggestionsList.filter(
      ([suggestion, i]) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
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
        suggestionsList={suggestionsList}
        userInput={userInput}
        filteredSuggestions={filteredSuggestions}
      />
    </>
  );
}

export default Autocomplete;
