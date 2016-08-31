import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider }                     from 'react-redux';
import * as reducers                    from './reducers';
import { fromJS }                       from 'immutable';

import App from './components/App';
import {defaultState} from './reducers/Reducer.js';
import promiseMiddleware from './lib/promise_middleware.js';

const reducer = combineReducers(reducers);

const store   = createStore(reducer, compose(
  applyMiddleware(promiseMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('app')
);
