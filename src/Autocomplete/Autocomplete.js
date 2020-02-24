import React, { useState, useEffect } from 'react';
import SuggestionsList from './SuggestionsList';
import './Autocomplete.css';

// Keycodes
const ENTER = 13;
const UP = 38;
const DOWN = 40;

const Autocomplete = () => {
  const [results, setResults] = useState([]);
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredSuggestions, setfilteredSuggestions] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react/issues")
      .then(res => res.json())
      .then(
        (result) => {
          setResults(result);
          setSuggestionsList(result.map((item, i) => [item.title, i]));
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  const onChange = (e) => {
    const filteredSuggestions = suggestionsList.filter(
      ([suggestion, i]) => suggestion.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1);
    setUserInput(e.currentTarget.value);
    setfilteredSuggestions(filteredSuggestions);
  }

  const onKeyDown = e => {
    if (e.keyCode === ENTER && activeIndex !== 0) {
      const resultsIndex = filteredSuggestions[activeIndex - 1][1]
      onClick(results[resultsIndex].html_url);
    } else if (e.keyCode === UP) {
      if (activeIndex === 0) return;
      setActiveIndex(activeIndex - 1);
    } else if (e.keyCode === DOWN) {
      if (activeIndex === filteredSuggestions.length) return;
      setActiveIndex(activeIndex + 1);
    }
  }

  const onClick = url => {
    window.open(url, '_blank');
  };

  return (
    <div className="autocomplete-wrapper">
      <input
        className="autocomplete-input"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />
      <SuggestionsList
        results={results}
        userInput={userInput}
        filteredSuggestions={filteredSuggestions}
        activeIndex={activeIndex}
        onClick={onClick}
      />
    </div>
  );
}

export default Autocomplete;
