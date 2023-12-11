function catalogueProducts(data) {
    data = data.sort((a, b) => a.localeCompare(b));

    catalogue = {};
    data.forEach(product => {
        [product, price] = product.split(' : ');
        letter = product[0];
        if (!catalogue.hasOwnProperty(letter)) {
            catalogue[letter] = {};
        }
        catalogue[letter][product] = price;
    })
    
    for ([key, value] of Object.entries(catalogue)) {
        console.log(key);
        Object.entries(value).forEach((a) => {
            console.log(`  ${a[0]}: ${a[1]}`);
        })
    }
}

catalogueProducts(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);