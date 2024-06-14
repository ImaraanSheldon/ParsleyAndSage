

// Retrieve products from localStorage or initialize if not present
let products = JSON.parse(localStorage.getItem("products")) || [
  {
    artwork_Artist
: 
"Gagik Tadevosyan",
artwork_Description
: 
"Abandoned Ship by Gagik Tadevosyan is a captivating artwork that transports viewers to a desolate realm where time seems to have stopped. Through meticulous attention to detail and masterful use of light and shadow, Tadevosyan depicts a weathered vessel stranded in a barren landscape, evoking a sense of abandonment and mystery. The absence of life within the scene invites contemplation of the ship`s hidden stories and histories, while the artist`s skillful composition and texture add depth and dimension, drawing viewers into a world where reality and imagination merge. With its haunting beauty and thought-provoking themes, Abandoned Ship stands as a testament to Tadevosyan`s talent for evoking emotion and prompting reflection through his art.",
artwork_Img
: 
"https://imaraansheldon.github.io/allImages/ColorMyWorld/Impressionism/abandonedShip_GagikTadevosyan.jpg",
artwork_Name
: 
"Abandoned Ship",
artwork_Price
: 
4000,
artwork_Target
: 
"Highlights",
artwork_Theme
: 
"Impressionism",
button_Add
: 
"Add to Cart",
button_View
: 
"View Artwork",
id
: 
1
  }
];

// Save products to localStorage
localStorage.setItem("products", JSON.stringify(products));

// Function to display recent products
function recentProducts() {
  try {
      let filterHighlights = products.filter((X) => {
          return X.artwork_Target === "Highlights";
      });
      let content = document.querySelector("[data-container]");
      let modalContainer = document.getElementById("artworkModals");

      filterHighlights.forEach((product, index) => {
          content.innerHTML += `
          <div class="col-sm-2 d-sm-block d-md-none"></div>
          <div class="col-lg-3 col-md-6 col-sm-8">
            <div class="framework rounded-1">
              <img src='${product.artwork_Img}'>
              <div class="textContent text-center">
                <h4 class="mt-3">'${product.artwork_Name}'</h4>
                <h5>By: ${product.artwork_Artist}</h5>
                <h5>Price: $${product.artwork_Price}</h5>
                <div class="btn-card mb-2">
                  <button class="shattered-glass-button" data-bs-toggle="modal" data-bs-target="#modal${product.id}">${product.button_View}</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2 d-sm-block d-md-none"></div>
          `;

          modalContainer.innerHTML += `
          <div class="modal fade text-center" id="modal${product.id}" tabindex="-1" aria-labelledby="modalLabel${product.id}" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalLabel${product.id}">${product.artwork_Name} by ${product.artwork_Artist}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img class="modal-img" src="${product.artwork_Img}" alt="${product.artwork_Name}" class="img-fluid">
                  <p>${product.artwork_Description}</p>
                  <p><strong>Price:</strong> $${product.artwork_Price}</p>
                  <p><strong>Theme:</strong> ${product.artwork_Theme}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#modal${filterHighlights[(index + 1) % filterHighlights.length].id}">Next</button>
                  <a href="pages/products.html" class="btn btn-secondary">Go to Products Page</a>
                </div>
              </div>
            </div>
          </div>
          `;
      });
  } catch (e) {
      let wrapper = document.querySelector("[data-container]");
      wrapper.innerHTML = "Please Contact Our Administrator";
      setTimeout(() => {
          location.reload(), 1000000;
      });
  }
}
recentProducts();

// Function to display recent products
function linganiProducts() {
  try {
      let showcase = products.filter((X) => {
          return X.artwork_Target === "showcase";
      });
      let wrapper = document.querySelector("[data-artist]");
      let modalContainer = document.getElementById("artworkModals");

      showcase.forEach((product, index) => {
          wrapper.innerHTML += `
          <div class="col-sm-2 d-sm-block d-md-none"></div>
          <div class="col-lg-3 col-md-6 col-sm-8">
            <div class="framework rounded-1">
              <img src='${product.artwork_Img}'>
              <div class="textContent text-center">
                <h4 class="mt-3">'${product.artwork_Name}'</h4>
                <h5>By: ${product.artwork_Artist}</h5>
                <h5>Price: $${product.artwork_Price}</h5>
                <div class="btn-card mb-2">
                  <button class="shattered-glass-button" data-bs-toggle="modal" data-bs-target="#modal${product.id}">${product.button_View}</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2 d-sm-block d-md-none"></div>
          `;

          modalContainer.innerHTML += `
          <div class="modal fade text-center" id="modal${product.id}" tabindex="-1" aria-labelledby="modalLabel${product.id}" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalLabel${product.id}">${product.artwork_Name} by ${product.artwork_Artist}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img class="modal-img" src="${product.artwork_Img}" alt="${product.artwork_Name}" class="img-fluid">
                  <p>${product.artwork_Description}</p>
                  <p><strong>Price:</strong> $${product.artwork_Price}</p>
                  <p><strong>Theme:</strong> ${product.artwork_Theme}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#modal${showcase[(index + 1) % showcase.length].id}">Next</button>
                  <a href="pages/products.html" class="btn btn-secondary">Go to Products Page</a>
                </div>
              </div>
            </div>
          </div>
          `;
      });
  } catch (e) {
      let wrapper = document.querySelector("[data-artist]");
      wrapper.innerHTML = "Please Contact Our Administrator";
      setTimeout(() => {
          location.reload(), 1000000;
      });
  }
}
linganiProducts();


    // Add to cart function
    function addToCart(product) {
      checkoutItems.push(product);
      localStorage.setItem('checkout', JSON.stringify(checkoutItems));
      document.querySelector('[counter]').textContent = checkoutItems.length;
  }

function redirectToCart() {
  // Redirect to the cart page (replace "cart.html" with your actual cart page URL)
  window.location.href = "../pages/cart.html";
}


//   Date on footer
document.querySelector("[current-year]").textContent =
  new Date().getUTCFullYear();

// Useful code section

// Example on how to pull a specific item
// let arr = [
//   {
//     id:1,
//     name:"Ima",
//   },
//   {
//     id:2,
//     name:"ema",
//   },
// ]
// arr.forEach(N =>{
//   if(N.name === "Ima"){
//     console.log(N)
//   }
// })

// Example on a range pull for products
// let varName = localStorageName.slice(0, 4);
// apply before wrapper
