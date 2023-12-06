function nthArrayElement(array, step)  {
    let result = [array[0]];

    for (let i = 0; i < array.length; i += step) {
        if (i != 0) {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(nthArrayElement(['5', '20', '31', '4', '20'], 2));