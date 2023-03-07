function drawMatrix(num) {
    for (let i = 0; i < num; i++) {
        let matrix = [];
        for (let j = 0; j < num; j++) {
            matrix.push(num);
        }
        console.log(matrix.join(" "));
    }
}

drawMatrix(3);