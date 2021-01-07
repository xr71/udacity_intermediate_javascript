greet = (greeting) => {
  return () => console.log(greeting);
}


greet('hello')();

isAfternoon = () => {
  let h = new Date().getHours();
  if (h>12 && h<17)
  {
    return 'Good Afternoon!';
  }

  return 'Good Morning!';
}

isAfternoon();
console.log(isAfternoon());

