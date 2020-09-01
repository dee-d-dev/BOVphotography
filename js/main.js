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
    slideIndex = slides.length
  }

  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "") 
  }
  slides[slideIndex - 1].style.display = "block";
}




