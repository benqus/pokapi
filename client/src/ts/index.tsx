import React from 'react';
import { render } from 'react-dom';
import { PokeContextProvider } from './context';
import PokemonSearch from './components/PokemonSearch'

const app: Element = document.getElementById('app');

render(
  <PokeContextProvider>
    <PokemonSearch />
  </PokeContextProvider>,
  app
);