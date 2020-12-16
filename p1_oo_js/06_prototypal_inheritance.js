
/*
 * To save memory and keep things DRY, we can add methods to the constructor function's 
 * prototype property. The prototype is just an object, and all objects created by a 
 * constructor function keep a reference to the prototype. Those objects can even use 
 * the prototype's properties as their own!
 */


// for example, all dogs can bark, so no need to create a new 
// bark function for each new object of dog

function Dog(name, weight, age)
{
  this.name = name;
  this.weight = weight;
  this.age = age;
}


let dog1 = new Dog('Java', 60, 2);

Dog.prototype.bark = function()
{
  console.log(`${this.name} says woof woof`);
}

dog1.bark();
console.log(Object.getPrototypeOf(dog1));


Dog.prototype = {
  isHungry: true,
  color: 'brown',
}


Dog.prototype.greet = function() {
  console.log('hello');
}

console.log(Object.getPrototypeOf(dog1));
console.log(dog1.color);


console.log("logging dog2");
let dog2 = new Dog('Python', 50, 3);
console.log(dog2);
console.log(Object.getPrototypeOf(dog2));
