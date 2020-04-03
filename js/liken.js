/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

//de knop selecteren
var button = document.querySelector("button");
var element = document.querySelector("li:nth-last-child(2)");

//als je op de button klikt kiest hij class = .clicked
button.addEventListener("click", function() {
    element.classList.toggle(".opgeslagen");
});


