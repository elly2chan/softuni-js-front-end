function charactersInRange(char1, char2) {
    let start = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let end = Math.max(char1.charCodeAt(), char2.charCodeAt());

    let result = [];
    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
    }

    return result.join(' ');
}