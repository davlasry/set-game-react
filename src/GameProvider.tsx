import { createContext, useEffect, useReducer } from 'react';
import { GameReducer, initialState, State } from './GameReducer';

const GameStateContext = createContext<State>(initialState);
const GameDispatchContext = createContext<any>(null);

function GameProvider({ children }: any) {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'startNewGame' });
  }, []);

  return (
    <GameStateContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  );
}

export { GameProvider, GameStateContext, GameDispatchContext };
