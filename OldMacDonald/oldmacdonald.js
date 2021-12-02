"use strict";
//in Zusammenarbeit mit Herbert
var oldmacdonald;
(function (oldmacdonald) {
    class Animal {
        constructor(a, n, s, t, r, f) {
            this.animalType = a;
            this.name = n;
            this.sound = s;
            this.foodType = t;
            this.foodRation = r;
            this.foodAmount = f;
        }
        format() {
            return `The ${this.animalType} named ${this.name} sings ${this.sound}, and eats ${this.foodRation} Kg of ${this.foodType}. ${this.foodAmount} Kg of ${this.foodType} are left.`;
        }
    }
    window.addEventListener("load", handleLoad);
    const animal1 = new Animal("Dog", "Hadis", "wuff", "Meat", 3, 25);
    const animal2 = new Animal("Cat", "Apollon", "miau", "Tuna", 2, 14);
    const animal3 = new Animal("Cow", "Hera", "muh", "Gras", 20, 300);
    const animal4 = new Animal("Pig", "Ares", "oing", "Junk", 5, 70);
    const animal5 = new Animal("sheep", "Hermes", "meh", "Hay", 8, 270);
    function handleLoad() {
        dog();
    }
    function dog() {
        animal1.foodAmount = animal1.foodAmount - animal1.foodRation;
        document.body.innerHTML = animal1.format();
        setTimeout(cat, 5000);
    }
    function cat() {
        animal2.foodAmount = animal2.foodAmount - animal2.foodRation;
        document.body.innerHTML = animal2.format();
        setTimeout(cow, 5000);
    }
    function cow() {
        animal3.foodAmount = animal3.foodAmount - animal3.foodRation;
        document.body.innerHTML = animal3.format();
        setTimeout(pig, 5000);
    }
    function pig() {
        animal4.foodAmount = animal4.foodAmount - animal4.foodRation;
        document.body.innerHTML = animal4.format();
        setTimeout(sheep, 5000);
    }
    function sheep() {
        animal5.foodAmount = animal5.foodAmount - animal5.foodRation;
        document.body.innerHTML = animal5.format();
        setTimeout(dog, 5000);
    }
})(oldmacdonald || (oldmacdonald = {}));
//# sourceMappingURL=oldmacdonald.js.map