'use strict';

setupNoEventDelegation();
setupEventDelegation();
createClickMeToo();

function setupNoEventDelegation() {
    const clickables = document.querySelectorAll(".clickable");
    clickables.forEach((clickable) => {
        clickable.addEventListener("click", (e) => {
            console.log(`No event delegation: You clicked ${e.target.textContent}`);
        });
    });
}

function createClickMeToo() {
    let secondDiv = document.querySelector("#div2");
    const newButton = document.createElement("button");
    // Set the class of the new button
    newButton.setAttribute("class", "clickable");
    const newText = document.createTextNode("Click Me Too!");
    newButton.appendChild(newText);
    secondDiv.appendChild(newButton);
}

function setupEventDelegation() {
    document.addEventListener("click", (e) => {
        if (e.target && e.target.getAttribute("class").includes("clickable")) {
            console.log(`Event delegation: You clicked ${e.target.textContent}`);
        }
    });
}


