(function () {

    const background = document.getElementsByClassName('parallax-scroll__layer');

    function moveLayers(block,windowScroll,strafeAmount) {
        let strafe = windowScroll / -strafeAmount + '%';
        let style = block.style;
        style.transform = `translate3d(0,${strafe},0)`;
    }

    function parallaxScrollInit() {
        window.addEventListener('scroll',function () {
            let wScroll = window.pageYOffset;
            moveLayers(background[0],wScroll,30);
        });
    }

    module.exports = parallaxScrollInit;

})();