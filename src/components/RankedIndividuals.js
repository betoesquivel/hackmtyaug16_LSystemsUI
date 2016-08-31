import React, { Component } from 'react';
import { Block } from 'essence-core';
import { Text } from 'essence-core';
import InfiniteScroll from 'redux-infinite-scroll';

import Individuals from './IndividualList.js';

const CDN_URL = 'http://d1q0qlolnapf2k.cloudfront.net';
const sampleID = '001a281d-0070-4fa8-8175-b2cee94e3351';
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

  _loadMore() {
      const lastIndividual = this.props['lastIndividual'];
      this.props.getRankedIndividuals(lastIndividual);
  }

  _renderIndividuals() {
    const parsed = this.props['ranked-individuals'].map((i) => {
      return { 'imgSrc': `${CDN_URL}/${i.id}.png` };
    });
    return ( <Individuals
              individuals={ parsed } /> );
  }

  renderInfiniteIndividuals() {
    return (
        <InfiniteScroll
          items={this._renderIndividuals()}
          loadMore={this._loadMore.bind(this)}
        />
    )
  }
  render() {
    return (
      <Block classes={ 'e-row e-h-center e-v-center' }>
        <Text type={'h1'}
          classes={'e-text-uppercase'}
          typography={'e-display-4'} >
          { "Top Rated Designs" }
        </Text>
        <Block classes={ 'brick brick-10' }>
          { this.renderInfiniteIndividuals.bind(this)() }
        </Block>
      </Block>
    );
  }
}
