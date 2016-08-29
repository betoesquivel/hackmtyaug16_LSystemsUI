import React, { Component } from 'react';
import { Text } from 'essence-core';
import { Block } from 'essence-core';
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
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` },
  { 'imgSrc': `${CDN_URL}/${sampleID}.png` }
];

export default class App extends Component {
  render() {
    return (
      <div>
        <Text type={'h1'} classes={'e-text-center'} typography={'e-headline'} style={ {color: orange} }>
          {'Genetic Turtle-drawn LSystems go here'}
        </Text>
        <Block classes={ 'e-row e-h-center e-v-center' }>
          <Block classes={ 'brick brick-10' }>
            <Individuals
              individuals={ individuals } />
          </Block>
        </Block>
      </div>
    );
  }
}
