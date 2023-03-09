function catsInfo(cats) {
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

catsInfo(['Mellow 2', 'Tom 5']);