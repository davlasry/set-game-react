import React, { useContext } from 'react';
import { GameDispatchContext, GameStateContext } from '../../GameProvider';
import './BoardButtons.scss';

export function BoardButtons() {
  const state = useContext(GameStateContext);
  const dispatch = useContext(GameDispatchContext);

  const { userCalledSet } = state;

  return (
    <div className="board__actions">
      <button onClick={() => dispatch({ type: 'startNewGame' })}>
        New Game
      </button>

      <button
        onClick={() => dispatch({ type: 'callSet' })}
        disabled={userCalledSet}
      >
        Set
      </button>

      <button
        onClick={() => dispatch({ type: 'cancelSet' })}
        disabled={!userCalledSet}
      >
        Can't find it!
      </button>
    </div>
  );
}
