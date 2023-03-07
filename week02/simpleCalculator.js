function simpleCalculator(num1, num2, operator) {
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    let operations = {
        'multiply': multiply,
        'divide': divide,
        'add': add,
        'subtract': subtract,
    }

    console.log(operations[operator](num1, num2));
}

simpleCalculator(5, 5, 'multiply');