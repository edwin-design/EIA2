namespace GardenSimulation {

    export enum TASK {
        PLANTSEED1,
        PLANTSEED2,
        PLANTSEED3,
        PLANTSEED4,
        PLANTSEED5,
        HARVEST,
        WATER,
        FERTILIZE,
        PESTICIDE
    }

    export class Player {

        static money: number = 0;
        static task: TASK;

        constructor() {
            //
        }

        plant(_value: string): void {
                if (_value == "seed1") {
                    Player.task = TASK.PLANTSEED1;
                }
                else if (_value == "seed2") {
                    Player.task = TASK.PLANTSEED2;
                }
                else if (_value == "seed3") {
                    Player.task = TASK.PLANTSEED3;
                }
                else if (_value == "seed4") {
                    Player.task = TASK.PLANTSEED4;
                }
                else if (_value == "seed5") {
                    Player.task = TASK.PLANTSEED5;
                }



        }
        harvest(): void {
            Player.task = TASK.HARVEST;
        }
        water(): void {
            Player.task = TASK.WATER;
        }
        fertilize(): void {
            Player.task = TASK.FERTILIZE;
        }
        pesticide(): void {
            Player.task = TASK.PESTICIDE;
        }

    }

}