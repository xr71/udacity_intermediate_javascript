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

