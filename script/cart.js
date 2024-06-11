// Add to cart function
function addToCart(product) {
    let checkoutItems = JSON.parse(localStorage.getItem('checkout')) || [];
    checkoutItems.push(product);
    localStorage.setItem('checkout', JSON.stringify(checkoutItems));
    document.querySelector('[counter]').textContent = checkoutItems.length || 0;
    console.log(product);
}

// Function to view cart
function viewCart() {
    let checkoutItems = JSON.parse(localStorage.getItem('checkout')) || [];
    alert
}

// Update the cart counter on page load
document.addEventListener('DOMContentLoaded', () => {
    let checkoutItems = JSON.parse(localStorage.getItem('checkout')) || [];
    document.querySelector('[counter]').textContent = checkoutItems.length || 0;
});