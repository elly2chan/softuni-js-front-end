function wordsUppercase (string) {
    const words = string.toUpperCase().match(/\b\w+\b/g) || [];
    console.log(words.join(', '));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');