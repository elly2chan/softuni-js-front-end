function printSum (start, end) {
    let numbers = [];

    for (let i = start; i < end + 1; i++) {
        numbers.push(i);
    }

    let result = numbers.reduce((a, b) => a + b);
    console.log(numbers.join(' '));
    console.log(`Sum: ${result}`);
}

printSum(5, 10);
printSum(0, 26);
printSum(50, 60);