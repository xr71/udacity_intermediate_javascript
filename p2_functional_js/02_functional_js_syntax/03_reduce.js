
// To do this, reduce only passes the function two arguments, the total so far - or accumulator,
// and the current item value. Another way that it differs from the first two array methods is
// that it does not necessarily return an array. In the case of the example above, reduce would return a single integer of the total cost.

const total = [120.00, 19.99, 3.50, 4.00].reduce((runningTotal, currentValue) => {
    return runningTotal + currentValue
    })

console.log(total);



// concat strings
const text = ['The ships', 'hung in the sky,', 'much the way', 'that bricks don`t']
const newText = text.reduce((a,b) => a + ' ' + b);

console.log(newText);



// the winning team
const scores = [
    {
            team: 'A',
            score: 20
        },
    {
            team: 'B',
            score: 17
        },
    {
            team: 'C',
            score: 23
        },
    {
            team: 'D',
            score: 13
        }
]
console.log(scores.reduce((a,b) => {
  if (b.score > a.score) {
    return b
  } else {
    return a
  }
}));



