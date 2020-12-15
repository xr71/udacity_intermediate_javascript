
function developer(name)
{
  this.favoriteLanguage = "JavaScript";
  this.name = name;
}


let student1 = new developer("student");

let teacher = new developer("teacher");


console.log(student1);
console.log(teacher);
console.log(typeof teacher);
console.log(teacher instanceof developer);


