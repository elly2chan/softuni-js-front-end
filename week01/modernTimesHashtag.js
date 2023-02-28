function modernTimesHashtag(text){
    let words = text.split(' ')

    function onlyLettersAndNumbers(str) {
        return Boolean(str.match(/#[A-Za-z]/));
    }

    for (const word of words){
        if (onlyLettersAndNumbers(word)){
            console.log(word.slice(1, word.length))
        }
    }
}

modernTimesHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesHashtag('The symbol # is known #variously in English-speaking #regions as the #number sign');