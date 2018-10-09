const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const index = require('../../index/index')
const Cat = index.Cat
const Dog = index.Dog
const Snake = index.Snake

describe('Animal', function() {
   //each animal will take in name and age as an argument
   const spot = Dog('Spot', 9)
   const sassy = Cat('Sassy', 7)
   const hiss = Snake('Hiss', 3)
//#1st write a test for the things the animals have in common 
it('All animals should eat, sleep, and bite', function () {
  [spot, sassy, hiss].forEach(animal => {
    animal.eat().should.equal(animal.name + ' is eating.');
    animal.sleep().should.equal('..zzZZZ');
    animal.bite().should.equal(animal.name + ' bit you!');
   });
  });
  it('cats and dogs want to cuddle', function() {
      sassy.cuddle().should.equal('Sassy wants to cuddle!');
      spot.cuddle().should.equal('Spot wants to cuddle!');
  });
  it('snakes do not cuddle', function(){
      try{
        hiss.cuddle();
      } catch(err) {
        should.exist(err);
      }
  });
  it('Objects should not be an created using classical inheritance',   function() {
   let constString = spot.constructor.toString();
   constString.substring(0,5).should.not.equal('class');
  });
    
  it('Objects should not be created using prototypal inheritance', function() {
   let constString = spot.constructor.toString();
   let containsThisKeyword = /this/g.test(construct);
   expect(containsThisKeyword).to.equal(false);
  })
});
