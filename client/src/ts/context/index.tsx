import React, { createContext, useReducer, Dispatch } from 'react';
import { TranslatedProkemonProps } from '../http';

const FAVOURITES_LOCAL_STORAGE: string = 'pokapi.favorites';

export interface State {
  pokemon: TranslatedProkemonProps;
  favorites: Array<number>;
}

export interface Action {
  type: ActionType;
  value: any;
}

export enum ActionType {
  ONPOKEMON = 'on-pokemon',
  ONADDFAVORITE = 'on-add-favorite',
  ONREMOVEFAVORITE = 'on-remove-favorite',
}

const initialState: State = {
  pokemon: null,
  favorites: JSON.parse(localStorage.getItem(FAVOURITES_LOCAL_STORAGE) || '[]')
};

function updateStorage(favorites: Array<number>): void {
  localStorage.setItem(FAVOURITES_LOCAL_STORAGE, JSON.stringify(favorites));
}

function reducer(state: State, action: Action): State {
  let i: number;
  let favorites: Array<number>;
  switch(action.type) {
    case ActionType.ONPOKEMON:
      return {
        ...state,
        pokemon: action.value
      };
    case ActionType.ONADDFAVORITE:
      updateStorage(favorites = state.favorites.concat(action.value));
      return { ...state, favorites };
    case ActionType.ONREMOVEFAVORITE:
      i = state.favorites.indexOf(action.value);
      if (i >= 0) state.favorites.splice(i, 1);
      updateStorage(favorites = state.favorites.slice());
      return { ...state, favorites };
    default: return state;
  }
}

export const PokeContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null
});

export function PokeContextProvider({ children }) {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <PokeContext.Provider value={{ state, dispatch }}>
      {children}
    </PokeContext.Provider>
  )
}