function isPerfect(num) {
    let divisorsSum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisorsSum += i;
        }
    }

    const checkEquality = (a, b) => a === b;

    if (checkEquality(num, divisorsSum)) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

isPerfect(1236498);