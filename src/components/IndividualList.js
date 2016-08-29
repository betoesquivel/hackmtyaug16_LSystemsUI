import React, { Component } from 'react';
import { Text } from 'essence-core';
import { Block } from 'essence-core';

import Individual from './Individual.js';

export default class IndividualList extends Component {
  render() {
    const p = this.props;
    return (
      <Block classes={'e-row'}>
      {
        p.individuals.map((individual, index) => {
          return (
            <Individual
              individual={individual}
              index={index}
              key={index} />
          );
        })
      }
      </Block>
    );
  }
}
