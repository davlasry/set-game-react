import React, { useContext } from 'react';
import './ActionButtons.scss';
import { GameStoreContext } from '../../stores/gameStoreContext';
import { observer } from 'mobx-react-lite';

export const ActionButtons = observer(() => {
  const gameStore = useContext(GameStoreContext);
  const { userCalledSet, callSet, cancelSet, startNewGame } = gameStore;

  return (
    <div className="board__actions">
      <button onClick={() => startNewGame()} className="sg-button">
        New Game
      </button>

      {userCalledSet ? (
        <button
          onClick={() => cancelSet()}
          disabled={!userCalledSet}
          className="sg-button cannot-find-btn"
        >
          Can't find it!
        </button>
      ) : (
        <button
          onClick={() => callSet()}
          disabled={userCalledSet}
          className="sg-button set-button"
        >
          Set!
        </button>
      )}
    </div>
  );
});
