import React from 'react';
import './Game.scss';
import { Board } from './components/Board/Board';
import { GameProvider } from './GameProvider';
import { ScoreBox } from './components/ScoreBox/ScoreBox';
import { BoardButtons } from './components/BoardButtons/BoardButtons';
import { PossibleSets } from './components/PossibleSets/PossibleSets';

function Game() {
  return (
    <div className="game-container">
      <h1>Set card game!</h1>

      <GameProvider>
        <div className="top-part">
          <ScoreBox />
          <PossibleSets />
        </div>

        <BoardButtons />

        <Board />
      </GameProvider>
    </div>
  );
}

export default Game;
