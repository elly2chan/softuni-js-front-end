function sequences(array) {
    array = array.map(record => JSON.parse(record))
    array.forEach(record => record.sort((a, b) => b - a))

    let result = []
    for (let i = 0; i < array.length; i++) {
        let currentArray = array[i]
        
        contains = result.some(function (record) {
            return JSON.stringify(record) === JSON.stringify(currentArray)
        })

        if (!contains) {
            result.push(currentArray)
        }
    }
    result.sort((a, b) => a.length - b.length)
    result.forEach(x => console.log(`[${x.join(', ')}]`))
}

sequences(
    [
        "[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"
    ]
)

// sequences(
//     [
//         "[7.14, 7.180, 7.339, 80.099]",
//         "[7.339, 80.0990, 7.140000, 7.18]",
//         "[7.339, 7.180, 7.14, 80.099]"
//     ]
// )