import { Card } from '../types/card';

export function shuffleDeck(cards: Card[]): Card[] {
  return cards
    .map((card) => ({ card, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ card }) => card);
}
