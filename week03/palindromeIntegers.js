function isPalindrome(numArray) {
    for (let i = 0; i < numArray.length; i++) {
        currentNum = numArray[i].toString();
        reversedNum = currentNum.split('').reverse().join('');
        if (currentNum === reversedNum) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

isPalindrome([123, 323, 421, 121]);