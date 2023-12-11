function wordTracker(data) {
    wordsToSearch = data[0].split(" ");

    let wordsCount = {};
    wordsToSearch.forEach(word => {
        wordsCount[word] = 0
        for (let i = 1; i < data.length; i++) {
            if (word === data[i]) {
                wordsCount[word] += 1
            }
        };
    });
    
    let sorted = Object.entries(wordsCount).sort((a, b) => b[1] - a[1]);
    sorted.forEach(word => {
        console.log(`${word[0]} - ${word[1]}`);
    });
}

wordTracker(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have',
        'to', 'count', 'the', 'occurrences', 'of',
        'the', 'words', 'this', 'and', 'sentence',
        'because', 'this', 'is', 'your', 'task'
    ]
);