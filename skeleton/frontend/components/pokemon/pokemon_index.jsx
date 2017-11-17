import React, { Component } from 'react';
import { PokemonIndexItem } from './pokemon_index_item';
import { Route, Link } from 'react-router-dom';
import { PokemonDetailContainer } from './pokemon_detail_container';

class PokemonIndex extends Component {
  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    return (
      <section>
        <ul>
          {pokemon.map(poke => (
            <PokemonIndexItem key={poke.id} poke={ poke }/>
          ))}
        </ul>
        <Route path='/pokemon/:id' component={PokemonDetailContainer} />
      </section>
    );
  }
}

export default PokemonIndex;
