function bitcoinMining(goldPerDayArray) {
    let bitcoinPrice = 11949.16;
    let gramOfGoldPrice = 67.51;

    let totalGoldMined = 0;
    let bitcoinsBought = 0;
    let dayOfFirstPurchase = 0;

    for (let i = 0; i < goldPerDayArray.length; i++) {
        let currentDay = i + 1;
        let currentDayGold = goldPerDayArray[i] * gramOfGoldPrice;

        if ((i + 1) % 3 === 0 && i != 0) {
            currentDayGold *= 0.7;
        }

        totalGoldMined += currentDayGold;

        if (totalGoldMined >= bitcoinPrice && dayOfFirstPurchase === 0) {
            dayOfFirstPurchase = currentDay;
        }
    }

    bitcoinsBought = Math.floor(totalGoldMined / bitcoinPrice)
    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (dayOfFirstPurchase) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
    }
    console.log(`Left money: ${(totalGoldMined - (bitcoinsBought * bitcoinPrice)).toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);