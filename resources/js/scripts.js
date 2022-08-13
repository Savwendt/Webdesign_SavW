
/* this is to open and close the nav */

function openNav () {

let toggler = document.querySelector
('.nav-promt');
letnavigation =document.querySelector ('.main-nav');

toggler.onclick = function () {

    Navigation.classlist.toggle('open');
}

}

openNav();

// this is for the gallery 

var lightbox = new SimpleLightbox('.content a', { /* options */ });

