import React, { useContext, useEffect } from 'react';
import './Game.scss';
import { ScoreBox } from './components/ScoreBox/ScoreBox';
import { PossibleSetsContainer } from './components/PossibleSetsContainer/PossibleSetsContainer';
import { Score } from './components/Score/Score';
import { Board } from './components/Board/Board';
import { ActionButtons } from './components/ActionButtons/ActionButtons';
import { observer } from 'mobx-react-lite';
import { GameStoreContext } from './stores/gameStoreContext';

export const Game = observer(() => {
  const gameStore = useContext(GameStoreContext);

  useEffect(() => {
    gameStore.startNewGame();
  }, []);

  return (
    <div className="game-wrapper">
      <div className="game-container">
        <GameStoreContext.Provider value={gameStore}>
          <div className="top-part">
            <ScoreBox />
          </div>

          <div className="top-bar">
            <ActionButtons />
            <Score />
          </div>

          <Board />

          <PossibleSetsContainer />
        </GameStoreContext.Provider>
      </div>
    </div>
  );
});
