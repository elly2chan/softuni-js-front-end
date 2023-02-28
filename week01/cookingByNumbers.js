function cookingByNumbers (...input) {
    let num = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        let action = input[i];
        switch (action) {
            case ('chop'): console.log(num /= 2); break;
            case ('dice'): console.log(num **= 1/2); break;
            case ('spice'): console.log(num += 1); break;
            case('bake'): console.log(num *= 3); break;
            case('fillet'): console.log(num *= 0.8); break;
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');