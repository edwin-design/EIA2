"use strict";
var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", handleLoad);
    let eingabe;
    let nodeList;
    let font;
    let cardSize;
    let backgroundColor1;
    let selectField;
    let body = document.getElementById("body1");
    function handleLoad(_event) {
        eingabe = document.getElementById("kartenName");
        let form = document.querySelector("div#formSettings");
        form.addEventListener("change", handleChange);
        document.getElementById("startButton").addEventListener("click", gameStart);
    }
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        let nodeList = document.querySelectorAll("input");
        let font = document.querySelector("select");
        let cardSize = nodeList[0].value;
        let backgroundColor1 = nodeList[1].value;
        console.log(font.value);
        console.log(nodeList);
        eingabe = document.getElementById("kartenName");
        console.log(nodeList);
    }
    function gameStart() {
        let formData = new FormData(document.forms[0]);
        let nodeList = document.querySelectorAll("input");
        let font = document.querySelector("select");
        let cardSize = nodeList[0].value;
        let backgroundColor1 = nodeList[1].value;
        let cardBackgroundColor = nodeList[2].value;
        let fontColor = nodeList[3].value;
        let timer = nodeList[4].value;
        let timerNumber = parseInt(timer);
        document.getElementById("formSettings").classList.add("ishidden");
        let array1 = eingabe.value.split("");
        let eingabe2 = eingabe.value;
        let arrayCards2 = eingabe2.split("");
        let arrayCards3 = [];
        for (let index = 0; index < eingabe.value.length; index++) {
            let zufallsZahl = Math.floor(Math.random() * (array1.length));
            const card = document.createElement("div");
            card.classList.add("Card" + index);
            document.body.appendChild(card);
            card.innerHTML = array1[zufallsZahl];
            array1.splice(zufallsZahl, 1);
            card.style.width = cardSize + "px";
            card.style.height = cardSize + "px";
            document.body.style.backgroundColor = backgroundColor1;
            card.style.backgroundColor = cardBackgroundColor;
            card.style.fontFamily = font.value.toString();
            card.style.color = fontColor;
            card.style.fontSize = "font-size: fit-width | fit-height | fit-height-precise;";
            card.style.textAlign = "center";
            card.style.display = "grid";
            card.style.borderStyle = "solid";
            card.style.borderWidth = "5px";
            card.style.borderColor = "black";
            card.style.float = "left";
            selectField = document.getElementById("formSettings");
            selectField.classList.add("isHidden");
            setTimeout(hideCards2, (arrayCards2.length * 1000));
            function hideCards2() {
                card.classList.add("hide");
            }
            setTimeout(youLost, (arrayCards2.length + timerNumber * 1000));
            function youLost() {
                alert("you lost");
            }
            card.addEventListener("click", startGame);
            function startGame() {
                card.classList.remove("hide");
                arrayCards3.push(card.innerHTML);
                if ((arrayCards2.length === arrayCards3.length)) {
                    if (JSON.stringify(arrayCards2) == JSON.stringify(arrayCards3)) {
                        alert("you won");
                    }
                    else {
                        alert("you lost");
                    }
                }
            }
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map