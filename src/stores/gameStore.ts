import { makeAutoObservable } from 'mobx';
import { Card } from '../types/card';
import { Deck } from '../types/deck';
import { getNewCards } from '../utils/cardsFactory';
import { getPossibleSets } from '../utils/getPossibleSets';
import { checkIfSet } from '../utils/checkIfSet';
import { Board } from '../types/board';
import { drawCard } from '../utils/drawCard';

export type GameState = 'playing' | 'correct' | 'wrong';

export type HistoryStatus = 'correct' | 'wrong';

export type HistoryItem = {
  cards: Card[];
  status: HistoryStatus;
};

export class GameStore {
  activeCards: Card[] = [];
  deck: Deck = [];
  board: Card[] = [];
  userCalledSet = false;
  history: HistoryItem[] = [];
  score = 0;
  gameState: GameState = 'playing';
  possibleSets: Card[][] = [];
  gameCountdownRunning = true;
  answerCountdownRunning = true;

  constructor() {
    makeAutoObservable(this);
  }

  startNewGame = () => {
    const newCards = getNewCards();
    const newBoard = newCards.slice(0, 12);
    const newDeck = newCards.slice(12);
    const newPossibleSets = getPossibleSets(newBoard);

    this.board = newBoard;
    this.deck = newDeck;
    this.activeCards = [];
    this.score = 0;
    this.history = [];
    this.possibleSets = newPossibleSets;
    this.gameCountdownRunning = true;
  };

  invalidSet = () => {
    this.activeCards = [];
  };

  toggleCard = (card: Card) => {
    // TODO: duplicate code - see toggleCard function in component
    const active = this.activeCards.some(
      (activeCard) => activeCard.id === card.id
    );

    if (active) {
      this.activeCards = this.activeCards.filter(
        (activeCard) => activeCard.id !== card.id
      );
    }

    if (!active && this.activeCards.length < 3) {
      const newActiveCards = [...this.activeCards, card];

      // Check if set
      if (newActiveCards.length === 3) {
        const isSet = checkIfSet(newActiveCards);

        // New History
        const newHistoryRow: HistoryItem = {
          cards: newActiveCards,
          status: isSet ? 'correct' : 'wrong',
        };

        // TODO: to be refactored - ask for help!
        let newDeck: Deck = this.deck;
        let newBoard: Board = this.board;

        // If is SET
        if (isSet) {
          // New Board and Deck
          const activeCardsIds = newActiveCards.map((card) => card.id);

          newBoard = this.board.map((card) => {
            if (activeCardsIds.includes(card.id)) {
              const [updatedDeck, newCard] = drawCard(newDeck);
              newDeck = updatedDeck;
              return newCard;
            }

            return card;
          }) as Board;
        }

        this.activeCards = [];
        this.history = [...this.history, newHistoryRow];
        this.userCalledSet = false;
        this.score = isSet ? this.score + 1 : this.score - 1;
        this.board = newBoard;
        this.deck = newDeck;
        this.possibleSets = getPossibleSets(newBoard);
        this.gameCountdownRunning = isSet;

        return;
      }

      this.activeCards = newActiveCards;
    }
  };

  cancelSet = () => {
    this.userCalledSet = false;
    this.activeCards = [];
    this.score = this.score - 1;
    this.gameCountdownRunning = true;
  };

  callSet = () => {
    this.userCalledSet = true;
    this.gameCountdownRunning = false;
  };

  timeIsOut() {
    this.gameCountdownRunning = false;
  }
}
