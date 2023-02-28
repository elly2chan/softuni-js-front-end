function spiceMustFlow (yield) {
    let spices = 0;
    let workingDays = 0;

    while (yield >= 100) {
        workingDays += 1;
        spices += (yield - 26);
        yield -= 10;
    }

    if (spices >= 10) {
        spices -= 26;
    } else
        spices = 0

    console.log(workingDays);
    console.log(spices);
}

spiceMustFlow(111);