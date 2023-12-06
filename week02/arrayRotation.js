function arrayRotation(array, rotationsCount) {
    let currentElement = 0;
    for (let i = 0; i < rotationsCount; i++) {
        currentElement = array.shift();
        array.push(currentElement);
    }
    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);