function listOfNames(names) {
    names = names.sort((a, b) => a.localeCompare(b));
    let counter = 1;
    for (let name of names) {
        console.log(`${counter}.${name}`);
        counter++;
    }
}

listOfNames(['John', 'Bob', 'Christina', 'Ema']);