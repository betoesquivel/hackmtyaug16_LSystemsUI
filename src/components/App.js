import React, { Component } from 'react';
import { Text } from 'essence-core';
import AppBar from 'essence-appbar';
import Icon from 'essence-icon';
import { Block } from 'essence-core';

import {orange, grey, blue, lightblue, lightergrey} from '../colors.js';
import Evolve from './Evolve.js';
import MyDivider from './Divider.js';
import RankedIndividuals from './RankedIndividuals.js';

export default class App extends Component {
  render() {
    return (
      <div>
      <AppBar classes={'e-text-white'} style={ {backgroundColor: orange} }>
        <Icon name={"notification-sync"} />
        <Text classes={'e-text-right e-text-lowercase e-display-1'}>
          {'Genetic Turtle-drawn LSystems'}
        </Text>
      </AppBar>

        <Evolve />
        <MyDivider />
        <RankedIndividuals />

      </div>
    );
  }
}
