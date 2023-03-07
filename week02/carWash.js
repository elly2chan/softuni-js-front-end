function carWash(commands) {
    let carCleanliness = 0

    for (let command of commands){
        if (command === 'soap'){
            carCleanliness += 10;
        } else if (command === 'water'){
            carCleanliness *= 1.20;
        } else if (command === 'vacuum cleaner'){
            carCleanliness *= 1.25;
        } else if (command === 'mud'){
            carCleanliness *= 0.90;
        }
    }
    console.log(`The car is ${carCleanliness.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);