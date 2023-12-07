function calculate(num1, num2, operator) {
    let operators = {
        'multiply': '*',
        'divide': '/',
        'add': '+',
        'subtract': '-'
    }
    console.log(eval(num1 + operators[operator] + num2));
}

calculate(5, 2, 'divide');