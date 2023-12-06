function revealWords(words, text) {
    words = words.split(', ');

    for (let i = 0; i < words.length; i++) {
        text = text.replace('*'.repeat(words[i].length), words[i]);
    }

    return text;
}

revealWords('great',
'softuni is ***** place for learning new programming languages')