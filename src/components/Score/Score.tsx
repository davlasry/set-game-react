import './Score.scss';
import React, { useContext } from 'react';
import { GameStateContext } from '../../GameProvider';

export function Score() {
  const { score } = useContext(GameStateContext);

  return <div className="score-container">{score}</div>;
}
