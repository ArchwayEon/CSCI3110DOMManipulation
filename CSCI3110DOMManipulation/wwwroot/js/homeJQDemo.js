"use strict";
$(function _main() {
    $(document).on("click", "#btnHideForm", (e) => {
        $('form').hide();
    });
    $(document).on("click", "#btnShowForm", (e) => {
        $('form').show();
    });
    $(document).on("click", "#btnFadeOut", (e) => {
        $('p,table').fadeOut(1500);
    });
    $(document).on("click", "#btnFadeIn", (e) => {
        $('p,table').fadeIn(1500);
    });
    $(document).on('click', "img", (e) => {
        alert("image clicked");
    });
    $(".lonely").css("background-color", "pink");
    $(document).on('mouseover', '.lonely', (e) => {
        $(e.target).css("background-color", "green");
    });
    $(document).on('mouseout', '.lonely', (e) => {
        $(e.target).css("background-color", "pink");
    });
    $("article").css("background-color", "cyan");
    $("#formInputArea").css("background-color", "#008080");
    let txt1 = "<p>Text 1</p>";              // Create element with HTML
    let txt2 = $("<p></p>").text("Text 2");  // Create with jQuery
    let txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text 3";
    $("article").append(txt1, txt2, txt3);   // Append the new elements

    // Not jQuery
    const theForm = document.querySelector("#formInputArea");
    theForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(theForm);
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
        }
    });
});
