// CSS swap (start)
document.addEventListener("DOMContentLoaded", function () {
    let checkbox = document.getElementById("chek");
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        swapCSS("css/styleDark.css");
      } else {
        swapCSS("css/style.css");
      }
    });
  });
  
  function swapCSS(newCSS) {
    let stylesheet = document.getElementById("stylesheet");
    stylesheet.href = newCSS;
  }
  
  function artworkTemplate() {}
  // CSS swap (end)

// Retrieve products from localStorage
let products = JSON.parse(localStorage.getItem("products"));

// Check if products exist
if (products) {
    console.log(products); // Or use the products data as needed
} else {
    console.error("No products found in localStorage");
}

// Example function to display products
function displayProducts(products) {
    const container = document.getElementById('product-container');
    if (!container) return;

    container.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        container.innerHTML += `
            <div class="col-lg-3 col-md-6">
        <div class="framework rounded-1">
          <img src='${product.artwork_Img}'>
          <div class="textContent text-center">
            <h4 class="mt-3">'${product.artwork_Name}'</h4>
            <h5>By: ${product.artwork_Artist}</h5>
            <h5>Price: $${product.artwork_Price}</h5>
            <div class="btn-card mb-2">
              <button src="#" class="shattered-glass-button" onclick='addToCart(${JSON.stringify(product)})'>${product.button_View}</button>
              <button src="#" class="shattered-glass-button" onclick='addToCart(${JSON.stringify(product)})'>${product.button_Add}</button>
            </div>
          </div>
        </div>
      </div>
        `;
    });
}

displayProducts(products);

// Add to cart function
function addToCart(product) {
    let checkoutItems = JSON.parse(localStorage.getItem('checkout')) || [];
    checkoutItems.push(product);
    localStorage.setItem('checkout', JSON.stringify(checkoutItems));
    document.querySelector('[counter]').textContent = checkoutItems.length || 0;
    console.log(product)
}

//   Date on footer
document.querySelector("[current-year]").textContent =
  new Date().getUTCFullYear();