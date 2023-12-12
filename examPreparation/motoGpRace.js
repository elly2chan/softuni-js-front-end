function bestRider(data) {
    index = Number(data[0]);
    
    riders = {};
    for (let i = 1; i < index + 1; i++) {
        [rider, fuelCapacity, position] = data[i].split('|');
        riders[rider] = {}
        riders[rider].fuelCapacity = Number(fuelCapacity);
        riders[rider].position = Number(position);
    }

    index++;
    while (true) {
        command = data[index];
        if (command.includes('Finish')) {
            break;
        }
        info = command.split(' - ');
        command = info[0];
        info.shift();
        if (command === 'StopForFuel') {
            [rider, minimumFuel, changedPosition] = info;
            if (riders[rider].fuelCapacity < minimumFuel) {
                riders[rider].position = changedPosition;
                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
            } else {
                console.log(`${rider} does not need to stop for fuel!`);
            }
        }
        if (command === 'Overtaking') {
            [riderOne, riderTwo] = info;
            if (riders[riderOne].position < riders[riderTwo].position) {
                temp = riders[riderTwo].position;
                riders[riderTwo].position = riders[riderOne].position;
                riders[riderOne].position = temp;
                console.log(`${riderOne} overtook ${riderTwo}!`);
            }
        }
        if (command === 'EngineFail') {
            [rider, lapsLeft] = info;
            delete riders[rider];
            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
        }
        index++;
    }
    for ([rider, info] of Object.entries(riders)) {
        console.log(rider);
        console.log(`  Final position: ${info.position}`);
    }
}

bestRider(
    [
        "4",
        "Valentino Rossi|100|1",
        "Marc Marquez|90|3",
        "Jorge Lorenzo|80|4",
        "Johann Zarco|80|2",
        "StopForFuel - Johann Zarco - 90 - 5",
        "Overtaking - Marc Marquez - Jorge Lorenzo",
        "EngineFail - Marc Marquez - 10",
        "Finish"
    ]
)