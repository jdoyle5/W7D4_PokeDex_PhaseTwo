import React, { Component } from 'react';

class PokemonDetail extends Component {
  componentWillMount() {
    this.props.requestSinglePokemon(parseInt(this.props.match.params.id));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.props.requestSinglePokemon(newProps.match.params.id);
    }
  }

  render() {
    return (
      <div>
        <h1>
          Hello
        </h1>
      </div>
    );
  }
}

export default PokemonDetail;
