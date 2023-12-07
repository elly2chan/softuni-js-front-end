function oddAndEvenSum(num) {
    num = num.toString();

    let oddSum = 0;
    let evenSum = 0;

    for (let char of num) {
        char = Number(char);
        if (char % 2 === 0) {
            evenSum += char;
        } else {
            oddSum += char;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);