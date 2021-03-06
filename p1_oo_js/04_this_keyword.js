
/*
 *
 * Functions, objects, and this are all interconnected. When invoking 
 * constructor functions with the new operator, a this variable is set 
 * to the newly-created object. When invoking a method on an object, 
 * this is set to that object itself. And when invoking a function 
 * in a browser environment, this is set to window, otherwise known as the global object.
 *
 * Along with all this, there is yet one more set of ways to invoke 
 * functions: with apply(), and with call(). Both methods share quite 
 * a few similarities, and they each allow us to specify how we want to 
 * set this. We'll take a look at each of them in detail next!
 *
 *
 */


const mockingbird =
{
  title: 'To Kill a Mocking Bird',
  describe: function()
  {
    console.log(`${this.title} is a good book!`);
  }
}

mockingbird.describe();

const pride =
{
  title: 'Pride and Prejudice'
}

mockingbird.describe.call(pride);


function sayHello(message) 
{
  console.log(`${message}, ${this.name}. You're looking well today.`);
}

name = "a global window name";
sayHello("hello");

sayHello.apply({name: "a local name"}, [ 'hello' ]);
sayHello.call({name: "a local name in call method"}, 'hello');


const andrew =
{
  name: "Andrew"  
}

function introduce(language)
{
  console.log(`I'm  ${this.name} and my favoriate language is ${language}.`);
}

introduce.call(andrew, 'java');

