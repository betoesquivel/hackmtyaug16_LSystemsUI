import React, { Component } from 'react';
import { Text } from 'essence-core';
import { Block } from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';
import Image from 'essence-image';

import {orange, grey, blue, lightblue, lightergrey} from '../colors.js';

const paintBackgroundColor = (color) => (
  {
    backgroundColor : color
  }
);

export default class Individual extends Component {
  render() {
    const p = this.props;
    return (
       <Block
         classes={'brick brick-2 e-h-center e-v-center'}
         >
         <Card
           >
           <CardHeader
             style={ paintBackgroundColor(lightblue) }
             >
             <Text type={'span'} classes={'e-text-center'} typography={'e-title'}>
               {`Individual ${p.index}`}
             </Text>
           </CardHeader>

           <CardContent>
             <Image
               height={'128px'}
               alt={`Individual ${p.index}`}
               src={p.individual.imgSrc} />
           </CardContent>

           <CardFooter
             style={ paintBackgroundColor(lightblue) }
             >
             CardFooter
           </CardFooter>
         </Card>
       </Block>
    );
  }
}
