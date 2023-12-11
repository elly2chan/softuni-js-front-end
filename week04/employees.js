function employees(names) {
    let employeesData = {}

    for (let name of names) {
        employeesData[name] = name.length;
    }

    for ([key, value] of Object.entries(employeesData)) {
        console.log(`Name: ${key} -- Personal Number: ${value}`);
    }
}

employees(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
)