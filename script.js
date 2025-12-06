//Accordion script
var acc = document.getElementsByClassName("accordion");
var i; 
for (i = 0; i < acc.length; i++) { //loop through all accordion elements acc. lenght= number of accordion elements
  acc[i].addEventListener("click", function () { 
    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/*

var audio = document.getElementById("myAudio");

function playAudio() {
  audio.play();
} */




  // Fade-Up Animation Script

const fadeUps = document.querySelectorAll('.fade-up'); // Select all elements with the 'fade-up' class

const observer = new IntersectionObserver(entries => { //intersectionObserver watch for visibility changes
  entries.forEach(entry => {
    if (entry.isIntersecting) { // Check if the element is in the viewport
      entry.target.style.animation ="fadeUp 0.8s ease forwards"; // Apply the fade-up animation
      observer.unobserve(entry.target); // Stop observing the element after the animation is applied
    } 
  }); 
}); 
fadeUps.forEach(el => observer.observe(el));



/*
const faders = document.querySelectorAll('.fade-in'); // Select all elements with the 'fade-in' class
const appearOptions ={};
const appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
}
*/