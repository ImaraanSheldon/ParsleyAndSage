document.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.getElementById('chek');
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            swapCSS('css/styleDark.css');
        } else {
            swapCSS('css/style.css');
        }
    });
});

function swapCSS(newCSS) {
    let stylesheet = document.getElementById('stylesheet');
    stylesheet.href = newCSS;
}

function artworkTemplate(){

}