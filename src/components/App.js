import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import { Text } from 'essence-core';
import AppBar from 'essence-appbar';
import Icon from 'essence-icon';
import { Block } from 'essence-core';

import {orange, grey, blue, lightblue, lightergrey} from '../colors.js';
import Evolve from './Evolve.js';
import MyDivider from './Divider.js';
import RankedIndividuals from './RankedIndividuals.js';

import * as Actions       from '../actions/Actions';

@connect(state => ( {state: state.GeneticReducer } ))
export default class App extends Component {
  render() {
    const {state, dispatch} = this.props;
    return (
      <div>
      <AppBar classes={'e-text-white'} style={ {backgroundColor: orange} }>
        <Icon name={"notification-sync"} />
        <Text classes={'e-text-right e-text-lowercase e-display-1'}>
          {'Genetic Turtle-drawn LSystems'}
        </Text>
      </AppBar>

        <Evolve
         {...bindActionCreators(Actions, dispatch)}
         state={state} />
        <MyDivider
         {...bindActionCreators(Actions, dispatch)}
         state={state} />
        <RankedIndividuals
         {...bindActionCreators(Actions, dispatch)}
         last-individual={state.get('lastEvaluatedIndividual')}
         ranked-individuals={state.get('rankedIndividuals')} />

      </div>
    );
  }
}
