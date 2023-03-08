function convertJsonToObject(data) {
    let person = JSON.parse(data);

    for (const [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);
    }
}

convertJsonToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertJsonToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');