/*
Factory Functions

A factory function is a function that returns an object, but isn't itself a class 
or constructor. As such, we invoke a factory function as a normal function without 
using the new operator. Using a factory function, we can easily create object 
instances without the complexity of classes and constructors!
*/




function Basketball(color) {
  return (
  {
    color: color,
    numDots: 35000
  }
  );
}


const ball = Basketball('orange');
console.log(ball);



// functional mixin - receives an object as an argument and returns 
// new object with the combined properties of that new object

function CoffeeMaker(object)
{
    let needsRefill = false;

    return Object.assign(object, {
        pourAll: function() {
            needsRefill = true;
        },
        isEmpty: function() {
            return needsRefill;
        }
    })
}

const mycoffee = CoffeeMaker({"style":"red"});
console.log(mycoffee);
