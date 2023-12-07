function addAndSubtract(...numbers) {
    [num1, num2, num3] = numbers

    const sum = (a, b) => a + b;
    const subtract = (numbersSum, num) => numbersSum - num;

    console.log(subtract(sum(num1, num2), num3));
}

addAndSubtract(1, 2, 3);