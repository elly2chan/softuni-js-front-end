function factorialDivision(numOne, numTwo) {
    
    const factorial = (n) => {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    };

    let numOneFactorial = factorial(numOne);
    let numTwoFactorial = factorial(numTwo);

    console.log((numOneFactorial / numTwoFactorial).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);