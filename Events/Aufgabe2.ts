namespace Aufgabe2

window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {

    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.querySelector("body").addEventListener("click", logInfo);
    document.querySelector("div").addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
    document.querySelector("body").addEventListener("keyup", logInfo);
    document.querySelector("div").addEventListener("keyup", logInfo);
    
}

function setInfoBox (_event: MouseEvent): void {

    let x: number = _event.clientX;
    let y: number = _event.clientY;
    let target: EventTarget = _event.target;
    let span: HTMLElement = document.querySelector("span");
    span.innerHTML = "x: " + x + "<br>" + "y: " + y + "<br>" + "target:" + target;
    span.style.left = x + 5 + "px";
    span.style.top = y + 10 + "px";

}

function logInfo (_event: Event): void {

    let type: string = _event.type;
    let target: EventTarget = _event.target;
    let currentTarget: EventTarget = _event.currentTarget;
    let eventObject: Object = _event;

    console.log("Type is", type);
    console.log("Target is ", target);
    console.log("CurrentTarget is ", currentTarget);
    console.log("Object is",  eventObject);

}

}