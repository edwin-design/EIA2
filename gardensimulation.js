"use strict";
var GardenSimulation;
(function (GardenSimulation) {
    window.addEventListener("load", hdlLoad);
    GardenSimulation.fieldsAll = [];
    GardenSimulation.plantsAll = [];
    GardenSimulation.player = new GardenSimulation.Player();
    GardenSimulation.time = 0;
    function hdlLoad() {
        GardenSimulation.canvas = document.querySelector("canvas");
        GardenSimulation.cr2 = GardenSimulation.canvas.getContext("2d");
        GardenSimulation.cr2.fillStyle = "red";
        GardenSimulation.cr2.fillRect(0, 0, 100, 100);
        GardenSimulation.canvas.height = 400;
        GardenSimulation.canvas.width = 4000;
        GardenSimulation.canvas.addEventListener("click", (evt) => { getMousePosition(evt); });
        let seedButton1 = document.querySelector("#s1");
        let seedButton2 = document.querySelector("#s2");
        let seedButton3 = document.querySelector("#s3");
        let seedButton4 = document.querySelector("#s4");
        let seedButton5 = document.querySelector("#s5");
        let harvestButton = document.querySelector("#h");
        let waterButton = document.querySelector("#w");
        let fertilizeButton = document.querySelector("#f");
        let pesticideButton = document.querySelector("#p");
        seedButton1.addEventListener("click", () => GardenSimulation.player.plant(seedButton1.value));
        seedButton2.addEventListener("click", () => GardenSimulation.player.plant(seedButton2.value));
        seedButton3.addEventListener("click", () => GardenSimulation.player.plant(seedButton3.value));
        seedButton4.addEventListener("click", () => GardenSimulation.player.plant(seedButton4.value));
        seedButton5.addEventListener("click", () => GardenSimulation.player.plant(seedButton5.value));
        harvestButton.addEventListener("click", GardenSimulation.player.harvest);
        waterButton.addEventListener("click", GardenSimulation.player.water);
        fertilizeButton.addEventListener("click", GardenSimulation.player.fertilize);
        pesticideButton.addEventListener("click", GardenSimulation.player.pesticide);
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 10; j++) {
                GardenSimulation.fieldsAll.push(new GardenSimulation.Field(j, i));
            }
        }
        for (let field of GardenSimulation.fieldsAll) {
            field.draw();
        }
        startTimer();
        let inputfield = document.querySelector("#moneyinput");
        document.querySelector("#startButton").addEventListener("click", changePlayermoney);
        function changePlayermoney() {
            let inputfieldValue = inputfield.value;
            GardenSimulation.Player.money = parseInt(inputfieldValue);
        }
    }
    function getMousePosition(_evt) {
        let rect = GardenSimulation.canvas.getBoundingClientRect();
        GardenSimulation.mX = _evt.clientX - rect.left;
        GardenSimulation.mY = _evt.clientY - rect.top;
        for (let field of GardenSimulation.fieldsAll) {
            field.isHit(GardenSimulation.mX, GardenSimulation.mY);
        }
    }
    function startTimer() {
        setInterval(timer, 1000);
    }
    function timer() {
        GardenSimulation.time++;
        console.log(GardenSimulation.time);
        for (let plant of GardenSimulation.plantsAll) {
            plant.grow();
            plant.draw();
            plant.loosesWater();
            plant.getsBug();
            plant.price = Math.abs(Math.sin(GardenSimulation.time) + plant.price);
        }
        document.querySelector("#money").innerHTML = "Money: " + GardenSimulation.Player.money + "€";
    }
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=gardensimulation.js.map