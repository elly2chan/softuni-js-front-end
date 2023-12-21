function solve(data) {
    let horses = data[0].split('|');
    data.shift();
    
    for (let row of data) {
        if (row === 'Finish') {
            break;
        }
        row = row.split(' ');
        let command = row[0];
        row.shift();
        
        if (command === 'Retake') {
            let [overtakingHorse, overtakenHorse] = row;
            let overtakingHorseIndex = horses.indexOf(overtakingHorse);
            let overtakenHorseIndex = horses.indexOf(overtakenHorse);
            if (overtakingHorseIndex < overtakenHorseIndex) {
                horses[overtakingHorseIndex] = overtakenHorse;
                horses[overtakenHorseIndex] = overtakingHorse;
                console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
            }
        } else if (command === 'Trouble') {
            let horse = row[0];
            let horseIndex = horses.indexOf(horse);

            if (horseIndex != 0) {
                temp = horses[horseIndex - 1];
                horses[horseIndex] = horses[horseIndex - 1];
                horses[horseIndex - 1] = horse;
                console.log(`Trouble for ${horse} - drops one position.`);
            }
        } else if (command === 'Rage') {
            let horse = row[0];
            let horseIndex = horses.indexOf(horse);

            if (horseIndex != horses.length) {
                if (horseIndex === horses.length - 2) {
                    horses.splice(horses.length - 2, 1);
                    horses.push(horse);
                } else {
                    horses.splice(horseIndex, 1);
                    horses.splice(horseIndex + 2, 0, horse);
                }
                console.log(`${horse} rages 2 positions ahead.`);
            }
        } else if (command === 'Miracle') {
            let lastHorse = horses[0];
            horses.shift();
            horses.push(lastHorse);
            console.log(`What a miracle - ${lastHorse} becomes first.`)
        }
    }
    console.log(horses.join('->'));
    console.log(`The winner is: ${horses[horses.length - 1]}`);
}

solve(['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])