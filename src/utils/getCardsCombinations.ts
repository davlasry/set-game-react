import { Card } from '../types/card';

export function getCardsCombinations(board: Card[]) {
  const result = board.flatMap((v, i) =>
    board
      .slice(i + 1)
      .flatMap((w, j) => board.slice(i + 1 + j + 1).map((u) => [v, w, u]))
  );

  const result2 = choose(board, 3);

  return result;
}

function choose(arr: any[], k: number, prefix: any[] = []): any[] {
  if (k === 0) return [prefix];
  return arr.flatMap((v, i) => choose(arr.slice(i + 1), k - 1, [...prefix, v]));
}
