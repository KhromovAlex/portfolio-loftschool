(function () {

const block = document.getElementsByClassName('full-screen-menu');
const button = document.getElementById('hamburger-header');


function addEventMenu() {
    button.addEventListener('click', function(e){
        block[0].classList.toggle("full-screen-menu_active");
        button.classList.toggle('hamburger-header_active');

    });

}

function menuInit() {
    if(block[0] || button){
        addEventMenu();
    }
}

module.exports = menuInit;

})();