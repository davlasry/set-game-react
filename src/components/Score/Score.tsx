import './Score.scss';
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { GameStoreContext } from '../../stores/gameStoreContext';

export const Score = observer(() => {
  const gameStore = useContext(GameStoreContext);

  return (
    <div className="score">
      <div className="score__label">Score</div>
      <div className="score__value">{gameStore.score}</div>
    </div>
  );
});
