function garage(cars) {
    let garages = {}
    
    for (record of cars) {
        record = record.split(' - ')
        garageNumber = record[0]

        if (!garages.hasOwnProperty(garageNumber)) {
            garages[garageNumber] = {}
            garages[garageNumber].cars = []
        }

        let car = {}
        record[1].split(', ').forEach(pair => {
            const [key, value] = pair.split(': ')
            car[key] = value
        })

        garages[garageNumber].cars.push(car)
    }

    for ([key, value] of Object.entries(garages)) {
        console.log(`Garage № ${key}`)
        for (car of value.cars) {
            const properties = []
            for ([key, value] of Object.entries(car)) {
                properties.push(`${key} - ${value}`)
            }
            console.log(`--- ${properties.join(', ')}`)
        }
    }
}

garage(
    ['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
)