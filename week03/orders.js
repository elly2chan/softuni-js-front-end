function orders(product, quantity) {
    let products = {
        'coffee': 1.5,
        'water': 1,
        'coke': 1.4,
        'snacks': 2
    }
    console.log((products[product] * quantity).toFixed(2));
}

orders('coffee', 2);