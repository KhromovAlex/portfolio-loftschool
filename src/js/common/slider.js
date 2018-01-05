(function () {
    const
        slider = {
            previousLink: document.getElementById('previous'),
            nextLink: document.getElementById('next'),
            slidesMain: document.getElementsByClassName('carousel-main__slide'),
            slidesMainActive: document.querySelector('.carousel-main__slide.active'),
            slidesPrevious: document.getElementsByClassName('carousel-slides__slide-previous'),
            slidesNext: document.getElementsByClassName('carousel-slides__slide-next'),
            slideNextActive: document.querySelector('.carousel-slides__slide-next.active'),
            slidePreviousActive: document.querySelector('.carousel-slides__slide-previous.active')
        };

    function nextLinkListener() {
        slider.nextLink.addEventListener('click',function (e) {

            if(slider.slideNextActive.nextElementSibling){
                slider.slideNextActive.nextElementSibling.classList.add('active');
                slider.slideNextActive.classList.remove('active');
                slider.slideNextActive = document.querySelector('.carousel-slides__slide-next.active');
            }
            else{
                slider.slidesNext[0].classList.add('active');
                slider.slideNextActive.classList.remove('active');
                slider.slideNextActive = document.querySelector('.carousel-slides__slide-next.active');
            }


            if(slider.slidesMainActive.nextElementSibling){
                slider.slidesMainActive.nextElementSibling.classList.add('active');
                slider.slidesMainActive.classList.remove('active');
                slider.slidesMainActive = document.querySelector('.carousel-main__slide.active');
            }
            else{
                slider.slidesMain[0].classList.add('active');
                slider.slidesMainActive.classList.remove('active');
                slider.slidesMainActive = document.querySelector('.carousel-main__slide.active');
            }

            if(slider.slidePreviousActive.nextElementSibling) {
                slider.slidePreviousActive.nextElementSibling.classList.add('active');
                slider.slidePreviousActive.classList.remove('active');
                slider.slidePreviousActive = document.querySelector('.carousel-slides__slide-previous.active');
            }
            else{
                slider.slidesPrevious[0].classList.add('active');
                slider.slidePreviousActive.classList.remove('active');
                slider.slidePreviousActive = document.querySelector('.carousel-slides__slide-previous.active');
            }
        })
    }

    function previousLinkListener() {
        slider.previousLink.addEventListener('click',function (e) {

            var
                slidesMainLast = slider.slidesMain[slider.slidesMain.length - 1],
                slidesPreviousLast = slider.slidesPrevious[slider.slidesPrevious.length - 1],
                slidesNextLast = slider.slidesNext[slider.slidesNext.length - 1];

            if(slider.slidePreviousActive.previousElementSibling) {
                slider.slidePreviousActive.previousElementSibling.classList.add('active');
                slider.slidePreviousActive.classList.remove('active');
                slider.slidePreviousActive = document.querySelector('.carousel-slides__slide-previous.active');
            }
            else{
                slidesPreviousLast.classList.add('active');
                slider.slidePreviousActive.classList.remove('active');
                slider.slidePreviousActive = document.querySelector('.carousel-slides__slide-previous.active');
            }

            if(slider.slidesMainActive.previousElementSibling){
                slider.slidesMainActive.previousElementSibling.classList.add('active');
                slider.slidesMainActive.classList.remove('active');
                slider.slidesMainActive = document.querySelector('.carousel-main__slide.active');
            }
            else{
                slidesMainLast.classList.add('active');
                slider.slidesMainActive.classList.remove('active');
                slider.slidesMainActive = document.querySelector('.carousel-main__slide.active');
            }

            if(slider.slideNextActive.previousElementSibling){
                slider.slideNextActive.previousElementSibling.classList.add('active');
                slider.slideNextActive.classList.remove('active');
                slider.slideNextActive = document.querySelector('.carousel-slides__slide-next.active');
            }
            else{
                slidesNextLast.classList.add('active');
                slider.slideNextActive.classList.remove('active');
                slider.slideNextActive = document.querySelector('.carousel-slides__slide-next.active');
            }

        })
    }



function sliderInit(){
    if (slider.nextLink && slider.previousLink){
        nextLinkListener();
        previousLinkListener();
    }
}


module.exports = sliderInit;

}());