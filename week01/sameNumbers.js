function sameNumbers(num) {
    let digitSum = 0;

    numToArray = num.toString().split('');
    for (let i = 0; i < numToArray.length; i++) {
        digitSum += Number(numToArray[i]);
    }

    console.log(new Set(numToArray).size === 1);
    console.log(digitSum);
}

sameNumbers(2222);