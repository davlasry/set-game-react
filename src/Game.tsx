import React, { useEffect, useState } from 'react';
import './Game.scss';
import { Board } from './components/Board/Board';

//

function Game() {
  const [calledSet, setCalledSet] = useState(false);

  useEffect(() => {
    console.log(calledSet);
  }, [calledSet]);

  return (
    <div className="app">
      <h1>Set card game</h1>
      <Board setCalledSet={setCalledSet} calledSet={calledSet} />
    </div>
  );
}

export default Game;
