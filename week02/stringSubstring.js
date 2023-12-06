function stringSubstring(word, text) {
    if (text.toLowerCase().includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('python', 'JavaScript is the best programming language')
