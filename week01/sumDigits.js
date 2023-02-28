function sumDigits (num) {
    result = num
            .toString()
            .split('')
            .map(Number)
            .reduce((a, b) => a + b, 0);
    
    console.log(result);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
