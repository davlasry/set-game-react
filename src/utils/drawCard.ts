import { Deck } from '../types/deck';
import { Card } from '../types/card';

export function drawCard(deck: Deck): [Deck, Card | undefined] {
  const newDeck = [...deck];
  const card = newDeck.shift();

  return [newDeck, card];
}
