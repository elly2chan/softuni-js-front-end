function sortingNumbers(numbers) {
    numbers = numbers.sort(function(a, b) {
        return a - b;
    });
    let result = [];
    
    while (numbers.length > 0) {
        result.push(numbers.shift());
        result.push(numbers.pop());
    }
    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);