import React, { useState, useEffect } from 'react';
import './SuggestionsList.css';

const SuggestionsList = ({ suggestionsList, userInput, filteredSuggestions }) => {

  if (userInput && filteredSuggestions.length) {
    return (
      <ul className="suggestions">
        {filteredSuggestions.map(([suggestion, suggestionIndex], i) => {
          return (
            <li key={i}>
              {suggestion}
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
