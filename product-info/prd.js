//slider
let thumbnails = document.getElementsByClassName('thumbnail')
    let activeImages = document.getElementsByClassName('active')

    for (var i=0; i < thumbnails.length; i++){

        thumbnails[i].addEventListener('click', function(){
            console.log(activeImages)
            
            if (activeImages.length > 0){
                activeImages[0].classList.remove('active')
            }
            

            this.classList.add('active')
            document.getElementById('featured').src = this.src
        })
    }


    let buttonRight = document.getElementById('slideRight');
    let buttonLeft = document.getElementById('slideLeft');

    buttonLeft.addEventListener('click', function(){
        document.getElementById('slider').scrollLeft -= 220
    })

    buttonRight.addEventListener('click', function(){
        document.getElementById('slider').scrollLeft += 220
    })


// Open modal info
var modalInfo = document.querySelector('.modal-tech');
var btnOpen = document.querySelector('.btn-show-more');
var btnClose = document.querySelector('.btn-close-modal');
var btnClose2 = document.querySelector('.close-item');


btnOpen.onclick = function(){
    modalInfo.style.display = "block";
    document.querySelector("body").style.overflow = 'hidden';
}

btnClose.onclick = function(){
    modalInfo.style.display = "none";
    document.querySelector("body").style.overflow = 'visible';

}

btnClose2.onclick = function(){
    modalInfo.style.display = "none";
    document.querySelector("body").style.overflow = 'visible';

}

window.onclick = function(event) {
    if (event.target == modalInfo) {
    modalInfo.style.display = "none";
    document.querySelector("body").style.overflow = 'visible';
    }
  }