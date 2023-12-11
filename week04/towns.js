function townsInfo(data) {
    let towns = {};

    for (let row of data) {
        let [town, latitude, longitude] = row.split(' | ');
        towns['town'] = town;
        towns['latitude'] = Number(latitude).toFixed(2);
        towns['longitude'] = Number(longitude).toFixed(2);

        console.log(towns);
    }
}

townsInfo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);