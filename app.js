 window.addEventListener("keydown", checkKeyPressed, false);

 var aKey = document.getElementById('A');
 var sKey = document.getElementById('S');
 var dKey = document.getElementById('D');
 var fKey = document.getElementById('F');
 var jKey = document.getElementById('J');
 var kKey = document.getElementById('K');
 var lKey = document.getElementById('L');
 var semicolonKey = document.getElementById(';');
 var spacebarKey = document.getElementById('spacebar');

 var aAudio = new Audio('https://res.cloudinary.com/debdev/video/upload/v1550451058/openhat.wav');
 var sAudio = new Audio('https://res.cloudinary.com/debdev/video/upload/v1550451058/ride.wav');
 var dAudio = new Audio('https://res.cloudinary.com/debdev/video/upload/v1550451058/kick.wav');
 var fAudio = new Audio('https://res.cloudinary.com/debdev/video/upload/v1550451057/snare.wav');
 var jAudio = new Audio('https://res.cloudinary.com/debdev/video/upload/v1550451057/clap.wav');
 var kAudio = new Audio('https://res.cloudinary.com/debdev/video/upload/v1550451057/hihat.wav');
 var lAudio = new Audio('https://res.cloudinary.com/debdev/video/upload/v1550451057/tink.wav');
 var semicolonAudio = new Audio('https://res.cloudinary.com/debdev/video/upload/v1550451057/boom.wav');
 var spacebarAudio = new Audio('https://res.cloudinary.com/debdev/video/upload/v1550456065/tom.wav');

 function checkKeyPressed(evt) {
     if (evt.keyCode == "65") {
         aAudio.currentTime = 0;
         aAudio.play();
         aKey.classList.add('drum-active-left');
         setTimeout(function () {
             aKey.classList.remove('drum-active-left');
         }, 400);
     } else if (evt.keyCode == "83") {
         sAudio.currentTime = 0;
         sAudio.play();
         sKey.classList.add('drum-active-right');
         setTimeout(function () {
             sKey.classList.remove('drum-active-right');
         }, 400);
     } else if (evt.keyCode == "68") {
         dAudio.currentTime = 0;
         dAudio.play();
         dKey.classList.add('drum-active-left');
         setTimeout(function () {
             dKey.classList.remove('drum-active-left');
         }, 400);
     } else if (evt.keyCode == "70") {
         fAudio.currentTime = 0;
         fAudio.play();
         fKey.classList.add('drum-active-right');
         setTimeout(function () {
             fKey.classList.remove('drum-active-right');
         }, 400);
     } else if (evt.keyCode == "74") {
         jAudio.currentTime = 0;
         jAudio.play();
         jKey.classList.add('drum-active-left');
         setTimeout(function () {
             jKey.classList.remove('drum-active-left');
         }, 400);
     } else if (evt.keyCode == "75") {
         kAudio.currentTime = 0;
         kAudio.play();
         kKey.classList.add('drum-active-right');
         setTimeout(function () {
             kKey.classList.remove('drum-active-right');
         }, 400);
     } else if (evt.keyCode == "76") {
         lAudio.currentTime = 0;
         lAudio.play();
         lKey.classList.add('drum-active-left');
         setTimeout(function () {
             lKey.classList.remove('drum-active-left');
         }, 400);
     } else if ((evt.keyCode == "59") || (evt.code == "186")) {
         semicolonAudio.currentTime = 0;
         semicolonAudio.play();
         semicolonKey.classList.add('drum-active-right');
         setTimeout(function () {
             semicolonKey.classList.remove('drum-active-right');
         }, 400);
     } else if (evt.keyCode == "32") {
         spacebarAudio.currentTime = 0;
         spacebarAudio.play();
         spacebarKey.classList.add('drum-active-spacebar');
         setTimeout(function () {
             spacebarKey.classList.remove('drum-active-spacebar');
         }, 400);
     }
 }