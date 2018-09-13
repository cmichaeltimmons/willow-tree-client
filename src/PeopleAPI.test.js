import PeopleAPI from './PeopleAPI'

it('fetches people', async function () {
  const api = new PeopleAPI();
  const response = await api.fetchPeople()
  expect(api.people.length).toBeGreaterThan(22)
})

it('generates new games boards', async function () {
  const api = new PeopleAPI();
  await api.fetchPeople()
  console.log(api.newGame())
})