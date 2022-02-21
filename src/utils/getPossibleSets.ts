import { Card } from '../types/card';
import { checkIfSet } from './checkIfSet';
import { getCardsCombinations } from './getCardsCombinations';
import { Board } from '../types/board';

export function getPossibleSets(newBoard: Board) {
  const combinations = getCardsCombinations(newBoard);

  return combinations.reduce((validCombinations, combination) => {
    if (checkIfSet(combination)) {
      validCombinations.push(combination);
    }

    return validCombinations;
  }, [] as Card[][]);
}
