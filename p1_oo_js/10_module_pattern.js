
function instantiateDeveloper() {
  return {
    name: 'Veronika',
    getName: function () {
      return this.name;
    }
  };
}

let developer = instantiateDeveloper();

console.log(developer);
console.log(developer.name);



// we can use closures to protect privacy of properties

let sodiumChloride = (function(){
  let chemicalFormula = 'NaCl';
  let molarMass = 58.44;

  return {
    getProperties: function(){
      console.log(`Formula: ${chemicalFormula}`);
      console.log(`Molar Mass: ${molarMass} g/mol`);
    }
  };
})();


console.log(sodiumChloride);
console.log(sodiumChloride.getProperties());


// iffe as private scoping
let diana = (function () {
  let secretIdentity = 'Diana Prince';

  return {
    introduce: function () {
      console.log(`Hi! I am ${secretIdentity}`);
    }
  };
})();

console.log();
console.log("logging diana iffe")
console.log(diana);
console.log(diana.secretIdentity);
diana.introduce();

// the module pattern requires the IFFE for implementation
// it can only create one version of the object
// to achieve privacy, it uses closure
