function order (product, quantity) {
    switch (product) {
        case 'coffee': console.log((1.50 * quantity).toFixed(2)); break;
        case 'water': console.log((1 * quantity).toFixed(2)); break;
        case 'coke': console.log((1.40 * quantity).toFixed(2)); break;
        case 'snacks': console.log((2 * quantity).toFixed(2)); break;
    }
}

order('water', 5);
order('coffee', 2);