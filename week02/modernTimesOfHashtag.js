function findSpecialWords(text) {
    let result = [];
    text = text.split(' ');

    for (let word of text) {
        let substring = '';
        if (word[0] === '#' && word.length > 1) {
            substring = word.substring(1, word.length);
            if (!/[^a-zA-Z]/.test(substring)) {
                result.push(substring);
            }
        }
    }
    for (let word of result) {
        console.log(word);
    }
}

findSpecialWords('Nowadays everyone uses # to tag a #special word in #socialMedia');