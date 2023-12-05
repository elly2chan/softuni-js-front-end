function shoppingCalculator(product, grams, pricePerKilo) {
    let weight = grams / 1000;
    let totalPrice = pricePerKilo * weight;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${product}.`);
}

shoppingCalculator('orange', 2500, 1.80);