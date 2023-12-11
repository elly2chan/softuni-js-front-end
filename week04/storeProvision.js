function storeProvision(currentStock, order) {
    let products = [...currentStock, ...order]

    let storage = {};
    for (let i = 0; i < products.length; i++) {
        if (i % 2 === 0) {
            if (!storage.hasOwnProperty(products[i])) {
                storage[products[i]] = Number(products[i + 1]);
            } else {
                storage[products[i]] += Number(products[i + 1]);
            }
        }
    }
    for ([key, value] of Object.entries(storage)) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvision(
    [
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
)