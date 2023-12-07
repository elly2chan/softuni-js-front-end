function matrix(size) {
    return new Array(size).fill(new Array(size).fill(size))
    .forEach(row => console.log(row.join(' ')))
}