
function invokeTwice(cb)
{
  cb();
  cb();
}

const dog =
{
  age: 5,
  growOneYear: function()
  {
    this.age += 1;
  }
}

/*
 * As it turns out, invokeTwice() does indeed invoke growOneYear -- but it is invoked as a function rather than a method! Let's revisit the this grid from earlier:
 */

invokeTwice(dog.growOneYear);
console.log(dog.age);

/*
 * If a constructor function is called with the new operator, the value of this is set to the newly-created object. If a method is invoked on an object, this is set to that object itself. And if a function is simply invoked, this is set to the global object: window.
 */


// one way to overcome this is to use an anonymouse function to close over the dog object
invokeTwice(function() {
  dog.growOneYear();
})
console.log(dog);


// this is a common pattern
// that we can use a JS feature, bind
const myGrow = dog.growOneYear.bind(dog);
console.log(myGrow);
myGrow();
console.log(dog);


// bind() returns a new function with this bound to a specific object, 
// allowing us to call it as a regular function.


