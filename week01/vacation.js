function vacationCalculator(peopleCount, typeOfPeople, dayOfWeek) {
    let vacationPrice = 0;

    switch (typeOfPeople) {
        case 'Students':
            if (dayOfWeek === 'Friday') {
                vacationPrice = peopleCount * 8.45;
            } else if (dayOfWeek === 'Saturday') {
                vacationPrice = peopleCount * 9.8;
            } else if (dayOfWeek === 'Sunday') {
                vacationPrice = peopleCount * 10.46;
            }

            if (peopleCount >= 30) {
                vacationPrice *= 0.85;
            }
        break;

        case 'Business':
            if (peopleCount >= 100) {
                peopleCount -= 10;
            }

            if (dayOfWeek === 'Friday') {
                vacationPrice = peopleCount * 10.9;
            } else if (dayOfWeek === 'Saturday') {
                vacationPrice = peopleCount * 15.6;
            } else if (dayOfWeek === 'Sunday') {
                vacationPrice = peopleCount * 16;
            }
        break;

        case 'Regular':
            if (dayOfWeek === 'Friday') {
                vacationPrice = peopleCount * 15;
            } else if (dayOfWeek === 'Saturday') {
                vacationPrice = peopleCount * 20;
            } else if (dayOfWeek === 'Sunday') {
                vacationPrice = peopleCount * 22.5;
            }

            if (peopleCount >= 10 && peopleCount <= 20) {
                vacationPrice *= 0.95;
            }
        break;
    }
    console.log(`Total price: ${vacationPrice.toFixed(2)}`);
}

vacationCalculator(30, 'Students', 'Sunday');
