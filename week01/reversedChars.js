function reversedChars(char1, char2, char3) {
    let reversedResult = (char1 + char2 + char3).split('').reverse();
    console.log(reversedResult.join(' '));
}

reversedChars('a', 'b', 'c');