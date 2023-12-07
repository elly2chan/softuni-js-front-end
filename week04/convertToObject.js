function convertToObject(data) {
    data = JSON.parse(data);

    for ([key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');