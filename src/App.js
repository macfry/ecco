import React from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import Board from './components/Board';

function App() {
  const [query, setQuery] = React.useState('');

  const checkFen = (fenString) => {
    const regex = new RegExp(/((([pnbrqkPNBRQK1-8]{1,8})\/?){8})(\s+(b|w)\s+(-|K?Q?k?q)\s+(-|[a-h][3-6])\s+(\d+)\s+(\d+))?/);
    return regex.test(fenString);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>FEN Board</h1>
      </header>

      <SearchInput
        value={query}
        onChangeText={ e => {
          setQuery(e.target.value);
        }}
      />

      { (query && checkFen(query)) && <Board fen={query}/> }
      { (query !== '' && !checkFen(query)) && <p>FEN is incorrect</p> }
    </div>
  );
}

export default App;
