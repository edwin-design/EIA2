"use strict";
var GardenSimulation;
(function (GardenSimulation) {
    let TASK;
    (function (TASK) {
        TASK[TASK["PLANTSEED1"] = 0] = "PLANTSEED1";
        TASK[TASK["PLANTSEED2"] = 1] = "PLANTSEED2";
        TASK[TASK["PLANTSEED3"] = 2] = "PLANTSEED3";
        TASK[TASK["PLANTSEED4"] = 3] = "PLANTSEED4";
        TASK[TASK["PLANTSEED5"] = 4] = "PLANTSEED5";
        TASK[TASK["HARVEST"] = 5] = "HARVEST";
        TASK[TASK["WATER"] = 6] = "WATER";
        TASK[TASK["FERTILIZE"] = 7] = "FERTILIZE";
        TASK[TASK["PESTICIDE"] = 8] = "PESTICIDE";
    })(TASK = GardenSimulation.TASK || (GardenSimulation.TASK = {}));
    class Player {
        constructor() {
            //
        }
        plant(_value) {
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
        harvest() {
            Player.task = TASK.HARVEST;
        }
        water() {
            Player.task = TASK.WATER;
        }
        fertilize() {
            Player.task = TASK.FERTILIZE;
        }
        pesticide() {
            Player.task = TASK.PESTICIDE;
        }
    }
    Player.money = 0;
    GardenSimulation.Player = Player;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Player.js.map