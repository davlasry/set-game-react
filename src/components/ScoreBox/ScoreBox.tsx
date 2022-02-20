import './ScoreBox.scss';
import React, { useContext } from 'react';
import { GameStateContext } from '../../GameProvider';
import { History } from '../History/History';

export function ScoreBox() {
  const state = useContext(GameStateContext);

  const { deck, score, gameState } = state;

  return (
    <div className="score-box">
      <div>Cards in deck: {deck.length}</div>

      <div>Score: {score}</div>

      <div>State: {gameState}</div>

      <History />
    </div>
  );
}
