'use strict';

// Select the first paragraph
let p1 = document.querySelector("p");
console.log(p1);
// Select the element with ID main, basic, or exclamation
let p2 = document.querySelector("#main,#basic,#exclamation");
console.log(p2);
// Select the paragraph with ID basic
let p3 = document.querySelector("p#basic");
console.log(p3);

// Event delegation - the listener is attached to the document.
// This is effective when working with dynamic DOM elements.
document.addEventListener("click", (e) => {
    if (e.target.getAttribute("id") === "btnClickMe") {
        displayElements();
    } else if (e.target.getAttribute("id") === "btnClickMeToo") {
        changeTheDOM();
    }
});

function displayElements() {
    console.log(`Before: ${p3.textContent}`);
    p3.textContent = p3.textContent + " CHANGED!";
    console.log(`After button click: ${p3.textContent}`);

    let paragraphs = document.querySelectorAll("p");

    console.log('querySelectorAll("p")');
    console.log('indexed for');
    for (let i = 0; i < paragraphs.length; i++) {
        let p = paragraphs[i];
        console.log(p);
    }

    console.log('for of');
    for (let p of paragraphs) {
        console.log(p);
    }

    console.log('forEach');
    paragraphs.forEach((p) => {
        console.log(p);
    });
}

function changeTheDOM() {
    console.log("CHANGING THE DOM!");
    // Select the div with class text-center
    let mainDiv = document.querySelector("div.text-center");
    // Append a new paragraph
    mainDiv.innerHTML += "<p>Added Paragraph</p>";

    // Create the paragraph
    const newP = document.createElement("p");
    // Create the content of the paragraph
    const newText = document.createTextNode("This is new text.");
    // Add the next text node to the paragraph
    newP.appendChild(newText);
    // Add the new paragraph to the div
    mainDiv.appendChild(newP);

    // Create the DOM parser
    const domParser = new DOMParser();
    // Parse the HTML
    const doc = domParser.parseFromString(
        "<p>Added Paragraph using DOM parser</p>", "text/html");
    // Get the paragraph from the created document
    const newP2 = doc.querySelector("p");
    mainDiv.appendChild(newP2);
    console.log("DONE CHANGING THE DOM!");
}


