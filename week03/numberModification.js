function numberModification(num) {
    function toNumber(value) {
        return Number(value);
    }

    function calculateAvg(numsArray) {
        let digitsSum = 0;

        for (let digit of numsArray) {
            digitsSum += digit;
        }
        return digitsSum / numsArray.length;
    }
    
    digits = num.toString().split('');
    digits = digits.map(toNumber);

    let digitsAvg = 0;
    while (true) {
        digitsAvg = calculateAvg(digits);
        if (digitsAvg > 5) {
            break;
        }
        digits.push(9);
    }
    console.log(digits.join(''));
}

numberModification(5835);