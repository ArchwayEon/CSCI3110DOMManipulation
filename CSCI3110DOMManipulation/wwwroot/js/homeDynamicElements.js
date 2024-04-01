'use strict';

// Event delegation - the listener is attached to the 
// container element, in this case the document. This is 
// effective when working with dynamic DOM elements.
document.addEventListener("click", (e) => {
    if (e.target.getAttribute("id") === "btnAddElements") {
        changeTheDOM();
    }
});

function changeTheDOM() {
    innerHTMLExample();
    createElementExample();
    DOMParserExample();
}

function innerHTMLExample() {
    // Select the div with class text-center
    let mainDiv = document.querySelector("div.text-center");
    // Append a new paragraph
    mainDiv.innerHTML += "<p>Added Paragraph (innerHTML)</p>";
}

function createElementExample() {
    // Select the div with class text-center
    let mainDiv = document.querySelector("div.text-center");
    // Create the paragraph
    const newP = document.createElement("p");
    // Create the content of the paragraph
    const newText = document.createTextNode("This is new text. (createElement)");
    // Add the next text node to the paragraph
    newP.appendChild(newText);
    // Add the new paragraph to the div
    mainDiv.appendChild(newP);
}

function DOMParserExample() {
    // Select the div with class text-center
    let mainDiv = document.querySelector("div.text-center");
    // Create the DOM parser
    const domParser = new DOMParser();
    // Parse the HTML
    const doc = domParser.parseFromString(
        "<p>Added Paragraph using DOM parser</p>", "text/html");
    // Get the paragraph from the created document
    const newP = doc.querySelector("p");
    mainDiv.appendChild(newP);
}

