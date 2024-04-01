'use strict';

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
