const Cat = (name, age) => {
  let state = {
    name,
    age,
    species: 'Cat'
  }
  return Object.assign(
    {},
    cuddler(state),
    defaultAnimal(state)
  )
}
const Dog = (name, age) => {
  let state = {
    name,
    age,
    species: 'Dog'
  }
  return Object.assign(
    {},
    cuddler(state),
    defaultAnimal(state)
  )
}
const Snake = (name, age) => {
  let state = {
    name,
    age,
    species: 'Snake'
  }
  return Object.assign(
    {},
    defaultAnimal(state)
  )
}
const cuddler = (state) => ({
  cuddle: () => state.name + ' wants to cuddle!'
})
const defaultAnimal = (state) => ({
  eat: () => state.name + ' is eating.',
  bite: () => state.name + ' bit you!',
  age: () => state.age.toString(),
  name: () => state.name,
  sleep: () => '..zzZZZ'
})
module.exports = {
  Cat,
  Dog,
  Snake
}
