import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import PokemonSearch from './PokemonSearch';

import '@testing-library/jest-dom/extend-expect';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { wormadam, butterfree } from '../../mock/pokemon.json';
const mock = new MockAdapter(axios);
mock.onGet(`${process.env.POKEMON_API_HOST}/pokemon/wormadam`).reply(200, wormadam);
mock.onGet(`${process.env.POKEMON_API_HOST}/pokemon/butterfree`).reply(200, butterfree);

describe('PokemonSearch', () => {

  test('input renders', () => {
    const { getByPlaceholderText } = render(<PokemonSearch />);
    const input = getByPlaceholderText('Search for Pokemon by name...');  

    expect(input).toBeTruthy();
  });

  test('input ', async () => {
    const { getByRole, getByPlaceholderText } = render(<PokemonSearch />);
    const input = getByPlaceholderText('Search for Pokemon by name...');
    const form = getByRole('form');

    act(() => {
      fireEvent.change(input, { value: 'wormadam' });
      fireEvent.submit(form);
    });

    expect(form).toBeTruthy();
    expect(input).toBeTruthy();
  });

});