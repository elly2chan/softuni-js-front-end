function loadingBar(number) {
    if (number === 100) {
        console.log(`100% Complete! \n[${'%'.repeat(10)}]`);
    } else {
        percentsCompleted = number / 10;
        percentsLeft = 10 - percentsCompleted;
        console.log(`${number}% [${'%'.repeat(percentsCompleted)}${'.'.repeat(percentsLeft)}]\nStill loading...`);
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);