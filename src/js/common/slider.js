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
            slideNextNActive: document.querySelector('.carousel-slides__slide-next.next-active'),
            slidePreviousActive: document.querySelector('.carousel-slides__slide-previous.active'),
            slidePreviousNActive: document.querySelector('.carousel-slides__slide-previous.next-active'),
            slidesInfo: document.getElementsByClassName('slider-info__item'),
            slideInfoActive: document.querySelector('.slider-info__item.active'),
            slidePreviousOldActive: document.querySelector('.carousel-slides__slide-previous.old-active'),
            slideNextOldActive: document.querySelector('.carousel-slides__slide-next.old-active')
        };

    function nextLinkListener() {
        slider.nextLink.addEventListener('click',function (e) {

            if(slider.slideInfoActive.nextElementSibling){
                slider.slideInfoActive.classList.remove('active');
                slider.slideInfoActive.nextElementSibling.classList.add('active');
                slider.slideInfoActive = document.querySelector('.slider-info__item.active');
            }
            else{
                slider.slideInfoActive.classList.remove('active');
                slider.slidesInfo[0].classList.add('active');
                slider.slideInfoActive = document.querySelector('.slider-info__item.active');
            }

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
                slider.slidesMainActive.classList.remove('active');
                slider.slidesMainActive.nextElementSibling.classList.add('active');
                slider.slidesMainActive = document.querySelector('.carousel-main__slide.active');
            }
            else{
                slider.slidesMainActive.classList.remove('active');
                slider.slidesMain[0].classList.add('active');
                slider.slidesMainActive = document.querySelector('.carousel-main__slide.active');
            }

            if(slider.slidePreviousActive.nextElementSibling) {
                slider.slidePreviousActive.classList.remove('active');
                slider.slidePreviousActive.nextElementSibling.classList.add('active');
                slider.slidePreviousActive = document.querySelector('.carousel-slides__slide-previous.active');
            }
            else{
                slider.slidePreviousActive.classList.remove('active');
                slider.slidesPrevious[0].classList.add('active');
                slider.slidePreviousActive = document.querySelector('.carousel-slides__slide-previous.active');
            }

            if(slider.slideNextNActive.nextElementSibling){
                slider.slideNextNActive.classList.remove('next-active');
                slider.slideNextNActive.nextElementSibling.classList.add('next-active');
                slider.slideNextNActive = document.querySelector('.carousel-slides__slide-next.next-active');
            }
            else{
                slider.slidesNext[0].classList.add('next-active');
                slider.slideNextNActive.classList.remove('next-active');
                slider.slideNextNActive = document.querySelector('.carousel-slides__slide-next.next-active');
            }

            if(slider.slideNextOldActive.nextElementSibling){
                slider.slideNextOldActive.classList.remove('old-active');
                slider.slideNextOldActive.nextElementSibling.classList.add('old-active');
                slider.slideNextOldActive = document.querySelector('.carousel-slides__slide-next.old-active');
            }
            else{
                slider.slidesNext[0].classList.add('old-active');
                slider.slideNextOldActive.classList.remove('old-active');
                slider.slideNextOldActive = document.querySelector('.carousel-slides__slide-next.old-active');
            }

            if(slider.slidePreviousOldActive.nextElementSibling){
                slider.slidePreviousOldActive.classList.remove('old-active');
                slider.slidePreviousOldActive.nextElementSibling.classList.add('old-active');
                slider.slidePreviousOldActive = document.querySelector('.carousel-slides__slide-previous.old-active');
            }
            else{
                slider.slidePreviousOldActive.classList.remove('old-active');
                slider.slidesPrevious[0].classList.add('old-active');
                slider.slidePreviousOldActive = document.querySelector('.carousel-slides__slide-previous.old-active');
            }

            if(slider.slidePreviousNActive.nextElementSibling){
                slider.slidePreviousNActive.classList.remove('next-active');
                slider.slidePreviousNActive.nextElementSibling.classList.add('next-active');
                slider.slidePreviousNActive = document.querySelector('.carousel-slides__slide-previous.next-active');
            }
            else{
                slider.slidePreviousNActive.classList.remove('next-active');
                slider.slidesPrevious[0].classList.add('next-active');
                slider.slidePreviousNActive = document.querySelector('.carousel-slides__slide-previous.next-active');
            }

        })
    }

    function previousLinkListener() {
        slider.previousLink.addEventListener('click',function (e) {

            var
                slidesMainLast = slider.slidesMain[slider.slidesMain.length - 1],
                slidesPreviousLast = slider.slidesPrevious[slider.slidesPrevious.length - 1],
                slideInfoLast = slider.slidesInfo[slider.slidesInfo.length - 1],
                slidesNextLast = slider.slidesNext[slider.slidesNext.length - 1];

            if(slider.slideInfoActive.previousElementSibling){
                slider.slideInfoActive.classList.remove('active');
                slider.slideInfoActive.previousElementSibling.classList.add('active');
                slider.slideInfoActive = document.querySelector('.slider-info__item.active');
            }
            else{
                slider.slideInfoActive.classList.remove('active');
                slideInfoLast.classList.add('active');
                slider.slideInfoActive = document.querySelector('.slider-info__item.active');
            }

            if(slider.slidePreviousActive.previousElementSibling) {
                slider.slidePreviousActive.classList.remove('active');
                slider.slidePreviousActive.previousElementSibling.classList.add('active');
                slider.slidePreviousActive = document.querySelector('.carousel-slides__slide-previous.active');
            }
            else{
                slider.slidePreviousActive.classList.remove('active');
                slidesPreviousLast.classList.add('active');
                slider.slidePreviousActive = document.querySelector('.carousel-slides__slide-previous.active');
            }

            if(slider.slidesMainActive.previousElementSibling){
                slider.slidesMainActive.classList.remove('active');
                slider.slidesMainActive.previousElementSibling.classList.add('active');
                slider.slidesMainActive = document.querySelector('.carousel-main__slide.active');
            }
            else{
                slider.slidesMainActive.classList.remove('active');
                slidesMainLast.classList.add('active');
                slider.slidesMainActive = document.querySelector('.carousel-main__slide.active');
            }

            if(slider.slideNextActive.previousElementSibling){
                slider.slideNextActive.classList.remove('active');
                slider.slideNextActive.previousElementSibling.classList.add('active');
                slider.slideNextActive = document.querySelector('.carousel-slides__slide-next.active');
            }
            else{
                slider.slideNextActive.classList.remove('active');
                slidesNextLast.classList.add('active');
                slider.slideNextActive = document.querySelector('.carousel-slides__slide-next.active');
            }

            if(slider.slidePreviousNActive.previousElementSibling){
                slider.slidePreviousNActive.classList.remove('next-active');
                slider.slidePreviousNActive.previousElementSibling.classList.add('next-active');
                slider.slidePreviousNActive = document.querySelector('.carousel-slides__slide-previous.next-active');
            }
            else{
                slider.slidePreviousNActive.classList.remove('next-active');
                slidesPreviousLast.classList.add('next-active');
                slider.slidePreviousNActive = document.querySelector('.carousel-slides__slide-previous.next-active');
            }

            if(slider.slidePreviousOldActive.previousElementSibling){
                slider.slidePreviousOldActive.classList.remove('old-active');
                slider.slidePreviousOldActive.previousElementSibling.classList.add('old-active');
                slider.slidePreviousOldActive = document.querySelector('.carousel-slides__slide-previous.old-active');
            }
            else{
                slider.slidePreviousOldActive.classList.remove('old-active');
                slidesPreviousLast.classList.add('old-active');
                slider.slidePreviousOldActive = document.querySelector('.carousel-slides__slide-previous.old-active');
            }

            if(slider.slideNextOldActive.previousElementSibling){
                slider.slideNextOldActive.previousElementSibling.classList.add('old-active');
                slider.slideNextOldActive.classList.remove('old-active');
                slider.slideNextOldActive = document.querySelector('.carousel-slides__slide-next.old-active');
            }
            else{
                slider.slideNextOldActive.classList.remove('old-active');
                slidesNextLast.classList.add('old-active');
                slider.slideNextOldActive = document.querySelector('.carousel-slides__slide-next.old-active');
            }

            if(slider.slideNextNActive.previousElementSibling){
                slider.slideNextNActive.classList.remove('next-active');
                slider.slideNextNActive.previousElementSibling.classList.add('next-active');
                slider.slideNextNActive = document.querySelector('.carousel-slides__slide-next.next-active');
            }
            else{
                slider.slideNextNActive.classList.remove('next-active');
                slidesNextLast.classList.add('next-active');
                slider.slideNextNActive = document.querySelector('.carousel-slides__slide-next.next-active');
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