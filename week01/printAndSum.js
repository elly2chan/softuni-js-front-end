function numsRange(num1, num2) {
    let sum = 0;
    let numbers = [];

    for (let i = num1; i <= num2; i++) {
        numbers.push(i);
        sum += i;
    }

    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}

numsRange(5, 10);