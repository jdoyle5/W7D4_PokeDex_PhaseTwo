import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon, selectSinglePokemon, selectItems } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemon: selectSinglePokemon(state),
  items: selectItems(state),
  pokeDisplay: state.ui.pokeDisplay
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export const PokemonDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
