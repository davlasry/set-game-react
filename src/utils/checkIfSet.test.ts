import { Card } from '../types/card';
import { generateCardId } from './cardsFactory';
import { checkIfSet } from './checkIfSet';

const SAME_COLOR_DIFFERENT_SHADING_DIFFERENT_SHAPE_DIFFERENT_NUMBER: Card[] = [
  {
    color: 'green',
    shading: 'full',
    shape: 'oval',
    cardNumber: 1,
    id: generateCardId('oval', 'full', 'green', 1),
  },
  {
    color: 'green',
    shape: 'squiggle',
    shading: 'lined',
    cardNumber: 2,
    id: generateCardId('squiggle', 'lined', 'green', 2),
  },
  {
    color: 'green',
    shape: 'diamond',
    shading: 'empty',
    cardNumber: 3,
    id: generateCardId('diamond', 'empty', 'green', 3),
  },
];

const DIFFERENT_COLOR_DIFFERENT_SHADING_DIFFERENT_SHAPE_DIFFERENT_NUMBER: Card[] =
  [
    {
      color: 'red',
      shading: 'full',
      shape: 'oval',
      cardNumber: 1,
      id: generateCardId('oval', 'full', 'red', 1),
    },
    {
      color: 'green',
      shading: 'lined',
      shape: 'squiggle',
      cardNumber: 2,
      id: generateCardId('squiggle', 'lined', 'green', 2),
    },
    {
      color: 'purple',
      shading: 'empty',
      shape: 'diamond',
      cardNumber: 3,
      id: generateCardId('diamond', 'empty', 'purple', 3),
    },
  ];

const SAME_COLOR_SAME_SHADING_DIFFERENT_SHAPE_DIFFERENT_NUMBER: Card[] = [
  {
    color: 'green',
    shading: 'full',
    shape: 'oval',
    cardNumber: 1,
    id: generateCardId('oval', 'full', 'green', 1),
  },
  {
    color: 'green',
    shading: 'full',
    shape: 'squiggle',
    cardNumber: 2,
    id: generateCardId('squiggle', 'full', 'green', 2),
  },
  {
    color: 'green',
    shading: 'full',
    shape: 'diamond',
    cardNumber: 3,
    id: generateCardId('diamond', 'full', 'green', 3),
  },
];

const SAME_COLOR_SAME_SHADING_SAME_SHAPE_DIFFERENT_NUMBER: Card[] = [
  {
    color: 'green',
    shading: 'full',
    shape: 'oval',
    cardNumber: 1,
    id: generateCardId('oval', 'full', 'green', 1),
  },
  {
    color: 'green',
    shading: 'full',
    shape: 'oval',
    cardNumber: 2,
    id: generateCardId('oval', 'full', 'green', 2),
  },
  {
    color: 'green',
    shading: 'full',
    shape: 'oval',
    cardNumber: 3,
    id: generateCardId('oval', 'full', 'green', 3),
  },
];

const MIXED_COLOR_SAME_SHADING_SAME_SHAPE_DIFFERENT_NUMBER: Card[] = [
  {
    color: 'green',
    shading: 'full',
    shape: 'oval',
    cardNumber: 1,
    id: generateCardId('oval', 'full', 'green', 1),
  },
  {
    color: 'green',
    shading: 'full',
    shape: 'oval',
    cardNumber: 2,
    id: generateCardId('oval', 'full', 'green', 2),
  },
  {
    color: 'red',
    shading: 'full',
    shape: 'oval',
    cardNumber: 3,
    id: generateCardId('oval', 'full', 'red', 3),
  },
];

const MIXED_COLOR_MIXED_SHADING_SAME_SHAPE_DIFFERENT_NUMBER: Card[] = [
  {
    color: 'green',
    shading: 'full',
    shape: 'oval',
    cardNumber: 1,
    id: generateCardId('oval', 'full', 'green', 1),
  },
  {
    color: 'green',
    shading: 'lined',
    shape: 'oval',
    cardNumber: 2,
    id: generateCardId('oval', 'lined', 'green', 2),
  },
  {
    color: 'red',
    shading: 'full',
    shape: 'oval',
    cardNumber: 3,
    id: generateCardId('oval', 'full', 'red', 3),
  },
];

const MIXED_COLOR_MIXED_SHADING_MIXED_SHAPE_DIFFERENT_NUMBER: Card[] = [
  {
    color: 'green',
    shading: 'full',
    shape: 'oval',
    cardNumber: 1,
    id: generateCardId('oval', 'full', 'green', 1),
  },
  {
    color: 'green',
    shading: 'lined',
    shape: 'squiggle',
    cardNumber: 2,
    id: generateCardId('oval', 'full', 'green', 2),
  },
  {
    color: 'red',
    shading: 'full',
    shape: 'oval',
    cardNumber: 3,
    id: generateCardId('oval', 'full', 'red', 3),
  },
];

const MIXED_COLOR_MIXED_SHADING_MIXED_SHAPE_MIXED_NUMBER: Card[] = [
  {
    color: 'green',
    shading: 'full',
    shape: 'oval',
    cardNumber: 1,
    id: generateCardId('oval', 'full', 'green', 1),
  },
  {
    color: 'green',
    shading: 'lined',
    shape: 'squiggle',
    cardNumber: 2,
    id: generateCardId('oval', 'full', 'green', 2),
  },
  {
    color: 'red',
    shading: 'full',
    shape: 'oval',
    cardNumber: 2,
    id: generateCardId('oval', 'full', 'red', 2),
  },
];

describe('is a set', () => {
  test('1 feature is same and 3 features are different', () => {
    expect(
      checkIfSet(SAME_COLOR_DIFFERENT_SHADING_DIFFERENT_SHAPE_DIFFERENT_NUMBER)
    ).toBe(true);
  });

  test('2 features are same and 2 features are different', () => {
    expect(
      checkIfSet(SAME_COLOR_SAME_SHADING_DIFFERENT_SHAPE_DIFFERENT_NUMBER)
    ).toBe(true);
  });

  test('3 features are same and 1 feature is different', () => {
    expect(
      checkIfSet(SAME_COLOR_SAME_SHADING_SAME_SHAPE_DIFFERENT_NUMBER)
    ).toBe(true);
  });

  test('all features are different', () => {
    expect(
      checkIfSet(
        DIFFERENT_COLOR_DIFFERENT_SHADING_DIFFERENT_SHAPE_DIFFERENT_NUMBER
      )
    ).toBe(true);
  });
});

describe('is not a set', () => {
  test('1 feature is mixed and the rest is same', () => {
    expect(
      checkIfSet(MIXED_COLOR_SAME_SHADING_SAME_SHAPE_DIFFERENT_NUMBER)
    ).toBe(false);
  });

  test('2 features are mixed and the rest is same', () => {
    expect(
      checkIfSet(MIXED_COLOR_MIXED_SHADING_SAME_SHAPE_DIFFERENT_NUMBER)
    ).toBe(false);
  });

  test('3 features are mixed and the rest is same', () => {
    expect(
      checkIfSet(MIXED_COLOR_MIXED_SHADING_MIXED_SHAPE_DIFFERENT_NUMBER)
    ).toBe(false);
  });

  test('4 features are mixed', () => {
    expect(checkIfSet(MIXED_COLOR_MIXED_SHADING_MIXED_SHAPE_MIXED_NUMBER)).toBe(
      false
    );
  });
});
