import React from 'react';
import './Game.scss';
import { Board } from './components/Board/Board';
import { GameProvider } from './GameProvider';
import { ScoreBox } from './components/ScoreBox/ScoreBox';
import { BoardButtons } from './components/BoardButtons/BoardButtons';
import { PossibleSetsContainer } from './components/PossibleSetsContainer/PossibleSetsContainer';

function Game() {
  return (
    <div className="game-container">
      <h1>Set card game!</h1>

      <GameProvider>
        <div className="top-part">
          <ScoreBox />
        </div>

        <BoardButtons />

        <Board />

        <PossibleSetsContainer />
      </GameProvider>
    </div>
  );
}

export default Game;
