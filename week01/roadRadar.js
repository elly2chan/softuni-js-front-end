function solve(speed, area) {
    let limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }

    let speedDiff = 0;
    let currLimit = limits[area];

    if (speed <= currLimit) {
        console.log(`Driving ${speed} km/h in a ${currLimit} zone`)
    } else {
        speedDiff = Math.abs(currLimit - speed)
        let status = 'reckless driving';
        if (speedDiff <= 20) {
            status = 'speeding'
        } else if (speedDiff <= 40) {
            status = 'excessive speeding'
        }
        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${currLimit} - ${status}`)
    }
}