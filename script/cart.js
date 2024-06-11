// Retrieve cart items from localStorage
let checkoutItems = [];

// Load items from localStorage if they exist
const storedItems = localStorage.getItem('checkout');
if (storedItems) {
    try {
        checkoutItems = JSON.parse(storedItems);
    } catch (error) {
        console.error('Error parsing checkout items from localStorage:', error);
    }
}

// Function to display products in the cart
function displayCartProducts() {
    let cartProductsContainer = document.getElementById('cartProducts');
    cartProductsContainer.innerHTML = ''; // Clear previous content
    
    checkoutItems.forEach((product, index) => {
        let productElement = document.createElement('div');
        productElement.classList.add('product');
        
        // Add product details to the product element
        productElement.innerHTML = `
            <img src="${product.artwork_Img}" alt="${product.artwork_Name}">
            <h3>${product.artwork_Name}</h3>
            <p>By: ${product.artwork_Artist}</p>
            <p>Price: $${product.artwork_Price}</p>
            <button class="delete-button" onclick="deleteProduct(${index})">Delete</button>
        `;
        
        cartProductsContainer.appendChild(productElement);
    });
}

// Function to delete a product from the cart
function deleteProduct(index) {
    checkoutItems.splice(index, 1);
    localStorage.setItem('checkout', JSON.stringify(checkoutItems));
    displayCartProducts(); // Refresh the display
    console.log('Product deleted. Updated checkout items:', checkoutItems);
}
// Function to handle the purchase process
function purchase() {
    if (checkoutItems.length === 0) {
        console.error('Cannot proceed with purchase: Cart is empty.');
        alert('Your cart is empty. Please add items before proceeding with the purchase.');
        return;
    }

    // Ask for confirmation before proceeding with the purchase
    const confirmPurchase = confirm('Are you sure you want to proceed with the purchase?');
    if (!confirmPurchase) {
        console.log('Purchase canceled.');
        return;
    }

    // Simulate purchase process
    // For demonstration, let's just clear the cart items
    try {
        checkoutItems = [];
        localStorage.removeItem('checkout');
        displayCartProducts(); // Refresh the display
        console.log('Purchase successful. Cart items cleared.');
        alert('Thank you for your purchase!');
    } catch (error) {
        console.error('Error processing purchase:', error);
        alert('There was an error processing your purchase. Please try again later.');
    }
}

// Call the purchase function when the purchase button is clicked
const purchaseButton = document.getElementById('purchaseButton');
purchaseButton.addEventListener('click', purchase);


// Call the function to display cart products
displayCartProducts();