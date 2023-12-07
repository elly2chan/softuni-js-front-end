function factorialDivision(num1, num2) {
    function factorialize(num) {
        if (num === 0 || num === 1)
            return 1;
        
        let result = 1;

        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    console.log((factorialize(num1) / factorialize(num2)).toFixed(2));
}

factorialDivision(6, 1);