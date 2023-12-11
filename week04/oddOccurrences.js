function oddOccurrences(text) {
    text = text.toLowerCase().split(' ');

    let occurrences = {};
    let words = [];
    text.forEach(word => {
        if (occurrences.hasOwnProperty(word)) {
            occurrences[word] += 1;
        } else {
            occurrences[word] = 1;
            words.push(word);
        }
    })

    result = '';
    for (let word of words) {
        if (occurrences[word] % 2 != 0) {
            result += word + ' ';
        }
    }
    console.log(result);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');