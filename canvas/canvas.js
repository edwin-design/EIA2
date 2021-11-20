"use strict";
var canvas;
(function (canvas_1) {
    let crc2;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * 500;
            let y = Math.random() * 500;
            var n = Math.random() * 50;
            drawTriangle(x, y);
            drawCircle(x, y, n);
        }
    }
    function drawTriangle(_x, _y, _n) {
        var rC = Math.random() * 550;
        var rC2 = Math.random() * 350;
        var rC3 = Math.random() * 150;
        var rC4 = Math.random() * 280;
        var n = Math.random() * 80;
        crc2.beginPath();
        crc2.moveTo(_x + 40, _y + 40);
        crc2.lineTo(_x, _y + n);
        crc2.lineTo(_x + n, _y + n);
        crc2.closePath();
        crc2.fillStyle = "hsl(" + rC2 + "," + rC + "%," + rC + "%)";
        crc2.strokeStyle = "hsl(" + rC4 + "," + rC3 + "%," + rC3 + "%)";
        crc2.lineWidth = 15;
        crc2.fill();
        crc2.stroke();
    }
    function drawCircle(_x, _y, _n) {
        var rC = Math.random() * 100;
        var rC2 = Math.random() * 160;
        var rC3 = Math.random() * 70;
        var rC4 = Math.random() * 360;
        crc2.beginPath();
        crc2.arc(_x, _y, _n, 0, 2 * Math.PI, false);
        crc2.fillStyle = "hsl(" + rC2 + "," + rC + "%," + rC3 + "%)";
        crc2.strokeStyle = "hsl(" + rC4 + "," + rC2 + "%," + rC3 + "%)";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.fill();
    }
})(canvas || (canvas = {}));
//# sourceMappingURL=canvas.js.map