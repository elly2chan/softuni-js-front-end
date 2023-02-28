function calculator (num1, operator, num2) {
    let result = {
        '*': num1 * num2,
        '/': num1 / num2,
        '+': num1 + num2,
        '-': num1 - num2,
    }

    console.log(result[operator].toFixed(2))
}

calculator(5, '+', 10);

