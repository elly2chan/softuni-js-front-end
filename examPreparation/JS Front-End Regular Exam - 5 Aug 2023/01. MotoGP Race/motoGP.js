function solve(data) {
    const MAX_FUEL_CAPACITY = 100;

    ridersCount = Number(data[0]);
    data.shift();

    riders = {};
    for (let i = 0; i < ridersCount; i++) {
        [rider, fuelCapacity, position] = data[i].split('|');
        fuelCapacity = Number(fuelCapacity);
        position = Number(position);

        if (!riders.hasOwnProperty(rider)) {
            riders[rider] = {};
        }

        riders[rider].fuelCapacity = fuelCapacity;
        riders[rider].position = position;
    }

    for (let i = ridersCount; i < data.length; i++) {
        if (data[i] === 'Finish') {
            break;
        } else {
            input = data[i].split(' - ');
            command = input[0];
            input.shift();
        }

        if (command === 'StopForFuel') {
            [rider, minimumFuel, changedPosition] = input;
            if (riders[rider].fuelCapacity < minimumFuel) {
                riders[rider].position = changedPosition;
                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
            } else {
                console.log(`${rider} does not need to stop for fuel!`);
            }
        } else if (command === 'Overtaking') {
            [riderOne, riderTwo] = input;
            if (riders[riderOne].position < riders[riderTwo].position) {
                temp = riders[riderOne].position;
                riders[riderOne].position = riders[riderTwo].position;
                riders[riderTwo].position = temp;
                console.log(`${riderOne} overtook ${riderTwo}!`);
            }
        } else if (command === 'EngineFail') {
            [rider, lapsLeft] = input;
            delete riders[rider];
            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        }
    }
    for ([rider, info] of Object.entries(riders)) {
        console.log(rider);
        console.log(`  Final position: ${info.position}`);
    }
}

solve(
    [
        "3",
        "Valentino Rossi|100|1",
        "Marc Marquez|90|2",
        "Jorge Lorenzo|80|3",
        "StopForFuel - Valentino Rossi - 50 - 1",
        "Overtaking - Marc Marquez - Jorge Lorenzo",
        "EngineFail - Marc Marquez - 10",
        "Finish"
    ]
)