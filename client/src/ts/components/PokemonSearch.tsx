import React, { useState, useRef, useContext } from 'react';
import { searchPokemon } from '../http';
import { PokeContext, ActionType } from '../context';
import { AppContainer, MainContainer, SearchInput, SearchForm, SearchIcon, InfoText } from './styles';
import PokemonDescription from './PokemonDescription';

export default function PokemonSearch() {
  const { state: { pokemon }, dispatch } = useContext(PokeContext);
  const [ showEnter, setShowEnter ] = useState<boolean>(false);
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ error, setError ] = useState<string>(null);
  const searchRef = useRef<HTMLInputElement>();

  async function onSubmitSearchPokemon(e: Event): Promise<void> {
    e.preventDefault();

    try {
      setLoading(true);
      const value = await searchPokemon(searchRef.current.value);
      setLoading(false);

      const type = ActionType.ONPOKEMON;
      dispatch({ type, value });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function onChangeSetPokemon(e: Event): void {
    setShowEnter(!!searchRef.current.value);
    setError(null);
  }

  return (
    <AppContainer>
      <header>
        <h1>Pokapi</h1>
        <p>Shakespeare flavoured Pokemon search</p>
      </header>
      <MainContainer>
        <SearchForm onSubmit={onSubmitSearchPokemon} aria-label="form">
          <SearchInput ref={searchRef} onChange={onChangeSetPokemon} placeholder="Search for Pokemon by name..." defaultValue="" />
          <SearchIcon />
        </SearchForm>
        <InfoText>{showEnter ? "Press enter to find Pokemon" : ""}&nbsp;</InfoText>
        {loading ? <p>Loading Pokemon...</p> : null}
        {error ? <p>{error}</p> : null}
        {pokemon ? <PokemonDescription { ...pokemon } /> : null}
      </MainContainer>
    </AppContainer>
  );
}