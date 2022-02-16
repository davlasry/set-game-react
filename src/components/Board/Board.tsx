import React, { useEffect, useReducer } from 'react';
import './Board.scss';
import BoardCard from '../Card/Card';
import { getNewCards } from '../../utils/cardsFactory';
import { Card } from '../../types/card';
import { checkIfSet } from '../../utils/checkIfSet';

type Props = {
  setCalledSet: Function;
  calledSet: boolean;
};

type State = {
  activeCards: Card[];
  deck: Card[];
  board: Card[];
};

type Action =
  | { type: 'startNewGame' }
  | { type: 'setClick' }
  | { type: 'dealNewBoard' }
  | { type: 'addCardsToBoard'; payload: { cards: Card[] } }
  | { type: 'validateSet'; payload: { card: Card } }
  | { type: 'invalidateSet' }
  | { type: 'toggleCard'; payload: { card: Card } };

const initialState: State = {
  activeCards: [],
  deck: [],
  board: [],
};

// TODO: check if good practice to take it out to component file
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'startNewGame': {
      const newCards = getNewCards();
      const newBoard = newCards.slice(0, 12);
      const newDeck = newCards.slice(12);
      return {
        ...state,
        board: newBoard,
        deck: newDeck,
        activeCards: [],
      };
    }
    case 'setClick': {
      const { activeCards, deck } = state || {};
      const isSet = checkIfSet(activeCards);
      console.log('isSet ---->', isSet, activeCards);

      if (isSet) {
        const cardsToAddToBoard = deck.slice(0, 3);
        const updatedDeckCards = deck.slice(3);

        let cardToAddIndex = 0;

        const board: Card[] = state.board.map((card) => {
          if (activeCards.map((c) => c.id).includes(card.id)) {
            return cardsToAddToBoard[cardToAddIndex++];
          }

          return card;
        });

        return {
          ...state,
          activeCards: [],
          board,
          deck: updatedDeckCards,
        };
      } else {
        return { ...state, activeCards: [] };
      }
    }
    case 'invalidateSet': {
      return { ...state, activeCards: [] };
    }
    case 'toggleCard': {
      // TODO: duplicate code - see toggleCard function in component
      const active = state.activeCards.some(
        (card) => card.id === action.payload.card.id
      );

      // TODO: check if destructuring is necessary
      const currentActiveCards = [...state.activeCards];

      if (active) {
        const newActiveCards = currentActiveCards.filter(
          (card) => card.id !== action.payload.card.id
        );
        return { ...state, activeCards: newActiveCards };
      }

      if (!active && currentActiveCards.length !== 3) {
        const newActiveCards = [...currentActiveCards, action.payload.card];
        return { ...state, activeCards: newActiveCards };
      }

      return { ...state };
    }
    default:
      throw new Error();
  }
}

export const Board = ({ setCalledSet }: Props) => {
  // const [activeCards, setActiveCards] = useState<any[]>([]);
  // const [deckCards, setDeckCards] = useState<any[]>([]);
  // const [boardCards, setBoardCards] = useState<Card[]>([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'startNewGame' });
  }, []);

  // TODO: check why I do not manage to do it in the first useEffect
  // useEffect(() => {
  //   if (deckCards.length === 81 && boardCards.length === 0) {
  //     // dealNewBoard();
  //     dispatch({ type: 'start' });
  //   }
  // }, [deckCards]);

  // // TODO: check why I do not manage to do it in the first useEffect
  // useEffect(() => {
  //   if (deckCards.length === 81 && boardCards.length === 0) {
  //     dealNewBoard();
  //   }
  // }, [boardCards]);

  function startNewGame(): void {
    const newCards = getNewCards();
    // setBoardCards([]);
    // setActiveCards([]);
    // setDeckCards(newCards);
  }

  function dealNewBoard(): void {
    // console.log('deal new board');
    // addCardsToBoard(12);
  }

  function addCardsToBoard(cardsNumber: number) {
    // setBoardCards((boardCards) => {
    //   setDeckCards(deckCards.slice(cardsNumber));
    //   return deckCards.slice(0, cardsNumber);
    // });
  }

  function removeCardFromBoard(cardsToRemove: Card[]): void {
    // setDeckCards((deckCards) => {
    //   return deckCards.filter(
    //     (card) => !cardsToRemove.map((card) => card.id).includes(card.id)
    //   );
    // });
  }

  function toggleCard(cardId: string): void {
    const active = isCardActive(cardId);

    // if (active) {
    //   setActiveCards((currentActiveCards) =>
    //     currentActiveCards.filter((id) => id !== cardId)
    //   );
    // }
    //
    // if (!active && activeCards.length !== 3) {
    //   setActiveCards((currentActiveCards) => [...currentActiveCards, cardId]);
    // }
  }

  function handleSetClick(): void {
    // const isSet = checkIfSet(activeCards);
    //
    // if (isSet) {
    //   removeCardFromBoard(activeCards);
    //   addCardsToBoard(3);
    // }
    setCalledSet(true);
    dispatch({ type: 'setClick' });
  }

  // TODO: check if should use useMemo or useCallback instead, may check this too many times
  const isCardActive = (cardId: string): boolean => {
    return state.activeCards.some((card) => card.id === cardId);
  };

  return (
    <>
      <div>Cards in deck: {state.deck.length}</div>

      <div className="board__actions">
        <button onClick={() => dispatch({ type: 'startNewGame' })}>
          New Game
        </button>
        <button
          onClick={handleSetClick}
          disabled={state.activeCards?.length < 3}
        >
          Set
        </button>
      </div>

      <div className="board__container">
        {[...state.board].map((card) => (
          <BoardCard
            toggleCard={() =>
              dispatch({ type: 'toggleCard', payload: { card } })
            }
            key={card.id}
            card={card}
            isActive={isCardActive(card.id)}
          />
        ))}
      </div>
    </>
  );
};
