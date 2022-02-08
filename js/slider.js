var items = document.querySelectorAll(".slider__item");

var left = document.getElementById("control__button--left");

var center = document.getElementById("control__button--center");

var right = document.getElementById("control__button--right");

var current_slide = 0;

left.addEventListener ("click", function(){
    items[current_slide].style.opacity=1;
    items[current_slide+1].style.opacity=0;
    items[current_slide+2].style.opacity=0;
});

center.addEventListener ("click", function(){
    items[current_slide].style.opacity=0;
    items[current_slide+1].style.opacity=1;
    items[current_slide+2].style.opacity=0;
});

right.addEventListener ("click", function(){
    items[current_slide].style.opacity=0;
    items[current_slide+1].style.opacity=0;
    items[current_slide+2].style.opacity=1;
});

