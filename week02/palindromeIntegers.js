function palindromeChecker (numbers) {
    for (let number of numbers) {
        let temp = Number(number.toString().split('').reverse().join(''));
        if (number === temp) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

palindromeChecker([123,323,421,121]);
palindromeChecker([32,2,232,1010]);