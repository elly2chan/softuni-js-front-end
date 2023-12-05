function spiceMustFlow(startingYield) {
    let operationDays = 0;
    let totalSpiceExtracted = 0;

    while (startingYield >= 100) {
        operationDays++;
        totalSpiceExtracted += startingYield;

        totalSpiceExtracted -= 26;
        startingYield -= 10;
    }

    if (totalSpiceExtracted >= 26) {
        totalSpiceExtracted -= 26;
    }

    console.log(operationDays);
    console.log(totalSpiceExtracted);
}

spiceMustFlow(450);