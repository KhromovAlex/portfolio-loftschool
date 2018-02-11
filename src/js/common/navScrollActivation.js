(function () {

    const articlesBlog = document.querySelectorAll('.article-blog');

    function getCoords(elem) { // кроме IE8-
        var box = elem.getBoundingClientRect();
      
        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        };
      
      }

    function navScrollToAnchor() {
        articlesBlog.forEach(elem => {
            let scroll = pageYOffset;
            let topArticlesBlog = getCoords(elem).top - 100;
            let bottomArticlesBlog = getCoords(elem).top + elem.offsetHeight;
            let id = elem.getAttribute('id');
            if (scroll > topArticlesBlog && scroll < bottomArticlesBlog) {
                document.querySelector('.nav-blog__link.nav-blog__link_active').classList.remove('nav-blog__link_active');
                document.querySelector('.nav-blog__link[href="#' + id + '"]').classList.add('nav-blog__link_active');
            }
        });
    }

    function navScrollToAnchorListener() {
        if (articlesBlog) {
            document.addEventListener('scroll', navScrollToAnchor);
        }
    }

    module.exports = navScrollToAnchorListener;

}());