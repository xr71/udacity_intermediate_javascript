/*
A mixin is a technique that takes the properties and methods from one object and copies 
them over to another object. In other words: a mixin is an technique that provides 
some useful functionality, but is not meant to be added to the prototype chain.
*/


// do it using Object.assign

let source = {source: 'the original'};
let target = {target: 'the new target'};

Object.assign(source, target);
console.log(source);
console.log(target);


// const duck = {
//   hasBill: true
// };
// const beaver = {
//   hasTail: true
// };
// const otter = {
//   hasFur: true,
//   feet: 'webbed'
// };

// const platypus = Object.assign({}, duck, beaver, otter);

// console.log();
// console.log("the platypus with multi mixins");
// console.log(platypus);



const duck = {
  hasBill: true
};
const beaver = {
  hasTail: true
};
const otter = {
  hasFur: true,
  feet: 'webbed'
};

const platypus = Object.assign(duck, beaver, otter);
console.log(platypus);
console.log(duck);
console.log(duck === platypus);

/*
A mixin supplies properties and/or methods that can be shared

We can leverage Object.assign() to "mix in" properties and 
methods from a number of objects into a composite object
*/


