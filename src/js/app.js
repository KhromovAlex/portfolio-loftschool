const slider = require("./common/slider");
const flip = require("./common/flipper");
const fullmenu = require("./common/fullmenu");
const parallax = require("./common/parallax");
const parallaxScroll = require("./common/parallaxScroll");
window.addEventListener("load", () => {
    const navBlog = require("./common/nav-blog");
    navBlog();
});
const navScrollActivation = require("./common/navScrollActivation");
const preload = require("./common/preload");
const mail = require("./common/mail");
const scrollTo = require("./common/scrollTo");

slider();
flip();
fullmenu();
parallax();
parallaxScroll();
navScrollActivation();
preload();
mail();
scrollTo();