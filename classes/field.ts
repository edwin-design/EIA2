namespace GardenSimulation {
    export class Field {

        row: number;
        column: number;
        colour: string = "tan";
        empty: boolean = true;
        plant: Plant;

        constructor(_row: number, _collum: number) {
            this.row = _row;
            this.column = _collum;
        }

        isHit(_mX: number, _mY: number): void {
            if (_mX - 100 < this.row * 100 && _mX - 100 > this.row * 100 - 100 && _mY - 100 < this.column * 100 && _mY - 100 > this.column * 100 - 100) {
                switch (Player.task) {
                    case TASK.PLANTSEED1:
                        if (this.empty == true && Player.money > 0) {
                            console.log("seed 1");
                            plantsAll.push(new Plant("seed1", "rgb(00, 250, 00)", this.row, this.column, 10, 5));
                            this.plant = plantsAll[plantsAll.length - 1];
                            this.empty = false;
                            Player.money --;
                        }
                        else {
                            console.log("cannot do this on a full field");

                        }
                        break;
                    case TASK.PLANTSEED2:
                        if (this.empty == true && Player.money > 0) {
                            console.log("seed 2");
                            plantsAll.push(new Plant("seed2", "rgb(00, 200, 00)", this.row, this.column, 20, 4));
                            this.plant = plantsAll[plantsAll.length - 1];
                            this.empty = false;
                            Player.money --;
                        }
                        else {
                            console.log("cannot do this on a full field");

                        }
                        break;
                    case TASK.PLANTSEED3:
                        if (this.empty == true && Player.money > 0) {
                            console.log("seed 3");
                            plantsAll.push(new Plant("seed3", "rgb(00, 150, 00)", this.row, this.column, 30, 3));
                            this.plant = plantsAll[plantsAll.length - 1];
                            this.empty = false;
                            Player.money --;
                        }
                        else {
                            console.log("cannot do this on a full field");

                        }
                        break;
                    case TASK.PLANTSEED4:
                        if (this.empty == true && Player.money > 0) {
                            console.log("seed 4");
                            plantsAll.push(new Plant("seed4", "rgb(00, 100, 00)", this.row, this.column, 25, 2));
                            this.plant = plantsAll[plantsAll.length - 1];
                            this.empty = false;
                            Player.money --;
                        }
                        else {
                            console.log("cannot do this on a full field");

                        }
                        break;
                    case TASK.PLANTSEED5:
                        if (this.empty == true && Player.money > 0) {
                            console.log("seed 5");
                            plantsAll.push(new Plant("seed5", "rgb(00, 50, 00)", this.row, this.column, 15, 1));
                            this.plant = plantsAll[plantsAll.length - 1];
                            this.empty = false;
                            Player.money --;
                        }
                        else {
                            console.log("cannot do this on a full field");

                        }
                        break;
                    case TASK.HARVEST:
                        if (this.empty == false) {
                            console.log("harvest");
                            plantsAll.splice(plantsAll.findIndex((e) => e == this.plant), 1);
                            this.empty = true;
                            this.plant.price = 3; 
                            if (this.plant.age == this.plant.finalAge) {
                                Player.money = Player.money + this.plant.price;
                                
                            }
                        }
                        else {
                            console.log("cannot do this on a clear field");

                        }
                        break;
                    case TASK.WATER:
                        if (this.empty == false) {
                            console.log("water");
                            this.plant.getsWater();
                        }
                        else {
                            console.log("cannot do this on a clear field");

                        }
                        break;
                    case TASK.FERTILIZE:
                        if (this.empty == false) {
                            console.log("fertilize");
                            this.plant.getsFertilizer();
                        }
                        else {
                            console.log("cannot do this on a clear field");

                        }
                        break;
                    case TASK.PESTICIDE:
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
                for (let plant of plantsAll) {
                    plant.draw();
                }

            }
        }

        draw(): void {
            cr2.save();
            cr2.translate(this.row * 100, this.column * 100);
            cr2.fillStyle = this.colour;
            cr2.fillRect(5, 5, 95, 95);
            cr2.restore();
        }
    }
}