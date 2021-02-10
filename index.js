// All buttons/drums "get clicked! with the below formula....
//
// document.querySelectorAll(".set")[0].addEventListener("click", function () {
//  alert("I got clicked!");
//  })

// Detecting button press

var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

// Adding animation to website
    buttonAnimation(buttonInnerHTML);


  });
}

// Detecting keyboard press using addEventListener with anonimus function.
// How to play sound using JS. Note: mySound = new Audio(URLString) and from stackoverflow var audio = new Audio('audio_file.mp3');
// audio.play();

document.addEventListener("Keydown", function(event) {

  makeSound(event.key);

// Adding animation to website

  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {

    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

    case "j":
    var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    case "k":
    var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    default: console.log(buttonInnerHTML);

  }

}

// Adding animation to website

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  // syntax formula for setTime: setTimeout(function, milliseconds, param1, param2, ...)

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)

}
