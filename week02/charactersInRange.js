function charactersInRange (char1, char2) {
    if (char1 > char2){
        let temp = char1;
        char1 = char2;
        char2 = temp;
    }
    let output = [];

    for (let i = char1.charCodeAt(0) + 1; i < char2.charCodeAt(0); i ++){
        output.push(String.fromCharCode(i))
    }
    console.log(output.join(' '))
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');