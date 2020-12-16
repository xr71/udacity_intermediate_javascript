let person = (function () {
  let privateAge = 0;
  let privateName = 'Andrew';

  function privateAgeOneYear() {
    privateAge += 1;
    console.log(`One year has passed! Current age is ${privateAge}`);
  }

  function displayName() {
    console.log(`Name: ${privateName}`);
  }

  function ageOneYear() {
    privateAgeOneYear();
  }

  return {
    name: displayName,
    age: ageOneYear
  };
})();

console.log(person);
console.log(person.displayName);
console.log(person.privateAgeOneYear);

console.log(person.name);
console.log(person.age);
person.name();
person.age();


/*
When writing your modules, there are a few key advantages of using the Revealing Module Pattern. For one, there is clarity at the end of the module (i.e., the return statement) as to which variables or methods may be accessed publicly. Modules may grow large, and this eases readability for other developers who read your code.

Along with clear intent of public or private data, the Revealing Module Pattern lends itself to consistent syntax as well. In contrast, the normal Module Pattern may contain variables and functions spread throughout the entire function body.

While you can't go wrong with either approach to create private properties in your code, be sure to take the time and choose which makes the most sense for your project!
*/

/*
The Revealing Module Pattern is a slight variation on the Module Pattern. IIFE's, local variables/functions, and a returned object literal with revealed data make up the structure and syntax of the Revealing Module Pattern. While it still maintains encapsulation of data, certain variables and functions are returned in an object literal.

In the next section, we'll take a look at object-oriented JavaScript in the real-world, especially in popular library code and frameworks.
*/
