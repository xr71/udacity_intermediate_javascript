// filter
// like map based on boolean condition, returns elements that eval to true

const words = ['tardis', 'grok', 'frak', 'blaster', 'klingon', 'shepherd']
const filteredWords = words.filter((w) => {
  return w.length >= 7
})

console.log(words);
console.log(filteredWords);

const hunters = [
    {
        name: 'Greedo',
        universe: 'Star Wars',
        status: 'active',
    },
    {
        name: 'Boba Fett',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Asajj Ventress',
        universe: 'Star Wars',
        status: 'unknown',
    },
    {
        name: 'Zam Wesell',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Jango Fett',
        universe: 'Star Wars',
        status: 'active',
    },
]

const result = hunters.filter(hunter => hunter.status === 'active');
console.log(result);

