const block = document.getElementById('flipper-welcome');
const buttonAuth = document.getElementById('link-login-welcome');
const buttonGoHome = document.getElementById('go-home-welcome');
const bod = document.body;

function addEventFlip() {
    buttonAuth.addEventListener('click', function(e){
        block.classList.add("go-to-auth");
        buttonAuth.classList.add("hidelink");
    });

    bod.addEventListener('click', function (e) {
        if (e.target.id === 'welcome-page' || e.target.id === 'header-welcome') {
            block.classList.remove("go-to-auth");
            buttonAuth.classList.remove("hidelink");
        }
    });

    buttonGoHome.addEventListener('click', function (e) {
        block.classList.remove("go-to-auth");
        buttonAuth.classList.remove("hidelink");
    });
}

function flipInit() {
    if(block || buttonAuth || buttonGoHome){
        addEventFlip();
    }
}

module.exports = flipInit;