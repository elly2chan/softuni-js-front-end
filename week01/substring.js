function substring (string, startIndex, elementsCount) {
    let result;
    result = string.substring(startIndex, startIndex + elementsCount);
    console.log(result);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);