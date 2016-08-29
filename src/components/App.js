import React, { Component } from 'react';
import { Text } from 'essence-core';
import { Block } from 'essence-core';

import {orange, grey, blue, lightblue, lightergrey} from '../colors.js';
import Evolve from './Evolve.js';
import MyDivider from './Divider.js';
import RankedIndividuals from './RankedIndividuals.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Text type={'h1'} classes={'e-text-center'} typography={'e-display-4'} style={ {color: orange} }>
          {'Genetic Turtle-drawn LSystems go here'}
        </Text>

        <Evolve />
        <MyDivider />
        <RankedIndividuals />

      </div>
    );
  }
}
