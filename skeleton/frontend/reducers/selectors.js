import values from 'lodash/values';

// Difference between this and the todos setup...
export const selectAllPokemon = state => values(state.entities.pokemon);

export const selectSinglePokemon = (state, id) => {
  return state.entities.pokemon[id];
};

export const selectItems = state => (
  state.entities.items
);
