import axios, { AxiosResponse } from 'axios';

// TODO uncomment the following lines to mock out some endpoints for dev/test
// import MockAdapter from 'axios-mock-adapter';
// import { wormadam, butterfree } from '../mock/pokemon.json';
// const mock = new MockAdapter(axios);
// mock.onGet(`${process.env.POKEMON_API_HOST}/pokemon/wormadam`).reply(200, wormadam);
// mock.onGet(`${process.env.POKEMON_API_HOST}/pokemon/butterfree`).reply(200, butterfree);

export interface TranslatedProkemonProps {
  pokemon: {
    id: number;
    name: string;
    flavor_text_entries: Array<{
      flavor_text: string;
      language: {
        name: string;
        url: string;
      };
      version: {
        name: string;
        url: string;
      };
    }>;
  };
  translation: {
    success: {
      total: number;
    };
    contents: {
      translated: string;
      text: string;
      translation: string;
    };
  };
}

export async function searchPokemon(name: string): Promise<TranslatedProkemonProps> {
  const response: AxiosResponse<TranslatedProkemonProps> = await axios(`${process.env.POKEMON_API_HOST}/pokemon/${name}`);
  return response.data;
}