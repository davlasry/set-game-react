import React from 'react';
import './Game.scss';
import { Board } from './components/Board/Board';
import { GameProvider } from './GameProvider';
import { ScoreBox } from './components/ScoreBox/ScoreBox';
import { ActionButtons } from './components/ActionButtons/ActionButtons';
import { PossibleSetsContainer } from './components/PossibleSetsContainer/PossibleSetsContainer';
import { Score } from './components/Score/Score';

function Game() {
  return (
    <div className="game-wrapper">
      <div className="game-container">
        <GameProvider>
          <div className="top-part">
            <ScoreBox />
          </div>

          <div className="top-bar">
            <ActionButtons />
            <Score />
          </div>

          <Board />

          <PossibleSetsContainer />
        </GameProvider>
      </div>
    </div>
  );
}

export default Game;
