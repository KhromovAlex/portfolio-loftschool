const block = document.getElementsByClassName('full-screen-menu');
const btn = document.getElementsByClassName('header__nav-link');


function addEventMenu() {
    btn[0].addEventListener('click', function(e){
        block[0].classList.toggle("full-screen-menu_active");
        btn[0].classList.toggle('header__nav-link_active');

    });

}

function menuInit() {
    if(block[0] || btn[0]){
        addEventMenu();
    }
}

module.exports = menuInit;