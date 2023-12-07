function addresses(data) {
    let addressBook = {};

    for (row of data) {
        let [name, address] = row.split(':');
        addressBook[name] = address;
    }
    
    let sortedAddressBook = Object.keys(addressBook)
    .sort()
    .reduce((acc, key) => ({
        ...acc, [key]: addressBook[key]
    }), {});

    for ([key, value] of Object.entries(sortedAddressBook)) {
        console.log(`${key} -> ${value}`);
    }
}

addresses(
    ['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)