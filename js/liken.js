/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

//de knop selecteren
var save = document.querySelector("button");
var favs = document.querySelector("li:nth-last-child(2)");

//als je op de button klikt kiest hij class =
save.addEventListener("click", function() {
    favs.classList.toggle("opgeslagen");
});


