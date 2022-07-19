namespace GardenSimulation {

    window.addEventListener("load", hdlLoad);
    
    export let canvas: HTMLCanvasElement;
    export let cr2: CanvasRenderingContext2D;
    export let fieldsAll: Field[] = [];
    export let plantsAll: Plant[] = [];
    export let player: Player = new Player();
    export let mX: number;
    export let mY: number;
    export let time: number = 0;
    
    function hdlLoad(): void {
        canvas = document.querySelector("canvas");
        cr2 = canvas.getContext("2d");
        cr2.fillStyle = "red";
        cr2.fillRect(0, 0, 100, 100);
        canvas.height = 400;
        canvas.width = 4000;
        canvas.addEventListener("click", (evt) => {getMousePosition(evt); });
        let seedButton1: HTMLInputElement = document.querySelector("#s1");
        let seedButton2: HTMLInputElement = document.querySelector("#s2");
        let seedButton3: HTMLInputElement = document.querySelector("#s3");
        let seedButton4: HTMLInputElement = document.querySelector("#s4");
        let seedButton5: HTMLInputElement = document.querySelector("#s5");
        let harvestButton: HTMLInputElement = document.querySelector("#h");
        let waterButton: HTMLInputElement = document.querySelector("#w");
        let fertilizeButton: HTMLInputElement = document.querySelector("#f");
        let pesticideButton: HTMLInputElement = document.querySelector("#p");
        seedButton1.addEventListener("click", () => player.plant(seedButton1.value) );
        seedButton2.addEventListener("click", () => player.plant(seedButton2.value) );
        seedButton3.addEventListener("click", () => player.plant(seedButton3.value) );
        seedButton4.addEventListener("click", () => player.plant(seedButton4.value) );
        seedButton5.addEventListener("click", () => player.plant(seedButton5.value) );
        harvestButton.addEventListener("click", player.harvest);
        waterButton.addEventListener("click", player.water);
        fertilizeButton.addEventListener("click", player.fertilize);
        pesticideButton.addEventListener("click", player.pesticide);
        for (let i: number = 0; i < 4; i++) {
            for (let j: number = 0; j < 10; j++) {
                fieldsAll.push(new Field(j, i));
            }
        }
        for (let field of fieldsAll) {
            field.draw();
        }
        startTimer();
    
        let inputfield: HTMLInputElement = <HTMLInputElement>document.querySelector("#moneyinput");
    
        
        document.querySelector("#startButton").addEventListener("click", changePlayermoney);
        
        function changePlayermoney(): void {
            let inputfieldValue: string = inputfield.value;
            Player.money = parseInt(inputfieldValue);
        }
    
    
    }
    
    function getMousePosition(_evt: MouseEvent): void {
        let rect: DOMRect = canvas.getBoundingClientRect();
        mX = _evt.clientX - rect.left;
        mY = _evt.clientY - rect.top;
        for (let field of fieldsAll) {
            field.isHit(mX, mY);
        }
    }
    
    function startTimer(): void {
        setInterval(timer, 1000);
    }
    
    function timer(): void {
        time ++;
        console.log(time);
        for (let plant of plantsAll) {
            plant.grow();
            plant.draw();
            plant.loosesWater();
            plant.getsBug();
            plant.price = Math.abs(Math.sin(time) + plant.price);
            
        }
        document.querySelector("#money").innerHTML = "Money: " + Player.money + "€";
        
    }
    
    }