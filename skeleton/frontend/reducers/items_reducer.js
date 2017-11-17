import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      const itemsDupped = merge({}, action.pokemon.items);
      newState = itemsDupped;
      return newState;
    default:
      return state;
  }
};
