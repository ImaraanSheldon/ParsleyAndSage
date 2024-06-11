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
function displayCartProducts() {
    let cartProductsContainer = document.getElementById('cartProducts');
    cartProductsContainer.innerHTML = ''; // Clear previous content
    
    // Create a table element
    let table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Artist</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
        </tr>
    `;

    // Aggregate items by name, artist, and price
    let aggregatedItems = {};

    checkoutItems.forEach((product, index) => {
        let key = `${product.artwork_Name}|${product.artwork_Artist}|${product.artwork_Price}`;
        if (aggregatedItems[key]) {
            aggregatedItems[key].quantity += 1;
        } else {
            aggregatedItems[key] = { ...product, quantity: 1, index: index };
        }
    });

    let totalPrice = 0;

    Object.keys(aggregatedItems).forEach(key => {
        let product = aggregatedItems[key];
        let row = document.createElement('tr');
        
        // Add product details to the row
        row.innerHTML = `
            <td><img class="cart-img" src="${product.artwork_Img}" alt="${product.artwork_Name}" width="50"></td>
            <td>${product.artwork_Name}</td>
            <td>${product.artwork_Artist}</td>
            <td>$${product.artwork_Price}</td>
            <td>${product.quantity}</td>
            <td><button class="delete-button" onclick="deleteProduct(${product.index})">Delete</button></td>
        `;
        
        table.appendChild(row);
        totalPrice += product.artwork_Price * product.quantity;
    });

    // Append the table to the container
    cartProductsContainer.appendChild(table);
    
    // Display the total price
    let totalPriceElement = document.createElement('p');
    totalPriceElement.innerHTML = `Total Price: $${totalPrice}`;
    cartProductsContainer.appendChild(totalPriceElement);
}

function deleteProduct(index) {
    // Remove the product from the checkoutItems array
    checkoutItems.splice(index, 1);
    // Re-display the cart products
    displayCartProducts();
}

// Call the function to display products on page load
displayCartProducts();


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