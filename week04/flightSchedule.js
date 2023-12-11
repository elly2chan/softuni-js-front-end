function flightSchedule(data) {
    [flights, changedFlights, statusToCheck] = data;
    statusToCheck = statusToCheck[0];

    schedule = {};
    changedFlightsNumbers = [];
    for (flight of flights) {
        [flightNumber, ...destination] = flight.split(' ');
        destination = destination.join(' ');
        schedule[flightNumber] = {destination: destination, status: ''};
    }

    changedFlights.forEach(flight => {
        [flightNumber, newStatus] = flight.split(' ');
        if (schedule.hasOwnProperty(flightNumber)) {
            schedule[flightNumber].status = newStatus;
            changedFlightsNumbers.push(flightNumber);
        }
    });

    if (statusToCheck === 'Ready to fly') {
        for (flightNumber in schedule) {
            if (!changedFlightsNumbers.includes(flightNumber)) {
                console.log(`{ Destination: '${schedule[flightNumber].destination}', Status: 'Ready to fly' }`);
            }
        }
    } else {
        for (flightNumber in schedule) {
            if (schedule[flightNumber].status === statusToCheck) {
                console.log(`{ Destination: '${schedule[flightNumber].destination}', Status: '${statusToCheck}' }`);
            }
        }
    }
}

flightSchedule(
    [['WN269 Delaware',

    'FL2269 Oregon',
    
    'WN498 Las Vegas',
    
    'WN3145 Ohio',
    
    'WN612 Alabama',
    
    'WN4010 New York',
    
    'WN1173 California',
    
    'DL2120 Texas',
    
    'KL5744 Illinois',
    
    'WN678 Pennsylvania'],
    
    ['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
    ['Ready to fly']
    ]

    )