function cafeteria(data) {
    let baristasCount = Number(data[0]);
    data.shift();

    let baristas = {};
    for (let i = 0; i < baristasCount; i++) {
        let [barista, shift, coffeeTypes] = data[i].split(' ');
        if (!baristas.hasOwnProperty(barista)) {
            coffeeTypes = coffeeTypes.split(',');
            baristas[barista] = {shift: shift, coffeeTypes: coffeeTypes};
        }
    }

    for (let i = baristasCount; i < data.length; i++) {
        let input = data[i].split(' / ');
        let command = input[0];
        input.shift();

        if (command === 'Closed') {
            break;
        }

        if (command === 'Prepare') {
            let [barista, shift, coffeeType] = input;
            if (baristas[barista].shift === shift && baristas[barista].coffeeTypes.includes(coffeeType)) {
                console.log(`${barista} has prepared a ${coffeeType} for you!`);
            } else {
                console.log(`${barista} is not available to prepare a ${coffeeType}.`);
            }
        } else if (command === 'Change Shift') {
            let [barista, newShift] = input;
            baristas[barista].shift = newShift;
            console.log(`${barista} has updated his shift to: ${newShift}`);
        } else if (command === 'Learn') {
            let [barista, coffeeType] = input;
            if (baristas[barista].coffeeTypes.includes(coffeeType)) {
                console.log(`${barista} knows how to make ${coffeeType}.`);
            } else {
                baristas[barista].coffeeTypes.push(coffeeType);
                console.log(`${barista} has learned a new coffee type: ${coffeeType}.`);
            }
        }
    }
    for (let [barista, info] of Object.entries(baristas)) {
        console.log(`Barista: ${barista}, Shift: ${info.shift}, Drinks: ${info.coffeeTypes.join(', ')}`);
    }
}

cafeteria(
    [
        '3',
        'Alice day Espresso,Cappuccino',
        'Bob night Latte,Mocha',
        'Carol day Americano,Mocha',
        'Prepare / Alice / day / Espresso',
        'Change Shift / Bob / night',
        'Learn / Carol / Latte',
        'Learn / Bob / Latte',
        'Prepare / Bob / night / Latte',
        'Closed'
    ]
)