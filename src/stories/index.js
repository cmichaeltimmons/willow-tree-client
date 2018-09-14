import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import ImageCard from '../ImageCard'
import GameBoard from '../GameBoard'
import GameCard from '../GameCard'
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const imgSrc = '//images.ctfassets.net/3cttzl4i3k1h/5IE4PexFLyaa0CIQqsSc6k/2d931febbbbd1d5187c8631b2cff67f9/headshot_cassie_sharpe-150x150_2x.jpg'

const people = [
  {
    "id": "4NCJTL13UkK0qEIAAcg4IQ",
    "firstName": "Joel",
    "lastName": "Garrett",
    "headshot": {
      "url": "\/\/images.ctfassets.net\/3cttzl4i3k1h\/4Mv2CONANym46UwuuCIgK\/cbeb43c93a843a43c07b1de9954795e2\/headshot_joel_garrett.jpg",
      "height": 340,
      "width": 340
    }
  },
  {
    "firstName": "Jeff",
    "lastName": "Ward",
    "headshot": {
      "url": "\/\/images.ctfassets.net\/3cttzl4i3k1h\/3BdQSQcuMgcs00qYoOuYSY\/f0858540116928dc5fd0b2e84def8e19\/headshot_jeff_ward.jpg",
      "height": 340,
      "width": 340
    }
  },
  {
    "id": "56zuFgdeoMqAOuIKe0M4AU",
    "firstName": "Ashley",
    "lastName": "Joost",
    "headshot": {
      "url": "\/\/images.ctfassets.net\/3cttzl4i3k1h\/ezBlWGiV9ucqAsiOo0Iy2\/01a8ed75dd4a508b45defea73fef6e80\/headshot_ashley_joost.jpg",
      "height": 340,
      "width": 340
    }
  },
  {
    "firstName": "Ben",
    "lastName": "Frye",
    "headshot": {
      "url": "\/\/images.ctfassets.net\/3cttzl4i3k1h\/3SQLIq0Y36oYyaiwCSwOY8\/a65ae6620c8041b2773c1915156261d7\/headshot_ben_frye.jpg",
      "height": 340,
      "width": 340
    }
  },
  {
    "id": "2dMXmpIHPicQW6SW60qeKs",
    "firstName": "Christy",
    "lastName": "Phillips",
    "headshot": {
      "url": "\/\/images.ctfassets.net\/3cttzl4i3k1h\/64IBagkE0gga82G2W6cWsm\/95b43c4a0c549dc33a80f23d4382c4f4\/christy.png",
      "height": 664,
      "width": 664
    }
  }
]

const board = {
  people: [
    {
      name: 'Ben Frye',
      url: '//images.ctfassets.net/3cttzl4i3k1h/3SQLIq0Y36oYyaiwCSwOY8/a65ae6620c8041b2773c1915156261d7/headshot_ben_frye.jpg',
      width: '340px',
      height: '340px'
    },
    {
      name: 'Nate Wootten',
      url: '//images.ctfassets.net/3cttzl4i3k1h/1eTxMEgxdm0gIgCIYESEim/5ff9d399c505813f9bb4a1398fab093f/headshot_nate_wootten2.jpg',
      width: '340px',
      height: '340px'
    },
    {
      name: 'Christy Phillips',
      url: '//images.ctfassets.net/3cttzl4i3k1h/64IBagkE0gga82G2W6cWsm/95b43c4a0c549dc33a80f23d4382c4f4/christy.png',
      width: '340px',
      height: '340px'
    },
    {
      name: 'Erik LaManna',
      url: '//images.ctfassets.net/3cttzl4i3k1h/6JBw2VPAruCaKeuKYu6Oky/28d15786a026a1528a7a69d9c479fed3/headshot_erik_lamanna2.jpg',
      width: '340px',
      height: '340px'
    },
    {
      name: 'Emily Seibert',
      url: '//images.ctfassets.net/3cttzl4i3k1h/5d4qeJe7O0QOk0Ayq6U6W0/26c999d11f2f9c04b48ae65456b1acf7/headshot_emily_seibert.jpg',
      width: '340px',
      height: '340px'
    }
  ],
  winningIndex: 3
}
storiesOf('Image Card', module)
  .add('red shade', () => (
    <ImageCard
      rgba={[255,0,0,.5]}
      src={imgSrc}
      height={300}
      width={300}
      onClick={action('on click called')}
    />
  ))
  .add('green shade', () => (
    <ImageCard
      rgba={[0,200,0,.5]}
      src={imgSrc}
      height={300}
      width={300}
      onClick={action('on click called')}
    />
  ))
  .add('no shade', () => (
    <ImageCard
      rgba={[0,0,0,0]}
      src={imgSrc}
      height={300}
      width={300}
      onClick={action('on click called')}
    />
  ))
  .add('with label and blue', () => (
    <ImageCard
    rgba={[0,0,200,.5]}
    src={imgSrc}
    height={300}
    width={300}
    label={'Cassandra Sharpe'}
    onClick={action('on click called')}
  >
  </ImageCard>
  ))
  .add('small', () => (
    <ImageCard
    rgba={[0,0,200,.5]}
    src={imgSrc}
    height={100}
    width={100}
    label={'Cassandra Sharpe'}
    onClick={action('on click called')}
  >
  </ImageCard>
  ))
  .add('large', () => (
    <ImageCard
    rgba={[0,0,200,.5]}
    src={imgSrc}
    height={900}
    width={900}
    label={'Cassandra Sharpe'}
    onClick={action('on click called')}
  >
  </ImageCard>
  ))
  
  storiesOf('Game Card', module)
    .add('winner', ()=>(
      <GameCard 
        isWinner={true}
        label={'Cassandra Sharpe'}
        src={imgSrc}
        width={300}
        height={300}
      ></GameCard>
    ))
    .add('not winner', ()=>(
      <GameCard 
        isWinner={false}
        label={'Cassandra Sharpe'}
        src={imgSrc}
        width={300}
        height={300}
      ></GameCard>
    ))
    .add('small', ()=>(
      <GameCard 
        isWinner={false}
        label={'Cassandra Sharpe'}
        src={imgSrc}
        width={100}
        height={100}
      ></GameCard>
    ))
 storiesOf('Game Board', module)
   .add('with text', () => <GameBoard board={board}></GameBoard>)