"use strict";
var GardenSimulation;
(function (GardenSimulation) {
    class Plant {
        constructor(_type, _colour, _row, _column, _maxAge, _price) {
            this.age = 0;
            this.waterrequired = false;
            this.bugs = [];
            this.colour = _colour;
            this.type = _type;
            this.row = _row;
            this.column = _column;
            this.maxAge = _maxAge;
            this.price = _price;
            this.currentcolour = _colour;
        }
        grow() {
            if (this.age < this.maxAge && this.waterrequired == false && this.bugs.length == 0)
                this.age++;
        }
        loosesWater() {
            let randomWater = Math.round(Math.random() * 10);
            if (randomWater == 0) {
                this.waterrequired = true;
                if (this.bugs.length == 0) {
                    this.currentcolour = "rgb(0, 0, 0)";
                }
            }
        }
        getsBug() {
            let randomBug = Math.round(Math.random() * 20);
            if (randomBug == 0) {
                this.currentcolour = "rgb(255, 0, 0)";
                this.bugs.push(new GardenSimulation.Bug());
            }
        }
        killBug() {
            this.bugs = [];
            this.currentcolour = this.colour;
        }
        getsWater() {
            if (this.bugs.length == 0) {
                this.waterrequired = false;
                this.currentcolour = this.colour;
            }
        }
        getsFertilizer() {
            if (this.age < this.maxAge && this.waterrequired == false && this.bugs.length == 0) {
                this.age++;
            }
        }
        draw() {
            GardenSimulation.cr2.save();
            GardenSimulation.cr2.translate(this.row * 100, this.column * 100);
            GardenSimulation.cr2.fillStyle = this.currentcolour;
            GardenSimulation.cr2.fillRect(45 - 1 * this.age, 45 - 1 * this.age, 10 + 1 * this.age, 10 + 1 * this.age);
            GardenSimulation.cr2.restore();
        }
    }
    GardenSimulation.Plant = Plant;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=plant.js.map