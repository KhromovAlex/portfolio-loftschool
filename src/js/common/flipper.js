const block = document.getElementById('flipper-welcome');
const btnLoginWelcome = document.getElementById('link-login-welcome');
const buttonGoHome = document.getElementById('go-home-welcome');
const bod = document.body;

function addEventFlip() {
    btnLoginWelcome.addEventListener('click', function(e){
        block.classList.add("go-to-auth");
        btnLoginWelcome.classList.add("hidelink");
    });

    bod.addEventListener('click', function (e) {
        if (e.target.id === 'welcome-page' || e.target.id === 'header-welcome') {
            block.classList.remove("go-to-auth");
            btnLoginWelcome.classList.remove("hidelink");
            if(window.location.hash === '#auth'){
                window.location.hash = '';
            }
        }
    });

    buttonGoHome.addEventListener('click', function (e) {
        block.classList.remove("go-to-auth");
        btnLoginWelcome.classList.remove("hidelink");
        if(window.location.hash === '#auth'){
            window.location.hash = '';
        }
    });
}

function linkAuth() {
    if(window.location.hash === '#auth'){
        block.classList.add("go-to-auth");
        btnLoginWelcome.classList.add("hidelink");
    }
}

function flipInit() {
    if(block || btnLoginWelcome || buttonGoHome){
        addEventFlip();
    }
    linkAuth();
}

module.exports = flipInit;