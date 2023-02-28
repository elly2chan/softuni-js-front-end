function censoreWords(text, word){
    let censored  = text.replace(word, repeat(word));

    while (censored.includes(word)){
        censored=censored.replace(word, repeat(word));
    }

    function repeat(word) {
        let result='*';
        return result.repeat(word.length);
    }

    console.log(censored);
}

censoreWords("A small sentence with some word", "small");
censoreWords("Find the hidden word", "hidden");