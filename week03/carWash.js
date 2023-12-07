function carWash(commands) {
    let clean = 0;

    for (let command of commands) {
        let commandsResult = {
            'soap': 10,
            'water': clean * 0.2,
            'vacuum cleaner': clean * 0.25,
            'mud': clean * 0.1,
        }

        let result = commandsResult[command];

        if (command === 'mud') {
            clean -= result;
        } else {
            clean += result;
        }
    }
    console.log(`The car is ${clean.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
// carWash(['soap', 'soap']);