const ships = [
    {
            name: 'Serenity',
            speed: '4.2G',
        },
    {
            name: 'Cylon Raider',
            speed: '7.5G',
        },
    {
            name: 'Swordfish II',
            speed: '50G',
        },
    {
            name: 'Tie Fighters',
            speed: '4100G',
        }
]

const result = ships.reduce((previous, current) => {
    const speed = parseInt(current.speed.slice(0, -1))
    const previousSpeed = parseInt(previous.speed.slice(0, -1))
    if (speed > previousSpeed) {
            return current
        }
    return previous
}, { name: "none", speed: "0G"})

console.log(result);

