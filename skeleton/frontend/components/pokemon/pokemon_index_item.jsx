import React from 'react';
import { Route, Link } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

export const PokemonIndexItem = ({ poke }) => {
  const pokeId = `/pokemon/${poke.id}`;
  return (
    <li >
      <Link to={pokeId} >
        {poke.name}
        <img src={poke.image_url} />
      </Link>
    </li>
  );
};
