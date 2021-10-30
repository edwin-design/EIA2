"use strict";
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.querySelector("body").addEventListener("click", logInfo);
    document.querySelector("div").addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
    document.querySelector("body").addEventListener("keyup", logInfo);
    document.querySelector("div").addEventListener("keyup", logInfo);
}
function setInfoBox(_event) {
    let x = _event.clientX;
    let y = _event.clientY;
    let target = _event.target;
    let span = document.querySelector("span");
    span.innerHTML = "x: " + x + "<br>" + "y: " + y + "<br>" + "target:" + target;
    span.style.left = x + 5 + "px";
    span.style.top = y + 10 + "px";
}
function logInfo(_event) {
    let type = _event.type;
    let target = _event.target;
    let currentTarget = _event.currentTarget;
    let eventObject = _event;
    console.log("Type is", type);
    console.log("Target is ", target);
    console.log("CurrentTarget is ", currentTarget);
    console.log("Object is", eventObject);
}
//# sourceMappingURL=Aufgabe2.js.map