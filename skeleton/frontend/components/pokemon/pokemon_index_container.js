import { connect } from 'react-redux';
import { requestAllPokemon, requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';


const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon()),
  requestSinglePokemon: () => dispatch(requestSinglePokemon())
});

export const PokemonIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
