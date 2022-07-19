namespace GardenSimulation {


    export class Plant {

        type: string;
        colour: string;
        currentcolour: string;
        row: number;
        column: number;
        age: number = 0;
        maxAge: number;
        price: number;
        waterrequired: boolean = false;
        bugs: Bug[] = [];

        constructor(_type: string, _colour: string, _row: number, _column: number, _maxAge: number, _price: number) {
            this.colour = _colour;
            this.type = _type;
            this.row = _row;
            this.column = _column;
            this.maxAge = _maxAge;
            this.price = _price;
            this.currentcolour = _colour;
        }


        grow(): void {
            if (this.age < this.maxAge && this.waterrequired == false && this.bugs.length == 0)
                this.age++;
        }
        loosesWater(): void {
            let randomWater: number = Math.round(Math.random() * 10);
            if (randomWater == 0) {
                this.waterrequired = true;
                if (this.bugs.length == 0) {
                this.currentcolour = "rgb(0, 0, 0)";
                }
            }
        }

        getsBug(): void {
            let randomBug: number = Math.round(Math.random() * 20);
            if (randomBug == 0) {
                this.currentcolour = "rgb(255, 0, 0)";
                this.bugs.push(new Bug());
            }
        }

        killBug(): void {
            this.bugs = [];
            this.currentcolour = this.colour;
        }

        getsWater(): void {
            if (this.bugs.length == 0) {
            this.waterrequired = false;
            this.currentcolour = this.colour;
            }
        }
        getsFertilizer(): void {
            if (this.age < this.maxAge && this.waterrequired == false && this.bugs.length == 0) {
                this.age++;
            }
        }


        draw(): void {
            cr2.save();
            cr2.translate(this.row * 100, this.column * 100);
            cr2.fillStyle = this.currentcolour;
            cr2.fillRect(45 - 1 * this.age, 45 - 1 * this.age, 10 + 1 * this.age, 10 + 1 * this.age);
            cr2.restore();
        }
    }
}