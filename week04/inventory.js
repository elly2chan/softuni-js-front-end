function heroesRegister(data) {
    let heroes = [];

    for (let row of data) {
        let [heroName, heroLevel, ...items] = row.split(' / ');
        let hero = {
            "Hero": heroName,
            "level": heroLevel,
            "items": items,
        }
        heroes.push(hero);
    }

    let sorted = Object.values(heroes).sort((a, b) => a.level - b.level);
    sorted.forEach(element => {
        items = element.items.join(', ');
        console.log(`Hero: ${element.Hero}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${items}`);
    });
}

heroesRegister(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);