import React from 'react';
import './App.scss';
import { Board } from './components/Board/Board';

function App() {
  return (
    <div className='app'>
      <h1>Set card game</h1>
      <Board />
    </div>
  );
}

export default App;
