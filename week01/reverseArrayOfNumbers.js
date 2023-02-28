function reverseArray (n, input) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(input[i]);
    }
    result = result.reverse();
    console.log(result.join(' '));
}

reverseArray(3, [1, 2, 3]);