let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach((product, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div>
                <label for="productName">Image:</label>
                <input type="text" id="productImg${index}" value="${product.artwork_Img}" required>
            </div>
            <div>
                <label for="productName">Name:</label>
                <input type="text" id="productName${index}" value="${product.artwork_Name}" required>
            </div>
            <div>
                <label for="productArtist">Artist:</label>
                <input type="text" id="productArtist${index}" value="${product.artwork_Artist}" required>
            </div>
            <div>
                <label for="productPrice">Price:</label>
                <input type="number" id="productPrice${index}" value="${product.artwork_Price}" required>
            </div>
            <div>
                <label for="productDescription">Description:</label>
                <textarea id="productDescription${index}" required>${product.artwork_Description}</textarea>
            </div>
            <div>
                <label for="productTheme">Theme:</label>
                <input type="text" id="productTheme${index}" value="${product.artwork_Theme}" required>
            </div>
            <div>
                <label for="productTarget">Target:</label>
                <input type="text" id="productTarget${index}" value="${product.artwork_Target}" required>
            </div>
            <button onclick="updateProduct(${index})">Update</button>
            <button onclick="deleteProduct(${index})">Delete</button>
        `;
        productList.appendChild(listItem);
    });
}

function addProduct(img, name, artist, price, description, theme, target) {
    const newProduct = {
        id: products.length + 1,
        artwork_Img: img, // You can add image URL here if available
        artwork_Name: name,
        artwork_Artist: artist,
        artwork_Description: description,
        artwork_Price: parseFloat(price),
        artwork_Theme: theme,
        artwork_Target: target,
        button_View: "View Artwork",
        button_Add: "Add to Cart",
    };
    products.push(newProduct);
    saveProducts();
    displayProducts();
}

function updateProduct(index) {
    const productImg = document.getElementById(`productImg${index}`).value.trim();
    const productName = document.getElementById(`productName${index}`).value.trim();
    const productArtist = document.getElementById(`productArtist${index}`).value.trim();
    const productPrice = document.getElementById(`productPrice${index}`).value.trim();
    const productDescription = document.getElementById(`productDescription${index}`).value.trim();
    const productTheme = document.getElementById(`productTheme${index}`).value.trim();
    const productTarget = document.getElementById(`productTarget${index}`).value.trim();

    if (!productName || !productArtist || !productPrice || !productDescription || !productTheme || !productTarget) {
        alert("Please fill in all fields.");
        return;
    }

    products[index].artwork_Img = productImg;
    products[index].artwork_Name = productName;
    products[index].artwork_Artist = productArtist;
    products[index].artwork_Price = parseFloat(productPrice);
    products[index].artwork_Description = productDescription;
    products[index].artwork_Theme = productTheme;
    products[index].artwork_Target = productTarget;

    saveProducts();
    displayProducts();
}

function deleteProduct(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        products.splice(index, 1);
        saveProducts();
        displayProducts();
    }
}

document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const productImg = document.getElementById(`productImg`).value.trim();
    const productName = document.getElementById("productName").value.trim();
    const productArtist = document.getElementById("productArtist").value.trim();
    const productPrice = document.getElementById("productPrice").value.trim();
    const productDescription = document.getElementById("productDescription").value.trim();
    const productTheme = document.getElementById("productTheme").value.trim();
    const productTarget = document.getElementById("productTarget").value.trim();

    if (!productImg || !productName || !productArtist || !productPrice || !productDescription || !productTheme || !productTarget) {
        alert("Please fill in all fields.");
        return;
    }

    addProduct(productImg,productName, productArtist, productPrice, productDescription, productTheme, productTarget);
    
    document.getElementById("productImg").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productArtist").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productDescription").value = "";
    document.getElementById("productTheme").value = "";
    document.getElementById("productTarget").value = "";
});

displayProducts();