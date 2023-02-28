function stringSubstring (searchedWord, text) {
    searchedWord = searchedWord.toLowerCase();
    text = text.toLowerCase().split(' ');

    let output = `${searchedWord} not found!`

    for (const word of text) {
        if (word === searchedWord) {
            output = word;
            break;
        }    
    }

    console.log(output);
}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');