(function () {

const flipBlock = document.getElementById('flipper-welcome');
const buttonLoginWelcome = document.getElementById('link-login-welcome');
const buttonGoHome = document.getElementById('go-home-welcome');
const front = document.getElementsByClassName('front');
const back = document.getElementsByClassName('back');
const body = document.body;

function goHome() {
    flipBlock.classList.remove("go-to-auth");
    buttonLoginWelcome.classList.remove("hidelink");
    front[0].classList.remove("front_opacity");
    back[0].classList.add("back_opacity");
    if(window.location.hash === '#auth'){
        window.location.hash = '';
    }
}

function goAuth() {
    flipBlock.classList.add("go-to-auth");
    buttonLoginWelcome.classList.add("hidelink");
    front[0].classList.add("front_opacity");
    back[0].classList.remove("back_opacity");
}

function addEventFlip() {
    buttonLoginWelcome.addEventListener('click', function(e){
        goAuth();
    });

    body.addEventListener('click', function (e) {
        if (e.target.id === 'welcome-page' || e.target.id === 'header-welcome') {
            goHome();
        }
    });

    buttonGoHome.addEventListener('click', function (e) {
        goHome();
    });
}

function linkAuth() {
    if(window.location.hash === '#auth'){
        goAuth();
    }
}

function flipInit() {
    if(flipBlock || buttonLoginWelcome || buttonGoHome){
        addEventFlip();
    }
    linkAuth();
}

module.exports = flipInit;

})();