
// Image Slider

let slides = document.querySelectorAll('.backroundslides');
let slideindex = 0;

let show_button_next = document.querySelector('#navbar-carousel-control-next');
let show_button_prev = document.querySelector('#navbar-carousel-control-prev');

document.addEventListener("DOMContentLoaded",init);

show_button_next.addEventListener('click',shownext);
show_button_prev.addEventListener('click',showprev);



function init(){
    slides[slideindex].style.display = "block";
}

function showslide(index){
    slideindex = (index + 1) % slides.length;

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    console.log(slideindex);
    slides[slideindex].style.display = "block";
}

function shownext(){
    showslide(++slideindex);
}

function showprev(){
    if(slideindex == 0){
        slideindex = slides.length;
    }
    showslide(slideindex);
}


/* Auto image slider */

setInterval(()=>{
    shownext();
},5000)