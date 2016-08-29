import React, { Component } from 'react';
import { Block } from 'essence-core';
import { Divider } from 'essence-core';

import {orange, grey, blue, lightblue, lightergrey} from '../colors.js';

export default class MyDivider extends Component {
  render() {
    return (
      <Block classes={ 'e-row e-h-center e-v-center' }>
        <Divider classes={ 'thick long e-h-center e-v-center' } style={ {backgroundColor: blue} }/>
      </Block>
    );
  }
}
