function signCheck(num1, num2, num3) {
    let predicate = (num) => num < 0;
    let filterNegatives = [num1, num2, num3].filter(predicate);

    if (filterNegatives.length % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

signCheck(-5, 1, -15);