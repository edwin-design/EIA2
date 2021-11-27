namespace canvas2 {
    
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;

        drawBackground();
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains({x: 0, y: horizon}, 75, 200, "grey", "white");
        drawMountains({x: 0, y: horizon}, 50, 150, "grey", "lightgrey");
        drawLeaf1();
        drawLeaf2();
        
        for (let index: number = 0; index < 2; index++) {

            drawSquirrel({ x: Math.random() * 500, y: 500 + Math.random() * 100 });

        }

        for (let index: number = 0; index < 1; index++) {

            drawSquirrel2({ x: Math.random() * 500, y: 500 + Math.random() * 100 });

        }

        for (let index: number = 0; index < 40; index++) {

            drawFir({ x: Math.random() * 1000, y: 400 + Math.random() * 10 });

        }
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0,crc2.canvas.height);
        gradient.addColorStop(0, "HSL(240, 60%, 60%)");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(golden, "HSL(100, 30%, 50%)");
        gradient.addColorStop(1, "HSL(90, 80%, 60%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);

    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let numberParticles: number = 20;
        let radiusParticles: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0,0,0,0,0, radiusParticles);

        particle.arc(0,0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let i: number = 0; i < numberParticles; i++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }

        crc2.restore();

    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;
        

        crc2.save();
        crc2. translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0,0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x,y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x,0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawSquirrel(_position: Vector): void {
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(1.2, 1.2);

        crc2.fillStyle = "HSL(10, 80%, 45%)";

        

        crc2.beginPath();
        crc2.ellipse(5, -20, 10, 25, 10, 20, 40);
        crc2.closePath();
        crc2.fill();
        
        crc2.beginPath();
        crc2.ellipse(20, -20, 3, 6, 2, 10, 20);
        crc2.closePath();
        crc2.fill();
        
        crc2.beginPath();
        crc2.ellipse(0, 4, 3, 10, 8, 20, 40);
        crc2.closePath();
        crc2.fill();
    
        crc2.beginPath();
        crc2.ellipse(17, -40, 8, 10, 5, 20, 40);
        crc2.closePath();
        crc2.fill();
        

        crc2.beginPath();
        crc2.ellipse(12, -50, 7, 3, 2, 3, 30);
        crc2.closePath();
        crc2.fill();
        
        crc2.save();
        crc2.rotate(4.6);
        crc2. translate(28, -38);
        crc2.beginPath();
        crc2.moveTo(-25, 36);
        
        crc2.quadraticCurveTo(5, 10, 20, 20);
        
        crc2.closePath();
        
        crc2.fill();

        
        
        

    }

    function drawSquirrel2(_position: Vector): void {
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(-1.2, 1.2);

        crc2.fillStyle = "HSL(10, 80%, 45%)";

        

        crc2.beginPath();
        crc2.ellipse(5, -20, 10, 25, 10, 20, 40);
        crc2.closePath();
        crc2.fill();
        
        crc2.beginPath();
        crc2.ellipse(20, -20, 3, 6, 2, 10, 20);
        crc2.closePath();
        crc2.fill();
        
        crc2.beginPath();
        crc2.ellipse(0, 4, 3, 10, 8, 20, 40);
        crc2.closePath();
        crc2.fill();
    
        crc2.beginPath();
        crc2.ellipse(17, -40, 8, 10, 5, 20, 40);
        crc2.closePath();
        crc2.fill();
        

        crc2.beginPath();
        crc2.ellipse(12, -50, 7, 3, 2, 3, 30);
        crc2.closePath();
        crc2.fill();
        
        crc2.save();
        crc2.rotate(4.6);
        crc2. translate(28, -38);
        crc2.beginPath();
        crc2.moveTo(-25, 36);
        
        crc2.quadraticCurveTo(5, 10, 20, 20);
        
        crc2.closePath();
        
        crc2.fill();

        
        
        

    }


    function drawFir(_position: Vector): void {
        console.log("Fir");
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(1, 2);

        crc2.beginPath();
        crc2.rect(-5, -20, 10, 20);
        crc2.closePath();
        crc2.fillStyle = "hsl(41, 68%, 22%)";
        crc2.fill();
    
        crc2.beginPath();
        crc2.moveTo(0, -70);
        crc2.lineTo(-23, -45);
        crc2.lineTo(-15, -50);
        crc2.lineTo(-27, -27);
        crc2.lineTo(-20, -32);
        crc2.lineTo(-35, -7);
        crc2.lineTo(0, -18);
        crc2.lineTo(35, -7);
        crc2.lineTo(20, -32);
        crc2.lineTo(27, -27);
        crc2.lineTo(15, -50);
        crc2.lineTo(23, -45);
        crc2.moveTo(0, -70);
    
        crc2.fillStyle = "hsl(166, 68%, 23%)";
        crc2.closePath();
        
    
        crc2.fill();

        crc2.restore();

        
      }

      function drawLeaf1(): void{
        let nLeaves: number = 250;
        let r: number = 10;

        for (let drawn: number = 0; drawn < nLeaves; drawn++) {
            let leaves: Path2D = new Path2D();
            let x: number = Math.random() * 1200;
            let y: number = 380 + Math.random() * 1200;

            leaves.arc(x, y, r, 199, 50 * Math.PI);
            crc2.fillStyle = "HSL(120, 50%, 40%)";
            crc2.fill(leaves);
        }
      }

      function drawLeaf2(): void{
        let nLeaves: number = 200;
        let r: number = 8;

        for (let drawn: number = 0; drawn < nLeaves; drawn++) {
            let leaves: Path2D = new Path2D();
            let x: number = Math.random() * 1000;
            let y: number = 380 + Math.random() * 1000;

            leaves.ellipse(x, y, r, 4, 20, 3, 6);
            crc2.fillStyle = "HSL(96, 80%, 40%)";
            crc2.fill(leaves);
        }
    }

    
    



}