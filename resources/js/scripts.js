
/* this is to open and close the nav */

function openNav () {

let toggler = document.querySelector
('.nav-prompt');

let navigation = document.querySelector('.main-nav');

toggler.onclick=function(){

    navigation.classList.toggle('open');
}

}

openNav();
 
// this is for the gallery 

var lightbox = new SimpleLightbox('.content a', { /* options */ });
