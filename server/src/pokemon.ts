import { Router, Request, Response } from 'express';
import axios, { AxiosResponse, AxiosError } from 'axios';

export interface PokemonSpecies {
  // ...
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
  // ...
}

export interface Translation {
  success: {
    total: number;
  };
  contents: {
    translated: string;
    text: string;
    translation: string;
  };
}

export function filterAndJoinTextEntries(entries: PokemonSpecies["flavor_text_entries"]): string {
  return entries
    .filter(({ language: { name } }) => name === 'en')
    .map(({ flavor_text }) => flavor_text)
    .join('<br>');
}

const pokemon: Router = Router();

pokemon.get('/:name', async (req: Request, res: Response) => {
  let error: boolean = false;
  let pokemon: PokemonSpecies|AxiosError;
  let translation: Translation|AxiosError;
  let entries: PokemonSpecies["flavor_text_entries"];

  try {
    const response: AxiosResponse<PokemonSpecies> = await axios(`https://pokeapi.co/api/v2/pokemon-species/${req.params.name}`);
    pokemon = response.data;
    entries = pokemon.flavor_text_entries;
  } catch (e) {
    console.error(e);
    error = true;
  }

  // Only the first sentence will be translated this way though
  const text: string = filterAndJoinTextEntries(entries);

  try {
    const response: AxiosResponse<Translation> = await axios.post('https://api.funtranslations.com/translate/shakespeare.json', { text });
    translation = response.data;
  } catch(e) {
    console.error(e);
    error = true;
    translation = e;
  }

  res.status(200).json({ error, pokemon, translation });
});

export default pokemon; 