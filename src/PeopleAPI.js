import axios from 'axios'
class PeopleAPI {
  constructor() {
    this.people = []
    this.endpoint = 'https://wta-namegame.herokuapp.com/api/game'
    this.fetchPeople = this.fetchPeople.bind(this)
    this.newGame = this.newGame.bind(this)
  }
  
  fetchPeople() {
    return axios.get(this.endpoint).then(
      response => {
        this.people = response.data.people
      }
    )
  }

  newGame(){
    const randomNums = new Set()
    while(randomNums.size < 5){
      randomNums.add(Math.floor(Math.random() * this.people.length))
    }
    const selectedIndexes = Array.from(randomNums)
    const selectedPeople = selectedIndexes.map(newIndex => {
      const name = this.people[newIndex].firstName + ' ' + this.people[newIndex].lastName
      const url = this.people[newIndex].headshot.url
      return ({
        name,
        url
      })
    })
    return ({
      people: selectedPeople,
      winningIndex: Math.floor(Math.random() * 5) 
    }) 
  }
}

export default PeopleAPI