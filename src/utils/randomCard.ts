import { Card } from '../types/card';

export function randomCard(cards: Card[]): Card {
  return cards[Math.floor(Math.random() * cards.length)];
}
