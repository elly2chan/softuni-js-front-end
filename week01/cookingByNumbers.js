function cookingByNumbers(num, cmd1, cmd2, cmd3, cmd4, cmd5) {
    commands = [cmd1, cmd2, cmd3, cmd4, cmd5]

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'chop') {
            num /= 2;
        } else if (commands[i] === 'dice') {
            num = Math.sqrt(num);
        } else if (commands[i] === 'spice') {
            num += 1;
        } else if (commands[i] === 'bake') {
            num *= 3;
        } else if (commands[i] === 'fillet') {
            num *= 0.8;
        }
        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');