function addressBook(data) {
    let addresses = {};
    for (let person of data) {
        let name = person.split(':')[0];
        let address = person.split(':')[1];

        addresses[name] = address;
    }

    for (const [key, value] of Object.entries(addresses).sort()) {
        console.log(`${key} -> ${value}`);
    }
}

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);