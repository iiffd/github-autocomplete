import React from 'react';
import './SuggestionsList.css';

const SuggestionsList = ({ results, userInput, filteredSuggestions, activeIndex }) => {


  if (userInput && filteredSuggestions.length) {
    return (
      <ul className="suggestions">
        {filteredSuggestions.map(([suggestion, suggestionIndex], i) => (
          <li key={i} className={activeIndex === i + 1 ? 'active' : ''}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={results[suggestionIndex].html_url}
            >
              {suggestion}
            </a>
          </li>
        ))}
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
