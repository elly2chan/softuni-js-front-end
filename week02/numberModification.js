function numberModification(number) {
    numberDigitsArray = number.toString().split('').map(Number);
    const digitsAverage = (digits) => digits.reduce((a, b) => a + b, 0) / digits.length;

    if (digitsAverage(numberDigitsArray) > 5) {
        console.log(number);
    } else {
        while (digitsAverage(numberDigitsArray) < 5) {
            numberDigitsArray.push(9);
        }
        console.log(numberDigitsArray.join(''));
    }
}

numberModification(101);
numberModification(5835);