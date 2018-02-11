(function () {
  const button = document.getElementById("nav-blog__button");
  const navBlock = document.querySelector(".nav-blog");
  const blog = document.querySelector(".article-wrap");

  function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };

  }  

  function addEventButton() {
    let top = getCoords(blog).top,
      scroll = pageYOffset;
    if (top <= (scroll + 200) && window.innerWidth < 769) {
      button.classList.add("nav-blog__button_active");
    } else {
      button.classList.remove("nav-blog__button_active");
    }
  }

  function showNavBlog() {
    button.addEventListener("click", function (e) {
      navBlock.classList.toggle("nav-blog_active");
    });

    window.addEventListener("scroll", function (e) {
      addEventButton();

      let scrollW = pageYOffset;
      let heightW = innerHeight / 2;

      if (heightW > scrollW) {
        navBlock.classList.remove("nav-blog_active");
      }
    });

    window.addEventListener("resize", function (e) {
      addEventButton();
      if (window.innerWidth > 768) {
        navBlock.classList.remove("nav-blog_active");
      }
    }, false);
  }

  function setFixedNavBlock() {
    var topNavBlock = getCoords(navBlock).top;
    let Ascroll = () => {      
      if (pageYOffset > topNavBlock) {
        navBlock.classList.add("nav-blog_fixed");
      } else {
        navBlock.classList.remove("nav-blog_fixed");
      }
    };

    window.addEventListener('scroll', Ascroll, false);
    

    
  }

  function menuInit() {
    if (navBlock && button && blog) {
      showNavBlog();
      setFixedNavBlock();      
    }
  }

  module.exports = menuInit;
})();
