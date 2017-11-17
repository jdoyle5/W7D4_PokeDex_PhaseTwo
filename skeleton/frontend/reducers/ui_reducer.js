import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      newState = { pokeDisplay: action.pokemon.pokemon.id };
      newState = merge({}, state, newState);
      return newState;
    default:
      return state;
  }
};
