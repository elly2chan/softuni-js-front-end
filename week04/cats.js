function catObjects(cats) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let cat of cats) {
        let [name, age] = cat.split(' ');
        let catObj = new Cat(name, age);
        catObj.meow();
    }
}

catObjects(['Mellow 2', 'Tom 5', 'Candy 1']);