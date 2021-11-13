namespace Aufgabe5 {

    window.addEventListener("load", handleLoad);

    let eingabe: HTMLInputElement;
    let nodeList: NodeListOf<HTMLInputElement>;
    let font: HTMLSelectElement;
    let cardSize: string;
    let backgroundColor1: string;
    let selectField: HTMLDivElement;
    let body: HTMLBodyElement = <HTMLBodyElement>document.getElementById("body1");
    function handleLoad(_event: Event): void {

        eingabe = <HTMLInputElement>document.getElementById("kartenName");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#formSettings");
        form.addEventListener("change", handleChange);
        document.getElementById("startButton").addEventListener("click", gameStart);
    }

    function handleChange(_event: Event): void {
        let formData: FormData = new FormData(document.forms[0]);
        let nodeList: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        let font: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        let cardSize: string = nodeList[0].value;
        let backgroundColor1: string = nodeList[1].value;
        
        console.log(font.value);
        
        console.log(nodeList);
        eingabe = <HTMLInputElement>document.getElementById("kartenName");
        
        console.log(nodeList);

    }


    function gameStart(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let nodeList: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        let font: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        let cardSize: String = nodeList[0].value;
        let backgroundColor1: string = nodeList[1].value;
        let cardBackgroundColor: string = nodeList[2].value;
        let fontColor: string = nodeList[3].value;
        let timer: string = nodeList[4].value;
        let timerNumber: number = parseInt(timer);



        document.getElementById("formSettings").classList.add("ishidden");
        let array1: any = eingabe.value.split("");
        let eingabe2 = eingabe.value;
        let arrayCards2: any = eingabe2.split("");
        let arrayCards3: any = [];

        for (let index: number = 0; index < eingabe.value.length; index++) {

            let zufallsZahl: number = Math.floor(Math.random() * (array1.length));
            const card: HTMLElement = document.createElement("div");
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

            selectField = <HTMLDivElement>document.getElementById("formSettings");
            selectField.classList.add("isHidden");

            setTimeout(hideCards2, (arrayCards2.length * 1000));

            function hideCards2(): void {
                card.classList.add("hide");
            }

            setTimeout(youLost, (arrayCards2.length + timerNumber * 1000));

            function youLost(): void {
                alert("you lost");
            }

            card.addEventListener("click", startGame);

            function startGame(): void {
                card.classList.remove("hide");
                arrayCards3.push(card.innerHTML);

                if ((arrayCards2.length === arrayCards3.length)) {
                    if (JSON.stringify(arrayCards2) == JSON.stringify(arrayCards3)) {
                        alert("you won");
                        
                    } else {
                        alert("you lost");
                    }
                }


            }



        }
    }
}
