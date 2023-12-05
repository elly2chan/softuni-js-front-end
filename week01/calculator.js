function calculator(num1, operator, num2) {
    let result = (num1.toString() + operator + num2.toString());
    console.log(eval(result).toFixed(2));
}

calculator(51, '+', 30);