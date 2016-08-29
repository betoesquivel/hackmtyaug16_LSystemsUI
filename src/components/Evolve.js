import React, { Component } from 'react';
import { Text } from 'essence-core';
import { Block } from 'essence-core';
import { Card, CardHeader, CardContent, CardFooter } from 'essence-card';
import Btn from 'essence-button';

import {orange, grey, blue, lightblue, lightergrey} from '../colors.js';
import Individuals from './IndividualList.js';

const CDN_URL = 'http://d1q0qlolnapf2k.cloudfront.net';
const sampleID = 'testc';
const individuals = [ 
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
];

export default class Evolve extends Component {
  render() {
    return (
        <Block classes={ 'e-row e-h-center e-v-center' }
          >
          <Block classes={ 'brick brick-12' }>
            <Card>
              <CardHeader style={ {backgroundColor: grey}}>
                <Text type={'h1'} classes={'e-text-uppercase'} typography={'e-display-4'} style={ {color: 'white'} }>
                {'Evolve'}
                </Text>
                <Text type={'strong'} classes={'e-text-left e-text-lowercase'} typography={'e-display-1'} style={ {color: 'white'} }>
                {'Evolve a new LSystem by mutating 1 or crossing 2 of the following:'}
                </Text>
              </CardHeader>
              <CardContent style={ {backgroundColor: lightergrey}}>
                <Individuals
                classes={ 'e-h-center e-v-center' }
                individuals={ individuals.slice(0, 5) } />
              </CardContent>
              <CardFooter style={ {backgroundColor: grey}}>
                <Btn
                  label={'evolve'}
                  ripple={true}
                  type={'success'}
                  className={'raised'}
                  style={ {backgroundColor: orange} }
                />
              </CardFooter>
            </Card>
          </Block>
        </Block> 
    );
  }
}
