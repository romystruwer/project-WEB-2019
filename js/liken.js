/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

//de hartjesknop selecteren
var likeButton = document.querySelector('#like-button')

//als je op het hartje klikt dan verandert het in een gevuld/leeg hartje
function hartjeLiken() {
    console.log('koe');
    if(likeButton.classList.contains("far")){
        likeButton.classList.remove("far");
        likeButton.classList.add("fas");
    } else {
        likeButton.classList.remove("fas");
        likeButton.classList.add("far");
    }
}

likeButton.addEventListener("click", hartjeLiken);

//als je op het hartje klikt komt er een +1 te staan

