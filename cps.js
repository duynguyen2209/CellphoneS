// Slider
window.onscroll = function() {myFunction();scrollFunction();};
// Get the navbar
var headerNav = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = headerNav.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
      headerNav.classList.add("sticky")
    } else {
      headerNav.classList.remove("sticky");
    }
  }

// Button back to top
//Get the button
let mybutton = document.getElementById("btn-back-to-top");
// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Modal 
const popup = document.querySelector('.modal-container');
const close = document.querySelector('.button-cls');

    window.onload = function(){
      setTimeout(function(){
        popup.style.display= "block";
      },700)
    }
close.addEventListener('click', () => {
  popup.style.display= "none";
})


// Modal
