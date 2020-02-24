import React from 'react';
import './SuggestionsList.css';

const SuggestionsList = ({ results, userInput, filteredSuggestions, activeIndex }) => {


  if (userInput && filteredSuggestions.length) {
    return (
      <ul className="suggestions">
        {filteredSuggestions.map(([suggestion, suggestionIndex], i) => (
          <li key={i}>
            <a
              className={activeIndex === i + 1 ? 'active' : ''}
              target="_blank"
              rel="noopener noreferrer"
              href={results[suggestionIndex].html_url}
            >
              {suggestion}
              {results[suggestionIndex].labels.map(({ name, color }) => (
                <span style={{ 'background-color': '#' + color }} className="label-status">
                  {name}
                </span>
              ))}
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
