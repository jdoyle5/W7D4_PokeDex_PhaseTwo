import { combineReducers } from 'redux';
import { itemsReducer } from './items_reducer';
import { pokemonReducer } from './pokemon_reducer';

export const entitiesReducer = combineReducers({
  items: itemsReducer,
  pokemon: pokemonReducer
});
