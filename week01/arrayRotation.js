function arrayRotation (array, rotationsCount) {
    for (let i = 0; i < rotationsCount; i++) {
        num = array[0];
        array.splice(0, 1);
        array.push(num);
    }
    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);