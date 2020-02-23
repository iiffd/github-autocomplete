import React from 'react';
import './App.css';
import Autocomplete from '../Autocomplete';

const App = () => {
  return (
    <div className="app">
      <h1>Search Github React Issues</h1>
      <Autocomplete />
    </div>
  );
}

export default App;
