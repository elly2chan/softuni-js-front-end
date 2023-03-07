function checkIfNumberIsPerfect(number) {
    let divisorsSum = 0;

    for (let i = 0; i < number - 1; i++) {
        if (number % i === 0) {
            divisorsSum += i;
        }
    }

    if (divisorsSum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

checkIfNumberIsPerfect(6);
checkIfNumberIsPerfect(28);
checkIfNumberIsPerfect(1236498);