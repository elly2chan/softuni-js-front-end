function printNthElementFromArray (array, step) {
    let result = [];
    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]);
    }

    return result;
}

printNthElementFromArray(['5', '20', '31', '4', '20'], 2);
printNthElementFromArray(['dsa', 'asd', 'test', 'tset'], 2);
printNthElementFromArray(['1', '2', '3', '4', '5'], 6);