(function () {

const flipBlock = document.getElementById('flipper-welcome');
const buttonLoginWelcome = document.getElementById('link-login-welcome');
const buttonGoHome = document.getElementById('go-home-welcome');
const body = document.body;

function goHome() {
    flipBlock.classList.remove("go-to-auth");
    buttonLoginWelcome.classList.remove("hidelink");
    if(window.location.hash === '#auth'){
        window.location.hash = '';
    }
}

function addEventFlip() {
    buttonLoginWelcome.addEventListener('click', function(e){
        flipBlock.classList.add("go-to-auth");
        buttonLoginWelcome.classList.add("hidelink");
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
        flipBlock.classList.add("go-to-auth");
        buttonLoginWelcome.classList.add("hidelink");
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