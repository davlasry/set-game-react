import { Feature } from '../types/feature';
import { FEATURES } from '../data/features';
import { Card } from '../types/card';

const TEST_A = [
  {
    shape: 'triangle',
    fill: 'full',
    color: 'purple',
    cardNumber: 3,
    id: 'triangle_full_green_1'
  },
  {
    shape: 'square',
    fill: 'lined',
    color: 'green',
    cardNumber: 1,
    id: 'square_lined_green_1'
  },
  {
    shape: 'circle',
    fill: 'empty',
    color: 'red',
    cardNumber: 2,
    id: 'circle_empty_green_1'
  }
] as unknown as Card[];

// TODO: write Unit Tests

export function checkIfSet(cards: Card[]): boolean {
  if (cards.length !== 3) {
    return false;
  }

  let isSet = true;

  for (let i = 0; i < FEATURES.length; i++) {
    if (!checkIfFeatureValid(cards, FEATURES[i])) {
      isSet = false;
      break;
    }
  }

  return isSet;
}

function checkIfFeatureValid(cards: Card[], feature: Feature): boolean {
  const cardsFeatures = cards.map((card) => card[feature]);

  let isAllValueSame = cardsFeatures[0] === cardsFeatures[1];
  let isAllValueDifferent = cardsFeatures[0] !== cardsFeatures[1];

  const currentFeatures = [cardsFeatures[0], cardsFeatures[1]];

  for (let i = 2; i < cardsFeatures.length; i++) {
    const cardFeature = cardsFeatures[i];

    if (
      isAllValueSame &&
      cardFeature !== currentFeatures[currentFeatures.length - 1]
    ) {
      isAllValueSame = false;
      break;
    }

    if (isAllValueDifferent && currentFeatures.includes(cardFeature)) {
      isAllValueDifferent = false;
      break;
    }

    currentFeatures.push(cardFeature);
  }

  return isAllValueSame || isAllValueDifferent;
}

export function testIsSet() {
  return checkIfSet(TEST_A);
}
