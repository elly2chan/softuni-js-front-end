function circleArea (input) {
    let inputType = typeof(input);
    let result;

    if (inputType != "number") {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    } else {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
}