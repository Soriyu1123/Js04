// STEP 1: ADDING A VARIABLE FOR THE MOVEMENT OF THE CARD
var container = document.querySelector('.container');
var card = document.querySelector('.card');

// STEP 2: MOVING  EFFECT THE SELECTED VARS UNDER STEP 1
container.addEventListener('mousemove', function(event) {
    var xAxis = (window.innerWidth / 2 - event.pageX) / 20;
    // ROTATING THE CONTAINER ELEMENT INTO X AXIS
    var yAxis = (window.innerWidth / 2 - event.pageY) / 20;
    // ROTATING THE CONTAINER ELEMENT INTO Y AXIS

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});
// `` - back tick - for ES6 EcmaScript 6
// older js version - rotateY(xAxis + 'deg') + rotateX(yAxis + 'deg');

// step 3: REVOVING THE ANIMATAON IN
container.addEventListener('mouseleave', function() {
    card.style.transform = "all 0.5s ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
});

// step 4: VAR for card details 3d effects (like floating)
var title = document.querySelector('.title');
var title = document.querySelector('.social');
var title = document.querySelector('.profile');
var title = document.querySelector('.photo img');

// step 5: applying the floating effect on the card container
title.style.transform = "translateZ(100px)";
social.style.transform = "translateZ(100px)";
profile.style.transform = "translateZ(100px)";
photo.style.transform = "translateZ(100px)";
