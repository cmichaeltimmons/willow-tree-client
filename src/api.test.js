import React from 'react';
import ReactDOM from 'react-dom';
import * as api from './api';

const mockPeople = [
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

describe('getRandomInt', ()=> {
  it('should return int', () => {
    const x = api.getRandomInt(3)
    expect(Number.isInteger(x)).toBe(true)
  })
  it('should return int less than max', ()=> {
    const max = 10
    for ( var i = 0; i < 100; i++){
      expect(api.getRandomInt(max) < max)
    }
  })
})

describe('randomArray', () =>{
  it('should return an array of length size', () =>{
    const array = api.randomArray(20,10)
    expect(array.length).toEqual(10)
  })
  it('should return distinct ints ', () => {
    const array = api.randomArray(5,5)
    let sum = 0
    array.forEach(val => { sum = sum + val})
    expect(sum).toEqual(0+1+2+3+4)
 })
})

describe('selectPerson', () => {
  it('should select correct person', ()=>{
    const obj = api.selectPerson(1, mockPeople)
    expect(obj.name).toEqual(mockPeople[1].firstName+' '+mockPeople[1].lastName)
    expect(obj.url).toEqual(mockPeople[1].headshot.url)
  })
})

describe('newId', () => {
  it('should return a int', () =>{
    expect(Number.isInteger(api.newId())).toBe(true)
  })
  it('should be distinct ints', () => {
    const ids = Array.from(Array(30), () => api.newId())
    const set = new Set()
    ids.forEach(id => set.add(id))
    expect(set.size).toEqual(30)
  })
})

describe('gameBoard', ()=>{
  it('should contain 5 people', () =>{
    const board = api.newBoard(mockPeople)
    expect(board.people.length).toBe(5)
    expect(board.people[0].name.length > 0).toBe(true)
  })
  it('should contain winningIndex', ()=>{
    const board = api.newBoard(mockPeople)
    expect(board.winningIndex > -1).toBe(true)
    expect(board.winningIndex < 6).toBe(true)
  })
  it('should contain id', ()=>{
    const board = api.newBoard(mockPeople)
    expect(Number.isInteger(board.id)).toBe(true)
  })
})