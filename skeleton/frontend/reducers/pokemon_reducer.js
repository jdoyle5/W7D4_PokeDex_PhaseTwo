import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      const pokemonDupped = merge({}, action.pokemon);
      newState = pokemonDupped;
      return newState;
    case RECEIVE_SINGLE_POKEMON:
      const newPokemon = action.pokemon.pokemon;
      const pokemonToMerge = { [newPokemon.id]: newPokemon };
      const singlePokemonDupped = merge({}, state, pokemonToMerge);
      newState = singlePokemonDupped;
      return newState;
    default:
      return state;
  }
};
