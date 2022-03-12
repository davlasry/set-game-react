import { createContext } from 'react';
import { GameStore } from './gameStore';

export const gameStore = new GameStore();

export const GameStoreContext = createContext<GameStore>(gameStore);
