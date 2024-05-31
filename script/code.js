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


// let first_number = 15;
// let second_number = 17;

// // using a temporary variable
// let temporary = first_number;
// first_number = second_number;
// second_number = temporary;
// console.log("first number =", first_number);
// console.log("second number =", second_number);


// // Array destructuring
// [first_number, second_number] = [second_number, first_number];
// console.log("first_number =", first_number);
// console.log("second_number =", second_number);

// // using arithmetic
// first_number = first_number + second_number;
// second_number = first_number - second_number;
// first_number = first_number - second_number;
// console.log("first number =", first_number);
// console.log("second number =", second_number);