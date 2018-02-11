(function () {
  const buttonsBack = document.querySelector(".previous-slide .carousel-slides"),
    buttonsNext = document.querySelector(".next-slide .carousel-slides"),
    view = document.querySelector(".carousel-main"),
    info = document.querySelector(".slider-info__list");

  if (info) {
    info.firstElementChild.classList.add("active");
  }
  if (view) {
    view.firstElementChild.classList.add("active");
  }
  if (buttonsNext) {
    buttonsNext.firstElementChild.classList.add("old-active");
    buttonsNext.firstElementChild.nextElementSibling.classList.add("active");
    buttonsNext.firstElementChild.nextElementSibling.nextElementSibling.classList.add(
      "next-active"
    );
  }
  if (buttonsBack) {
    buttonsBack.lastElementChild.classList.add("active");
    buttonsBack.firstElementChild.classList.add("old-active");
    buttonsBack.lastElementChild.previousElementSibling.classList.add(
      "next-active"
    );
  }

  let slider = {
    previousLink: document.getElementById("previous"),
    nextLink: document.getElementById("next")
  };

  function nextLinkListener() {
    slider.nextLink.addEventListener("click", e => {

      let slideTo = function (activeElem, elem, classForActiveElem, activeClass) {
        if (activeElem.nextElementSibling) {
          activeElem.nextElementSibling.classList.add(activeClass);
          activeElem.classList.remove(activeClass);
          activeElem = document.querySelector(classForActiveElem);
        } else {
          elem.classList.add(activeClass);
          activeElem.classList.remove(activeClass);
          activeElem = document.querySelector(classForActiveElem);
        }
      }

      let slideInfoActive = document.querySelector(".slider-info__item.active"),
        slidesInfoFirst = document.querySelector(".slider-info__item"),
        slideNextActive = document.querySelector(
          ".carousel-slides__slide-next.active"
        ),
        slidesNextFirst = document.querySelector(
          ".carousel-slides__slide-next"
        ),
        slidesMainActive = document.querySelector(".carousel-main__slide.active"),
        slidesMainFirst = document.querySelector(".carousel-main__slide"),
        slidePreviousActive = document.querySelector(
          ".carousel-slides__slide-previous.active"
        ),
        slidesPreviousFirst = document.querySelector(
          ".carousel-slides__slide-previous"
        ),
        slideNextNActive = document.querySelector(
          ".carousel-slides__slide-next.next-active"
        ),
        slideNextOldActive = document.querySelector(
          ".carousel-slides__slide-next.old-active"
        ),
        slidePreviousOldActive = document.querySelector(
          ".carousel-slides__slide-previous.old-active"
        ),
        slidePreviousNActive = document.querySelector(
          ".carousel-slides__slide-previous.next-active"
        );

      slideTo(slideInfoActive, slidesInfoFirst, ".slider-info__item.active", "active");
      slideTo(slideNextActive, slidesNextFirst, ".carousel-slides__slide-next.active", "active");
      slideTo(slidesMainActive, slidesMainFirst, ".carousel-main__slide.active", "active");
      slideTo(slidePreviousActive, slidesPreviousFirst, ".carousel-slides__slide-previous.active", "active");
      slideTo(slideNextNActive, slidesNextFirst, ".carousel-slides__slide-next.next-active", "next-active");
      slideTo(slideNextOldActive, slidesNextFirst, ".carousel-slides__slide-next.old-active", "old-active");
      slideTo(slidePreviousOldActive, slidesPreviousFirst, ".carousel-slides__slide-previous.old-active", "old-active");
      slideTo(slidePreviousNActive, slidesPreviousFirst, ".carousel-slides__slide-previous.next-active", "next-active");
    });
  }

  function previousLinkListener() {
    slider.previousLink.addEventListener("click", e => {

      let slideTo = function (activeElem, elem, classForActiveElem, activeClass) {
        if (activeElem.previousElementSibling) {
          activeElem.previousElementSibling.classList.add(activeClass);
          activeElem.classList.remove(activeClass);
          activeElem = document.querySelector(classForActiveElem);
        } else {
          elem.classList.add(activeClass);
          activeElem.classList.remove(activeClass);
          activeElem = document.querySelector(classForActiveElem);
        }
      }

      let slideInfoActive = document.querySelector(".slider-info__item.active"),
        slideNextActive = document.querySelector(
          ".carousel-slides__slide-next.active"
        ),
        slidesMainActive = document.querySelector(".carousel-main__slide.active"),
        slidePreviousActive = document.querySelector(
          ".carousel-slides__slide-previous.active"
        ),
        slideNextNActive = document.querySelector(
          ".carousel-slides__slide-next.next-active"
        ),
        slideNextOldActive = document.querySelector(
          ".carousel-slides__slide-next.old-active"
        ),
        slidePreviousOldActive = document.querySelector(
          ".carousel-slides__slide-previous.old-active"
        ),
        slidePreviousNActive = document.querySelector(
          ".carousel-slides__slide-previous.next-active"
        ),
        slidesMain = document.querySelectorAll(".carousel-main__slide"),
        slidesPrevious =
          document.querySelectorAll(".carousel-slides__slide-previous"),
        slideInfo = document.querySelectorAll(".slider-info__item"),
        slidesNext = document.querySelectorAll(".carousel-slides__slide-next"),
        slidesMainLast = slidesMain[slidesMain.length - 1],
        slidesPreviousLast =
          slidesPrevious[slidesPrevious.length - 1],
        slideInfoLast = slideInfo[slideInfo.length - 1],
        slidesNextLast = slidesNext[slidesNext.length - 1];

      slideTo(slideInfoActive, slideInfoLast, ".slider-info__item.active", "active");
      slideTo(slidePreviousActive, slidesPreviousLast, ".carousel-slides__slide-previous.active", "active");
      slideTo(slidesMainActive, slidesMainLast, ".carousel-main__slide.active", "active");
      slideTo(slideNextActive, slidesNextLast, ".carousel-slides__slide-next.active", "active");
      slideTo(slidePreviousNActive, slidesPreviousLast, ".carousel-slides__slide-previous.next-active", "next-active");
      slideTo(slidePreviousOldActive, slidesPreviousLast, ".carousel-slides__slide-previous.old-active", "old-active");
      slideTo(slideNextOldActive, slidesNextLast, ".carousel-slides__slide-next.old-active", "old-active");
      slideTo(slideNextNActive, slidesNextLast, ".carousel-slides__slide-next.next-active", "next-active");
    });
  }

  function sliderInit() {
    if (slider.nextLink && slider.previousLink) {
      nextLinkListener();
      previousLinkListener();
    }
  }

  module.exports = sliderInit;
})();
