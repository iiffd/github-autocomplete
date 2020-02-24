import React from 'react';
import './SuggestionsList.css';

const SuggestionsList = ({ results, userInput, filteredSuggestions, activeIndex, onClick }) => {


  if (userInput && filteredSuggestions.length) {
    return (
      <ul className="suggestions">
        {filteredSuggestions.map(([suggestion, suggestionIndex], i) => (
          <li key={i}>
            <button
              className={activeIndex === i + 1 ? 'active' : ''}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onClick(results[suggestionIndex].html_url)}
            >
              {suggestion}
              {results[suggestionIndex].labels.map(({ name, color }, i) => (
                <span key={'label-' + i} style={{ backgroundColor: '#' + color }} className="label-status">
                  {name}
                </span>
              ))}
            </button>
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
