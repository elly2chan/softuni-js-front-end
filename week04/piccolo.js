function piccolo(records) {
    let parkingLot = [];

    records.forEach(carInfo => {
        let [direction, carNumber] = carInfo.split(', ');
        if (direction === 'IN' && !parkingLot.includes(carNumber)) {
            parkingLot.push(carNumber);
        } else if (direction === 'OUT' && parkingLot.includes(carNumber)) {
            index = parkingLot.indexOf(carNumber);
            parkingLot.splice(index, 1);
        }
    });
    
    if (parkingLot.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        sortedParkingLot = parkingLot.sort((a, b) => a.localeCompare(b));
        sortedParkingLot.forEach(car => {
            console.log(car);
        });
    }
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])