import './components/Board/Board.scss';
import { Card } from './types/card';
import { getNewCards } from './utils/cardsFactory';
import { checkIfSet } from './utils/checkIfSet';
import { getPossibleSets } from './utils/getPossibleSets';
import { Deck } from './types/deck';
import { drawCard } from './utils/drawCard';
import { Board } from './types/board';

type GameState = 'playing' | 'correct' | 'wrong';

type HistoryStatus = 'correct' | 'wrong';

type HistoryItem = {
  cards: Card[];
  status: HistoryStatus;
};

export type State = {
  activeCards: Card[];
  deck: Deck;
  board: Card[];
  userCalledSet: boolean;
  history: HistoryItem[];
  score: number;
  gameState: GameState;
  possibleSets: Card[][];
  gameCountdownRunning: boolean;
  answerCountdownRunning: boolean;
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
  gameCountdownRunning: true,
  answerCountdownRunning: true,
};

type Action =
  | { type: 'startNewGame' }
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

      const possibleSets = getPossibleSets(newBoard);

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

        // Check if set
        if (newActiveCards.length === 3) {
          const isSet = checkIfSet(newActiveCards);
          const { score } = state;

          // New History
          const newHistoryRow: HistoryItem = {
            cards: newActiveCards,
            status: isSet ? 'correct' : 'wrong',
          };

          // TODO: to be refactored - ask for help!
          let newDeck: Deck = state.deck;
          let newBoard: Board = state.board;

          if (isSet) {
            // New Board and Deck
            const activeCardsIds = newActiveCards.map((card) => card.id);

            newBoard = state.board.map((card) => {
              if (activeCardsIds.includes(card.id)) {
                const [updatedDeck, newCard] = drawCard(newDeck);
                newDeck = updatedDeck;
                return newCard;
              }

              return card;
            }) as Board;
          }

          const possibleSets = getPossibleSets(newBoard);

          debugger;

          return {
            ...state,
            activeCards: [],
            history: [...state.history, newHistoryRow],
            userCalledSet: false,
            score: isSet ? score + 1 : score - 1,
            board: newBoard,
            deck: newDeck,
            possibleSets,
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
        gameCountdownRunning: false,
      };
    case 'cancelSet':
      return {
        ...state,
        userCalledSet: false,
        activeCards: [],
        score: state.score - 1,
        gameCountdownRunning: true,
      };
    default:
      throw new Error();
  }
}
