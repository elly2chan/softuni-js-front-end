function gladiatorExpenses(lossesCount, helmetPrice, swordPrice, shieldPrices, armorPrice) {
    let totalExpenses = 0;
    let shieldBreaksCount = 0;

    for (let i = 1; i < lossesCount + 1; i++) {
        if (i % 2 === 0 && i != 0) {
            totalExpenses += helmetPrice;
        }
        if (i % 3 === 0 && i != 0) {
            totalExpenses += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0 && i != 0) {
            totalExpenses += shieldPrices;
            shieldBreaksCount += 1;
        }

        if (shieldBreaksCount === 2) {
            totalExpenses += armorPrice;
            shieldBreaksCount = 0;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
}

gladiatorExpenses(23, 12.50, 21.50, 40, 200);