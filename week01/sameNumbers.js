function sameNumbers (num) {
    let firstDigit = num % 10;
    boolResult = true;
    let sumResult = 0;

    while (num) {
        sumResult += num % 10;

        if (num % 10 != firstDigit) {
            boolResult = false;
        }
        
        num = Math.floor(num / 10);
    }

    console.log(boolResult);
    console.log(sumResult);
}

sameNumbers(2222222);
sameNumbers(1234);