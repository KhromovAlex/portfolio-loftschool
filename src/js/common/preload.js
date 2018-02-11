(function() {
  let imagesAll = document.images,
    imagesTotalCount = imagesAll.length,
    imagesLoadCount = 0,
    preload = document.getElementById("page-preload"),
    percDisplay = document.getElementById("load-perc"),
    content = document.getElementById("welcome-page");

  for (let i = 0; i < imagesTotalCount; i++) {
    let imgClone = new Image();
    imgClone.onload = imgLoaded;
    imgClone.onerror = imgLoaded;
    imgClone.src = imagesAll[i].src;
  }

  function imgLoaded() {
    imagesLoadCount++;
    if (percDisplay) {
      percDisplay.innerHTML = (100 / imagesTotalCount * imagesLoadCount) << 0;
      if (100 / imagesTotalCount * imagesLoadCount >= 100) {
        percDisplay.innerHTML = "100";
      }
      if (imagesLoadCount >= imagesTotalCount) {
        setTimeout(function() {
          if (!preload.classList.contains("done")) {
            preload.classList.add("page-preload_done");
            content.classList.add("welcome-page_show");
          }
        }, 500);
      }
    }
  }

  function preloadInit() {
    if (preload && percDisplay) {
      imgLoaded();
    }
  }

  module.exports = preloadInit;
})();
