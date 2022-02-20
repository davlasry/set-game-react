import './components/Board/Board.scss';
import { Card } from './types/card';
import { getNewCards } from './utils/cardsFactory';
import { checkIfSet } from './utils/checkIfSet';
import { getCardsCombinations } from './utils/getCardsCombinations';
import { getPossibleSets } from './utils/getPossibleSets';

type GameState = 'playing' | 'correct' | 'wrong';

type HistoryStatus = 'correct' | 'wrong';

type HistoryItem = {
  cards: Card[];
  status: HistoryStatus;
};

export type State = {
  activeCards: Card[];
  deck: Card[];
  board: Card[];
  userCalledSet: boolean;
  history: HistoryItem[];
  score: number;
  gameState: GameState;
  possibleSets: Card[][];
};

export const initialState: State = {
  activeCards: [],
  deck: [],
  board: [],
  userCalledSet: false,
  history: [],
  score: 0,
  gameState: 'playing',
  possibleSets: [],
};

type Action =
  | { type: 'startNewGame' }
  | { type: 'setClick' }
  | { type: 'dealNewBoard' }
  | { type: 'addCardsToBoard'; payload: { cards: Card[] } }
  | { type: 'validateSet'; payload: { card: Card } }
  | { type: 'invalidateSet' }
  | { type: 'toggleCard'; payload: { card: Card } }
  | { type: 'callSet' }
  | { type: 'cancelSet' };

export function GameReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'startNewGame': {
      const newCards = getNewCards();
      const newBoard = newCards.slice(0, 12);
      const newDeck = newCards.slice(12);

      const combinations = getCardsCombinations(newBoard);
      console.log('combinations ---->', combinations);
      const possibleSets = getPossibleSets(combinations);
      console.log('possibleSets ---->', possibleSets);

      return {
        ...state,
        board: newBoard,
        deck: newDeck,
        activeCards: [],
        score: 0,
        history: [],
        possibleSets,
      };
    }
    case 'invalidateSet': {
      return {
        ...state,
        activeCards: [],
      };
    }
    case 'toggleCard': {
      const currentActiveCards = state.activeCards;

      // TODO: duplicate code - see toggleCard function in component
      const active = currentActiveCards.some(
        (card) => card.id === action.payload.card.id
      );

      if (active) {
        const newActiveCards = currentActiveCards.filter(
          (card) => card.id !== action.payload.card.id
        );
        return {
          ...state,
          activeCards: newActiveCards,
        };
      }

      if (!active && currentActiveCards.length < 3) {
        const newActiveCards = [...currentActiveCards, action.payload.card];

        if (newActiveCards.length === 3) {
          const isSet = checkIfSet(newActiveCards);
          const { score } = state;

          const newHistoryRow: HistoryItem = {
            cards: newActiveCards,
            status: isSet ? 'correct' : 'wrong',
          };

          return {
            ...state,
            activeCards: [],
            history: [...state.history, newHistoryRow],
            userCalledSet: false,
            score: isSet ? score + 1 : score - 1,
          };
        }

        return {
          ...state,
          activeCards: newActiveCards,
        };
      }

      return { ...state };
    }
    case 'callSet':
      return {
        ...state,
        userCalledSet: true,
      };
    case 'cancelSet':
      return {
        ...state,
        userCalledSet: false,
        activeCards: [],
        score: state.score - 1,
      };
    default:
      throw new Error();
  }
}
