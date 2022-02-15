import React, { useEffect, useState } from 'react';
import './Board.scss';
import BoardCard from '../Card/BoardCard';
import { getNewCards } from '../../utils/cardsFactory';
import { randomCard } from '../../utils/randomCard';
import { Card } from '../../types/card';

export const Board = () => {
  const [activeCards, setActiveCards] = useState<any[]>([]);
  const [deckCards, setDeckCards] = useState<any[]>([]);
  const [boardCards, setBoardCards] = useState<Card[]>([]);

  useEffect(() => {
    const cards = getNewCards();
    setDeckCards(cards);
  }, []);

  useEffect(() => {
    if (deckCards.length) {
      dealNewBoard();
    }
  }, [deckCards]);

  function dealNewBoard(): void {
    const newBoard = Array(12)
      .fill(undefined)
      .reduce((cards) => {
        const newCard = randomCard(deckCards);

        // TODO: understand why it is acting as if it were async - should wait that card is removed before continuing
        removeCardFromDeck(newCard);

        return [...cards, newCard];
      }, []);

    setBoardCards(newBoard);
  }

  function removeCardFromDeck(cardToRemove: Card): void {
    setDeckCards((deckCards) => {
      return deckCards.filter((card) => card.id === cardToRemove);
    });
  }

  function toggleCard(cardId: string): void {
    const active = isCardActive(cardId);

    if (active) {
      setActiveCards((currentActiveCards) =>
        currentActiveCards.filter((id) => id !== cardId)
      );
    }

    if (!active && activeCards.length !== 3) {
      setActiveCards((currentActiveCards) => [...currentActiveCards, cardId]);
    }
  }

  const isCardActive = (cardId: string): boolean => {
    return activeCards.includes(cardId);
  };

  return (
    <div className='board__container'>
      {[...boardCards].map((card) => (
        <BoardCard
          toggleCard={toggleCard}
          key={card.id}
          card={card}
          isActive={isCardActive(card.id)}
        />
      ))}
    </div>
  );
};
