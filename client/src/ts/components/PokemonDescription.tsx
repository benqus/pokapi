import React, { SyntheticEvent, useContext } from 'react';
import { Favorite, FavoriteBorder } from '@styled-icons/material';
import { PokeContext, ActionType } from '../context';
import { PokemonCard, FavoriteButton } from './styles';
import { TranslatedProkemonProps } from '../http';

export default function PokemonDescription({
  pokemon: { id, name, flavor_text_entries },
  translation
}: TranslatedProkemonProps) {
  const { state: { favorites }, dispatch } = useContext(PokeContext);
  const isFavourite: boolean = favorites.indexOf(id) > -1;
  let error: string;
  let description: string[] = [];
  
  if (translation.success && translation.success.total >= 1) {
    description = translation.contents.translated.split(/\<br\>/gm);
  } else {
    error = "Couldn't translate descriptions, showing the originals";
    flavor_text_entries.forEach(({ flavor_text }) => description.push(flavor_text));
  }

  function onClickToggleFavouritePokemon(e: SyntheticEvent) {
    const type = (isFavourite ? ActionType.ONREMOVEFAVORITE : ActionType.ONADDFAVORITE);
    dispatch({ type, value: id });
  }

  return (
    <PokemonCard>
      <h3>{name}</h3>
      <aside className="favorite">
        <FavoriteButton onClick={onClickToggleFavouritePokemon}>
          {isFavourite
            ? <Favorite />
            : <FavoriteBorder />}
        </FavoriteButton>
      </aside>
      {error ? <p>{error}</p> : null}
      <section className="scrollable">
        {description.map((text: string, i: number) => <p key={i}>{text}</p>)}
      </section>
    </PokemonCard>
  );
}