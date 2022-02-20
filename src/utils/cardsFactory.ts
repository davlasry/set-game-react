import { COLORS } from '../data/colors';
import { SHAPES } from '../data/shapes';
import { SHADINGS } from '../data/shadings';
import { Card } from '../types/card';
import { CardColor } from '../types/cardColor';
import { Shape } from '../types/shape';
import { Shading } from '../types/shading';
import { shuffleDeck } from './shuffleDeck';
import { CARD_NUMBERS } from '../data/card-numbers';
import { CardNumber } from '../types/card-number';

export function getNewCards() {
  const cards = getSingleDeckCards();

  return shuffleDeck(cards);
}

// TODO: should include CARD_NUMBERS
function getSingleDeckCards() {
  return COLORS.reduce((allCombinations: Card[], color: CardColor) => {
    return [
      ...allCombinations,
      ...SHAPES.flatMap((shape: Shape) => {
        return SHADINGS.flatMap((shading: Shading) => {
          return CARD_NUMBERS.map((cardNumber: CardNumber) => {
            return {
              shape,
              shading,
              color,
              cardNumber,
              id: `${shape}_${shading}_${color}_${cardNumber}`,
            } as unknown as Card;
          });
        });
      }),
    ];
  }, []).flat();
}

export function generateCardId(
  shape: Shape,
  shading: Shading,
  color: CardColor,
  cardNumber: CardNumber
): string {
  return `${shape}_${shading}_${color}_${cardNumber}`;
}
