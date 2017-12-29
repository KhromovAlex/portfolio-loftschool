(function () {

    const button = document.getElementById('nav-blog__button');
    const navBlock = document.querySelector('.nav-blog');
    const blog = document.querySelector('.blog-content');
    if (navBlock) {var topNavBlock = navBlock.getBoundingClientRect().top + window.pageYOffset;}


    function addEventButton() {
        let top = blog.getBoundingClientRect().top;
            if (top <= 200 && window.innerWidth < 769) {
                button.classList.add('nav-blog__button_active');
            } else {
                button.classList.remove('nav-blog__button_active');
            }
    }

    function showNavBlog() {

        button.addEventListener('click', function (e) {
            navBlock.classList.toggle("nav-blog_active");
        });

        window.addEventListener('scroll', function (e) {

            addEventButton();

            let scrollW = pageYOffset;
            let heightW = innerHeight / 2;

            if (heightW > scrollW) {
                navBlock.classList.remove("nav-blog_active");
            }

        });

        window.addEventListener('resize', function (e) {
            addEventButton();
            if(window.innerWidth > 768) {
                navBlock.classList.remove("nav-blog_active");
            }
        });

    }
    
    function setFixedNavBlock() {

        let scroll = pageYOffset;


        if (scroll > topNavBlock) {
            navBlock.classList.add('nav-blog_fixed');
        }

        if (scroll < topNavBlock) {
            navBlock.classList.remove('nav-blog_fixed');
        }

    }

    function menuInit() {

        if(navBlock && button && blog){
            showNavBlog();
            window.addEventListener('scroll',setFixedNavBlock);
        }
    }


    module.exports = menuInit;

}());