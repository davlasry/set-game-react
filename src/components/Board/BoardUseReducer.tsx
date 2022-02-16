import React, { useEffect, useState } from 'react';
import './Board.scss';
import BoardCard from '../Card/Card';
import { Card } from '../../types/card';

export const BoardUseReducer = () => {
  // TODO: think about using useReducer instead
  const [activeCards, setActiveCards] = useState<any[]>([]);
  const [deckCards, setDeckCards] = useState<any[]>([]);
  const [boardCards, setBoardCards] = useState<Card[]>([]);

  useEffect(() => {
    startNewGame();
  }, []);

  // TODO: check why I do not manage to do it in the first useEffect
  // useEffect(() => {
  //   if (deckCards.length === 81 && boardCards.length === 0) {
  //     dealNewBoard();
  //   }
  // }, [deckCards]);

  // TODO: check why I do not manage to do it in the first useEffect
  // useEffect(() => {
  //   if (deckCards.length === 81 && boardCards.length === 0) {
  //     dealNewBoard();
  //   }
  // }, [boardCards]);

  function startNewGame(): void {}

  function dealNewBoard(): void {}

  function removeCardFromBoard(cardsToRemove: Card[]): void {}

  function toggleCard(cardId: string): void {}

  function handleSetClick(): void {}

  // TODO: check if should use useMemo or useCallback instead
  const isCardActive = (cardId: string): boolean => {
    return activeCards.includes(cardId);
  };

  return (
    <>
      <div>Cards in deck: {deckCards.length}</div>

      <div className="board__actions">
        <button onClick={startNewGame}>New Game</button>
        <button onClick={handleSetClick}>Set</button>
      </div>

      <div className="board__container">
        {[...boardCards].map((card) => (
          <BoardCard
            toggleCard={toggleCard}
            key={card.id}
            card={card}
            isActive={isCardActive(card.id)}
          />
        ))}
      </div>
    </>
  );
};
