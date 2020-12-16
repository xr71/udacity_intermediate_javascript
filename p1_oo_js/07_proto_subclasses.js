const bear = {
    claws: true,
    diet: 'carnivore'
}

function PolarBear (name)
{
    this.name = name;
    this.isCute = true;
}

PolarBear.prototype = bear;


const mybear = new PolarBear("benny");
console.log(mybear);
console.log(mybear.__proto__);


// GuineaPig class
function GuineaPig (name) {
  this.name = name;
  this.isCute = true;
}

const waffle = new GuineaPig('Waffle');
console.log(waffle);
console.log(waffle.__proto__);
// here, waffle __proto__ is automatically set to GuineaPig.prototype


// There's actually a way for us to set up the prototype of an object ourselves: 
// using Object.create(). And best of all, this approach lets us manage 
// inheritance without altering the prototype!

/*
Object.create() takes in a single object as an argument, and returns a 
new object with its __proto__ property set to what argument is 
passed into it. From that point, you simply set the returned object to be 
the prototype of the child object's constructor function. Let's check out an example!
*/
const mammal = {
    vertebrate: true,
    earBones: 3
}

const rabbit = Object.create(mammal);
console.log(rabbit);


// another more involved example
console.log();
const Animal = function(name)
{
    this.name = name;
} 

const Cat = function(name)
{
    Animal.call(this, name);
    this.lives = 9;
}

const mycat = new Cat("Tigger");
console.log(mycat);
console.log(mycat instanceof Cat);
console.log(mycat instanceof Animal);


/*
Inheritance in JavaScript is all about setting up the prototype chain. This allows 
us to subclass, that is, create a "child" object that inherits most or all 
of a "parent" object's properties and methods. We can then implement any of 
the child object's unique properties and methods separately, while still retaining 
data and functionality from its parent.
*/

/*
An object (instance) is secretly linked to its constructor function's prototype object 
through that instance's __proto__ property. You should never use the __proto__ property in 
any code you write. Using __proto__ in any code, or even inheriting just the prototype 
directly, leads to some unwanted side effects.

To efficiently manage inheritance in JavaScript, an effective approach is to avoid mutating the 
prototype completely. Object.create() allows us to do just that, taking in a 
parent object and returning a new object with its __proto__ property set to that parent object.
*/

