const captains = ['Picard', 'Adama', 'Reynolds', 'Beeblebrox']

captains.map(cap => console.log(`Captain ${cap}`));


// reverse this array 
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const reversed = start.map((c, i, a) => {
  return a[a.length - i - 1];
})

console.log(reversed);



// map the job to the name
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]]


