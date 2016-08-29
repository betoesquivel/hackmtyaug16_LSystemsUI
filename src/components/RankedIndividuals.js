import React, { Component } from 'react';
import { Block } from 'essence-core';

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

export default class RankedIndividuals extends Component {
  render() {
    return (
      <Block classes={ 'e-row e-h-center e-v-center' }>
        <Block classes={ 'brick brick-10' }>
          <Individuals
            individuals={ individuals } />
        </Block>
      </Block>
    );
  }
}
