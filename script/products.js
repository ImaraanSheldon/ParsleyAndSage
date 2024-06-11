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
 if (!products) {
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
                         <h4 class="mt-3">${product.artwork_Name}</h4>
                         <h5>By: ${product.artwork_Artist}</h5>
                         <h5>Price: $${product.artwork_Price}</h5>
                         <div class="btn-card mb-2">
                             <button class="shattered-glass-button" onclick='addToCart(${JSON.stringify(product)})'>${product.button_View}</button>
                             <button type="button" class="shattered-glass-button" onclick='addToCart(${JSON.stringify(product)})'>${product.button_Add}</button>
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
     console.log(product);
 }

 // Search function
 document.getElementById('searchInput').addEventListener('input', function() {
     const searchTerm = this.value.toLowerCase();
     const filteredProducts = products.filter(product => {
         return product.artwork_Name.toLowerCase().includes(searchTerm) ||
                product.artwork_Artist.toLowerCase().includes(searchTerm);
     });
     displayProducts(filteredProducts);
 });

 // Sort function
 document.getElementById('sortSelect').addEventListener('change', function() {
     const sortBy = this.value;
     let sortedProducts;
    //  console.log(sortBy)
     if (sortBy === 'default') {
         sortedProducts = products.slice().sort((a, b) => a.id - b.id);
     }else if(sortBy === 'name'){
            sortedProducts = products.slice().sort((a, b) => a.artwork_Name.localeCompare(b.artwork_Name));
     }else if (sortBy === 'priceDes') {
         sortedProducts = products.slice().sort((a, b) => b.artwork_Price - a.artwork_Price);
     }else if(sortBy === 'priceAsc'){
        sortedProducts = products.slice().sort((a, b) => a.artwork_Price - b.artwork_Price);
     }
     displayProducts(sortedProducts);
     
 });

//   Date on footer
document.querySelector("[current-year]").textContent =
  new Date().getUTCFullYear();