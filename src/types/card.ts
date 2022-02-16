import { Shape } from './shape';
import { Shading } from './shading';
import { CardNumber } from './card-number';
import { CardColor } from './cardColor';

export interface Card {
  shape: Shape;
  color: CardColor;
  shading: Shading;
  cardNumber: CardNumber;
  id: string;
}
