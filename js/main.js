//Select images
let modalTrigger = document.querySelector('#myImg');
let modalDisplay = document.querySelector('#modalDisplay');


//select close button
let closeBtn = document.querySelector('.close');

//add click event to modal trigger
// modalTrigger.addEventListener('click', clickEvent);


//Function to be executed when event is clicked
function clickEvent(){
  modalDisplay.style.display = 'block';


}

//Add close event to close button
closeBtn.addEventListener('click', closeButton);

//function to close the button
function closeButton(){
  modalDisplay.style.display = 'none';
}

//slides
var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {

  showSlides(slideIndex += n);

}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('column');

  if(n > slides.length){
    slideIndex = 1
  }

  if(n < 1) {
    slideIndex = slides.length;
  }

  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = "block";
}

/**************************************************ANOTHER EFFECT**********************/

const TypeWriter = function(sectionText, words, wait) {
  this.sectionText = sectionText;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

//Type method
TypeWriter.prototype.type = function() {
  //Current word to be used
  const currentIndex = this.wordIndex % this.words.length;

  //get text of current word

  const currentText = this.words[currentIndex];

  //check if text cleared

  if(this.isDeleting) {
    //remove text
    this.txt = currentText.substring(0, this.txt.length - 1);

  } else {
    //add text

    this.txt = currentText.substring(0, this.txt.length + 1);
  }

  //insert text into dom element
  this.sectionText.innerHTML = `<span class="txt">${this.txt}</span>`;

  //initial type speed
  let typeSpeed = 100;

  if(this.isDeleting) {
    typeSpeed /= 2;
  }

  //if word is complete
  if(!this.isDeleting && this.txt === currentText){
    //stop at the end
    typeSpeed = this.wait

    //set delete to true so it starts
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    //move to next word
    this.wordIndex++;

    //pause befpre typing again 
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
}

//initialise onload
document.addEventListener('DOMContentLoaded', init);

//function init

function init() {
  const sectionText = document.querySelector('.section-text');
  const words = JSON.parse(sectionText.getAttribute("data-words"));
  const wait = sectionText.getAttribute('data-wait');

  //init typewriter

  new TypeWriter(sectionText,words,wait);

}

