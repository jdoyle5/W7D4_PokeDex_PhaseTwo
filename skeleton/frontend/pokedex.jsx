import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, receiveSinglePokemon, requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions';
import { fetchAllPokemon, fetchSinglePokemon } from './util/api_util';
import { configureStore } from './store/store';
import { selectAllPokemon } from './reducers/selectors.js';
import Root from './components/root.jsx';
import { HashRouter, Route } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.fetchSinglePokemon = fetchSinglePokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.receiveSinglePokemon = receiveSinglePokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  // window.selectAllPokemon = selectAllPokemon;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
