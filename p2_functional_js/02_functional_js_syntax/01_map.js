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

shipMates.map(data => {
  console.log(data[1], data[0]);
})


// name with even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"]
awayTeam.map((val, index) => {
  console.log(val, index%2==0 ? "event" : "odd");
})


// create nested array
const sci_fi_shows = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']
new_array = sci_fi_shows.map((val, index) => {
  return [val, index]
})

console.log(new_array);

