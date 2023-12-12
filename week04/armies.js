function armies(data) {
    let output = {}

    for (record of data) {
        if (record.includes('arrives')) {
            leader = record.split(' arrives')[0]
            output[leader] = {}
            output[leader].armies = []
            output[leader].totalCount = 0
        }
        else if (record.includes('defeated')) {
            leader = record.replace(' defeated', '')
            delete output[leader]
        }
        else if (record.includes('+')) {
            [army, count] = record.split(' + ')
            for (key in output) {
                output[key].armies.forEach(record => {
                    if (record.name === army) {
                        count = Number(count)
                        record.count += count
                        output[key].totalCount += count
                    }
                })
            }
        } else {
            [leader, ...armyInfo] = record.split(': ')
            let [army, count] = armyInfo[0].split(', ')

            if (output.hasOwnProperty(leader)) {
                count = Number(count)
                output[leader].armies.push({ name: army, count: count })
                output[leader].totalCount += count
            }
        }
    }

    for (const [name, army] of Object.entries(output)
        .sort(([, a], [, b]) => b.totalCount - a.totalCount)) {
        console.log(`${name}: ${army.totalCount}`)

        for (const {name, count} of army.armies.sort((a, b) => b.count - a.count)) {
            console.log(`>>> ${name} - ${count}`)
        }
    }
}