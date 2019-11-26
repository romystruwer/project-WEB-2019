//de hartjesknop selecteren
var likeButton = document.getElementById('like-button');
//even testen!
console.log('likeButton');

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

likeButton.addEventListener('onclick', hartjeLiken);


//als je op het hartje klikt komt er een +1 te staan
