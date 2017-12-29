(function () {

    const articlesBlog = document.querySelectorAll('.article-blog');

    function navScrollToAnchor() {
        for(let i = 0; articlesBlog.length;i++){
            let elem = articlesBlog[i];
            let scroll = window.pageYOffset;
            let rectArticlesBlog = elem.getBoundingClientRect();
            let topArticlesBlog = rectArticlesBlog.top + scroll - 100;
            let bottomArticlesBlog = rectArticlesBlog.bottom + scroll;
            let id = elem.getAttribute('id');

            if( scroll > topArticlesBlog && scroll < bottomArticlesBlog){
                document.querySelector('.nav-blog__link.nav-blog__link_active').classList.remove('nav-blog__link_active');
                document.querySelector('.nav-blog__link[href="#'+id+'"]').classList.add('nav-blog__link_active');
            }

        }
    }

    function navScrollToAnchorListener() {
        if(articlesBlog){
            window.addEventListener('scroll',navScrollToAnchor);
        }
    }

    module.exports = navScrollToAnchorListener;

}());