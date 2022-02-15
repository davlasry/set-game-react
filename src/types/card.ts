import { Shape } from './shape';
import { types } from 'sass';
import { Fill } from './fill';
import Color = types.Color;

export interface Card {
  shape: Shape;
  color: Color;
  fill: Fill;
  id: string;
}
