(function () {

    const layers = document.getElementsByClassName('parallax__layer');

    function moveLayers(e) {
        const centerX = (window.innerWidth / 2) - e.pageX;
        const centerY = (window.innerHeight / 2) - e.pageY;
        let i =0;

        for (let layer of layers) {
            const divider = i / 50;
            const positionX = centerX * divider;
            const positionY = centerY * divider;

            layer.style.transform = `translate(${positionX}px, ${positionY}px)`;

            i++;
        }
    }

    function parallaxInit() {
        window.addEventListener('mousemove',moveLayers);
    }

    module.exports = parallaxInit;

})();