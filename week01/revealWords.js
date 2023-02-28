function revealWords(words, template){
    words = words.split(', ')
    template = template.split(' ')

    for (let i = 0; i < template.length; i++){
        for (const word of words){
            if (template[i][0] === '*' && template[i].length === word.length){
                template[i] = word
            }
        }
    }
    console.log(template.join(' '))
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');