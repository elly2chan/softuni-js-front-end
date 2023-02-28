function login (array) {
    let username = array[0];
    array.shift();
    let password = username.split("").reverse().join("");

    let attempts = 0;
    for (const attempt of array) {
        if (attempt === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            attempts++;
            if (attempts === 4) {
                console.log(`User ${username} blocked!`)
                break;
            } else {
                console.log("Incorrect password. Try again.")
            }
        }
    }
}

// login(['Acer','login','go','let me in','recA']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
// login(['momo', 'omom']);