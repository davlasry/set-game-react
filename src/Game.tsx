import React from 'react';
import './Game.scss';
import { Board } from './components/Board/Board';
import { GameProvider } from './GameProvider';
import { ScoreBox } from './components/ScoreBox/ScoreBox';
import { ActionButtons } from './components/ActionButtons/ActionButtons';
import { PossibleSetsContainer } from './components/PossibleSetsContainer/PossibleSetsContainer';

function Game() {
  return (
    <div className="game-container">
      <GameProvider>
        <div className="top-part">
          <ScoreBox />
        </div>

        <ActionButtons />

        <Board />

        <PossibleSetsContainer />
      </GameProvider>
    </div>
  );
}

export default Game;
