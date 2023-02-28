function vacation (numberOfPeople, groupType, dayOfWeek) {
    let pricePerPerson = 0;

    switch (groupType) {
        case ('Students'):
            switch (dayOfWeek) {
                case ('Friday'): pricePerPerson=8.45; break; 
                case ('Saturday'): pricePerPerson=9.80; break; 
                case ('Sunday'): pricePerPerson=10.46; break; 
            } break;
        case ('Business'):
            switch(dayOfWeek){
                case ('Friday'): pricePerPerson = 10.90; break; 
                case ('Saturday'): pricePerPerson = 15.60; break; 
                case ('Sunday'): pricePerPerson = 16; break; 
            } break;
        case ('Regular'):
        switch(dayOfWeek){
            case ('Friday'): pricePerPerson = 15; break; 
            case ('Saturday'): pricePerPerson = 20; break; 
            case ('Sunday'): pricePerPerson = 22.50; break; 
        } break;
    }

    let totalPrice = numberOfPeople * pricePerPerson;

    if (groupType === 'Students' && numberOfPeople >= 30){
        totalPrice *= 0.85;
    } else if (groupType === 'Business' && numberOfPeople >= 100) {
        totalPrice -= 10 * pricePerPerson;
    } else if (groupType === 'Regular' && numberOfPeople >= 10 && numberOfPeople <= 20){
        totalPrice *= 0.95;
    }

    console.log("Total price: " + totalPrice.toFixed(2))
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");