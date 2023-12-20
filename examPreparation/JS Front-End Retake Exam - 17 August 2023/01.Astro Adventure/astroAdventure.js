function spaceTeam(data) {
    index = Number(data[0]);

    astronauts = {};
    for (let i = 0; i < index; i++) {
        [astronaut, oxygenLevel, energyReserves] = data[i + 1].split(' ');
        astronauts[astronaut] = {}
        astronauts[astronaut].oxygenLevel = Number(oxygenLevel)
        astronauts[astronaut].energyReserves = Number(energyReserves)
    }

    index += 1;
    while (true) {
        command = data[index];
        if (command.includes('End')) {
            break;
        }
        
        [command, astronaut, amount] = data[index].split(' - ');
        amount = Number(amount);
        if (command === 'Explore') {
            if (astronauts[astronaut].energyReserves >= amount) {
                astronauts[astronaut].energyReserves -= amount;
                console.log(`${astronaut} has successfully explored a new area and now has ${astronauts[astronaut].energyReserves} energy!`);
            } else {
                console.log(`${astronaut} does not have enough energy to explore!`);
            }
        }
        if (command === 'Refuel') {
            if (astronauts[astronaut].energyReserves + amount > 200) {
                amount = 200 - astronauts[astronaut].energyReserves;
                astronauts[astronaut].energyReserves = 200;
            } else {
                astronauts[astronaut].energyReserves += amount;
            }
            console.log(`${astronaut} refueled their energy by ${amount}!`);
        }
        if (command === 'Breathe') {
            if (astronauts[astronaut].oxygenLevel + amount > 100) {
                amount = 100 - astronauts[astronaut].oxygenLevel;
                astronauts[astronaut].oxygenLevel = 100;
            } else {
                astronauts[astronaut].oxygenLevel += amount;
            }
            console.log(`${astronaut} took a breath and recovered ${amount} oxygen!`);
        }
        index++;
    }
    for ([astronaut, info] of Object.entries(astronauts)) {
        console.log(`Astronaut: ${astronaut}, Oxygen: ${info.oxygenLevel}, Energy: ${info.energyReserves}`);
    }
}