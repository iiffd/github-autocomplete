import React, { useState, useEffect } from 'react';
import './SuggestionsList.css';

const SuggestionsList = ({ results, userInput, filteredSuggestions }) => {


  if (userInput && filteredSuggestions.length) {
    return (
      <ul className="suggestions">
        {filteredSuggestions.map(([suggestion, suggestionIndex], i) => {
          console.log(results[suggestionIndex]);
          return (
            <li key={i}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={results[suggestionIndex].html_url}
              >
                {suggestion}
              </a>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return (
      <>
      </>
    )
  }
}

export default SuggestionsList;
