function phoneBookParser(data) {
    let phoneBook = {};

    for (let record of data) {
        let [name, phoneNumber] = record.split(' ');
        phoneBook[name] = phoneNumber;
    }

    for ([key, value] of Object.entries(phoneBook)) {
        console.log(`${key} -> ${value}`);
    }
}

phoneBookParser(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);