function login(array) {
    let username = array.shift();
    let password = username.split('').reverse().join('');
    let attempts = 0;

    for (word of array) {
        attempts++;

        if (word === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (attempts < 4) {
            console.log('Incorrect password. Try again.');
        }

        if (attempts === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
    }
}

login(['Acer','login','go','let me in', 'test','recA']);