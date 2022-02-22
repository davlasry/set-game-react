import React, { useContext } from 'react';
import { GameDispatchContext, GameStateContext } from '../../GameProvider';
import './ActionButtons.scss';

export function ActionButtons() {
  const { userCalledSet } = useContext(GameStateContext);
  const dispatch = useContext(GameDispatchContext);

  return (
    <div className="board__actions">
      <button
        onClick={() => dispatch({ type: 'startNewGame' })}
        className="sg-button"
      >
        New Game
      </button>

      <button
        onClick={() => dispatch({ type: 'callSet' })}
        disabled={userCalledSet}
        className="sg-button"
      >
        Set
      </button>

      <button
        onClick={() => dispatch({ type: 'cancelSet' })}
        disabled={!userCalledSet}
        className="sg-button"
      >
        Can't find it!
      </button>
    </div>
  );
}
