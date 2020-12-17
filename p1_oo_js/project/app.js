fetch('dino.json')
    .then(response => response.json())
    .then(data => {

        let dinosArray = data.Dinos.map(i => {
            return new Dino(i.species, i.weight, i.height, i.diet, i.where, i.when, i.fact)
        });

        console.log(dinosArray);
    })

    // Create Dino Constructor

/*
a sample dino object schema
{
    "species": "Triceratops",
    "weight": 13000,
    "height": 114,
    "diet": "herbavor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "First discovered in 1889 by Othniel Charles Marsh"
},
*/

    // Create Dino Objects
const Dino = function(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = species.toLowerCase() + ".png";
}
    // Create Human Object
const Human = function(name, height, weight, diet) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
    this.image = './images/human.png';
}
    // Use IIFE to get human data from form
let human;
document.getElementById('btn').addEventListener('click', function(e) {
    const user = (function() {
        let name = document.getElementById('name').value;
        let feet = parseFloat(document.getElementById('feet').value);
        let inches = parseFloat(document.getElementById('inches').value);
        let height = (feet * 12) + inches;
        let weight = parseFloat(document.getElementById('weight').value);
        let diet = document.getElementById('diet').value;

        return {
            name, 
            height, 
            weight, 
            diet
        };
    })();

    human = new Human(user.name, user.height, user.weight, user.diet);
});

console.log(human);

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
