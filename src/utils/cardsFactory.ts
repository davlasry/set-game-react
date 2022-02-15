import { COLORS } from '../constants/colors';
import { SHAPES } from '../constants/shapes';
import { FILLS } from '../constants/fills';
import { Card } from '../types/card';
import { Color } from '../types/color';
import { Shape } from '../types/shape';
import { Fill } from '../types/fill';
import { shuffleDeck } from './shuffleDeck';

export function getNewCards() {
  const cards = Array(3)
    .fill(undefined)
    .map((_, deckIndex) => getSingleDeckCards(deckIndex))
    .flat();

  return shuffleDeck(cards);
}

function getSingleDeckCards(deckIndex: number) {
  return COLORS.reduce((allCombinations: Card[], color: Color) => {
    return [
      ...allCombinations,
      ...SHAPES.flatMap((shape: Shape) => {
        return FILLS.map((fill: Fill) => {
          return {
            shape,
            fill,
            color,
            id: `${shape}_${fill}_${color}_${deckIndex}`
          } as unknown as Card;
        });
      })
    ];
  }, []);
}
