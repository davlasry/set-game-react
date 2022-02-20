import { Card } from '../types/card';
import { checkIfSet } from './checkIfSet';

export function getPossibleSets(combinations: Card[][]) {
  return combinations.reduce((validCombinations, combination) => {
    if (checkIfSet(combination)) {
      validCombinations.push(combination);
    }

    return validCombinations;

    // return checkIfSet(combination)
    //   ? validCombinations.concat(combination)
    //   : validCombinations;
  }, [] as Card[][]);
}
