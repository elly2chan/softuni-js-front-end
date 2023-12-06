function reverse(n, array) {
    let result = [];

    for (let i=0; i<n; i++) {
        result.push(array[i]);
    }

    console.log(result.reverse().join(' '));
}

reverse(3, [10, 20, 30, 40, 50]);