(function () {

const block = document.getElementsByClassName('full-screen-menu');
const button = document.getElementsByClassName('hamburger-header');


function addEventMenu() {
    button[0].addEventListener('click', function(e){
        block[0].classList.toggle("full-screen-menu_active");
        button[0].classList.toggle('hamburger-header_active');

    });

}

function menuInit() {
    if(block[0] || button[0]){
        addEventMenu();
    }
}

module.exports = menuInit;

})();