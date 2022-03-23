
// step 1: Adding a variables for the movement of the card
var container = document.querySelector('.container');
var card = document.querySelector('.card');

// step 2: moving effect the selected vars under step 1
container.addEventListener('mousemove', function(event){
    var xAxis = (window.innerWidth / 2 - event.pageX) / 20; // rotating the container element into x axis
    var yAxis = (window.innerWidth / 2 - event.pageY) / 20; // rotating the container element into x axis

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
// `` - back tick - for ES6 EcmaScript 6
// older js version - rotateY(xAxis + 'deg') + rotateX(yAxis + 'deg');

// step 3: Revoving the animation in
container.addEventListener('mouseleave', function(){
    card.style.transform = "all 0.5s ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
});

// Step 4: var for card details 3d effects (like floating)
var title = document.querySelector('.title');
var social = document.querySelector('.social');
var profile = document.querySelector('.profile');
var photo = document.querySelector('.photo img');


// Step 5: Applying the floating effect on the card container
title.style.transform = "translateZ(100px)";
social.style.transform = "translateZ(100px)";
profile.style.transform = "translateZ(100px)";
photo.style.transform = "translateZ(100px)";

