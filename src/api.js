/*
  Generates a random int
  @param {Number} max - the max int
  @returns {Number} - a random int in the range [0..max)
*/
export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

/* selects a person from the people array.*/
export const selectPerson = (index, array) => {
  const name = array[index].firstName + ' ' + array[index].lastName
  const url = array[index].headshot.url
  return ({
    name,
    url
  })
}

//create board id using epoch time and random number
export const newId = () => (new Date()).getTime()+getRandomInt(100000)

/*
  @param max {Number} max value of the ints in the range [0..max) 
  @param size {Number} the number of distinct randoms ints you want
  @returns {Array} arry of distinct random ints 
*/
export const randomArray = (max, size) => {
  const randomNums = new Set()
  while (randomNums.size < size) {
    randomNums.add(Math.floor(Math.random() * max))
  }
  return Array.from(randomNums)
}

/*
  Creates a new game board
  @param {Array} people -  people to be used
  @returns {Object} - a game board in the form {id, people, winningIndex}
*/
export const newBoard = (people) => {
  const indexes = randomArray(5, people.length)
  const selectedPeople = indexes.map(index => selectPerson(index, people))
  return ({
    id: newId(),
    people: selectedPeople,
    winningIndex: getRandomInt(5)
  })
}