namespace canvas2 {
    
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load" handleLoad);
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
        drawTrees({ x: 500, y: 125}, { x: 250, y: 75 });
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0,crc2.canvas.height);
        gradient.addColorStop(0, "HSL(240, 60%, 60%)");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(90, 80%, 50%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);

    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let numberParticles: number = 20;
        let radiusParticles: number = 50;
        let particle = Path2D = new Path2D();
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

    function drawTrees(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let numberParticles: number = 20;
        let radiusParticles: number = 50;
        let particle = Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0,0,0,0,0, radiusParticles);

        particle.arc(0,0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(120, 100%, 80%, 0.5)");
        gradient.addColorStop(1, "HSLA(120, 100%, 80%, 0)");

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



}