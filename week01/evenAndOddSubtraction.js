function sumArrayEvensAndOdds (input) {
    let evenSum = 0;
    let oddSum = 0;
    
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) {
            evenSum += input[i];
        } else {
            oddSum += input[i];
        }
    }
    console.log(evenSum - oddSum);
}

sumArrayEvensAndOdds([1, 2, 3, 4, 5, 6]);
sumArrayEvensAndOdds([3, 5, 7, 9]);
sumArrayEvensAndOdds([2, 4, 6, 8, 10]);