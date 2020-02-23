import React, { useState, useEffect } from 'react';
import './SuggestionsList.css';

const SuggestionsList = ({ showSuggestions, userInput, filteredSuggestions }) => {

  if (userInput && filteredSuggestions.length) {
    return (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, i) => {
          
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
