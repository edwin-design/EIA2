"use strict";
var GardenSimulation;
(function (GardenSimulation) {
    class Field {
        constructor(_row, _collum) {
            this.colour = "tan";
            this.empty = true;
            this.row = _row;
            this.column = _collum;
        }
        isHit(_mX, _mY) {
            if (_mX - 100 < this.row * 100 && _mX - 100 > this.row * 100 - 100 && _mY - 100 < this.column * 100 && _mY - 100 > this.column * 100 - 100) {
                switch (GardenSimulation.Player.task) {
                    case GardenSimulation.TASK.PLANTSEED1:
                        if (this.empty == true && GardenSimulation.Player.money > 0) {
                            console.log("seed 1");
                            GardenSimulation.plantsAll.push(new GardenSimulation.Plant("seed1", "rgb(0, 250, 10)", this.row, this.column, 10, 5));
                            this.plant = GardenSimulation.plantsAll[GardenSimulation.plantsAll.length - 1];
                            this.empty = false;
                            GardenSimulation.Player.money--;
                        }
                        else {
                            console.log("cannot do this on a full field");
                        }
                        break;
                    case GardenSimulation.TASK.PLANTSEED2:
                        if (this.empty == true && GardenSimulation.Player.money > 0) {
                            console.log("seed 2");
                            GardenSimulation.plantsAll.push(new GardenSimulation.Plant("seed2", "rgb(0, 200, 0)", this.row, this.column, 20, 4));
                            this.plant = GardenSimulation.plantsAll[GardenSimulation.plantsAll.length - 1];
                            this.empty = false;
                            GardenSimulation.Player.money--;
                        }
                        else {
                            console.log("cannot do this on a full field");
                        }
                        break;
                    case GardenSimulation.TASK.PLANTSEED3:
                        if (this.empty == true && GardenSimulation.Player.money > 0) {
                            console.log("seed 3");
                            GardenSimulation.plantsAll.push(new GardenSimulation.Plant("seed3", "rgb(0, 150, 0)", this.row, this.column, 30, 3));
                            this.plant = GardenSimulation.plantsAll[GardenSimulation.plantsAll.length - 1];
                            this.empty = false;
                            GardenSimulation.Player.money--;
                        }
                        else {
                            console.log("cannot do this on a full field");
                        }
                        break;
                    case GardenSimulation.TASK.PLANTSEED4:
                        if (this.empty == true && GardenSimulation.Player.money > 0) {
                            console.log("seed 4");
                            GardenSimulation.plantsAll.push(new GardenSimulation.Plant("seed4", "rgb(00, 100, 00)", this.row, this.column, 25, 2));
                            this.plant = GardenSimulation.plantsAll[GardenSimulation.plantsAll.length - 1];
                            this.empty = false;
                            GardenSimulation.Player.money--;
                        }
                        else {
                            console.log("cannot do this on a full field");
                        }
                        break;
                    case GardenSimulation.TASK.PLANTSEED5:
                        if (this.empty == true && GardenSimulation.Player.money > 0) {
                            console.log("seed 5");
                            GardenSimulation.plantsAll.push(new GardenSimulation.Plant("seed5", "rgb(0, 50, 0)", this.row, this.column, 15, 1));
                            this.plant = GardenSimulation.plantsAll[GardenSimulation.plantsAll.length - 1];
                            this.empty = false;
                            GardenSimulation.Player.money--;
                        }
                        else {
                            console.log("cannot do this on a full field");
                        }
                        break;
                    case GardenSimulation.TASK.HARVEST:
                        if (this.empty == false) {
                            console.log("harvest");
                            GardenSimulation.plantsAll.splice(GardenSimulation.plantsAll.findIndex((e) => e == this.plant), 1);
                            this.empty = true;
                            this.plant.price = 3;
                            if (this.plant.age == this.plant.maxAge) {
                                GardenSimulation.Player.money = GardenSimulation.Player.money + this.plant.price;
                            }
                        }
                        else {
                            console.log("cannot do this on a clear field");
                        }
                        break;
                    case GardenSimulation.TASK.WATER:
                        if (this.empty == false) {
                            console.log("water");
                            this.plant.getsWater();
                        }
                        else {
                            console.log("cannot do this on a clear field");
                        }
                        break;
                    case GardenSimulation.TASK.FERTILIZE:
                        if (this.empty == false) {
                            console.log("fertilize");
                            this.plant.getsFertilizer();
                        }
                        else {
                            console.log("cannot do this on a clear field");
                        }
                        break;
                    case GardenSimulation.TASK.PESTICIDE:
                        if (this.empty == false) {
                            console.log("pesticide");
                            this.plant.killBug();
                        }
                        else {
                            console.log("cannot do this on a clear field");
                        }
                        break;
                }
                this.draw();
                for (let plant of GardenSimulation.plantsAll) {
                    plant.draw();
                }
            }
        }
        draw() {
            GardenSimulation.cr2.save();
            GardenSimulation.cr2.translate(this.row * 100, this.column * 100);
            GardenSimulation.cr2.fillStyle = this.colour;
            GardenSimulation.cr2.fillRect(5, 5, 95, 95);
            GardenSimulation.cr2.restore();
        }
    }
    GardenSimulation.Field = Field;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=field.js.map