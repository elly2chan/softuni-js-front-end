function phoneBook(data) {
    let phoneBookData = {};
    for (let person of data) {
        let name = person.split(' ')[0];
        let phone = person.split(' ')[1];

        phoneBookData[name] = phone;
    }

    for (const [key, value] of Object.entries(phoneBookData)) {
        console.log(`${key} -> ${value}`);
    }
} 

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']);