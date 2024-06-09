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

// Create products
// Retrieve products from localStorage or initialize if not present. This is for Highlights
let products = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    artwork_Img:
      "https://imaraansheldon.github.io/allImages/ColorMyWorld/Impressionism/abandonedShip_GagikTadevosyan.jpg",
    artwork_Name: "Abandoned Ship",
    artwork_Artist: "Gagik Tadevosyan",
    artwork_Description:
      "'Abandoned Ship' by Gagik Tadevosyan is a captivating artwork that transports viewers to a desolate realm where time seems to have stopped. Through meticulous attention to detail and masterful use of light and shadow, Tadevosyan depicts a weathered vessel stranded in a barren landscape, evoking a sense of abandonment and mystery. The absence of life within the scene invites contemplation of the ship's hidden stories and histories, while the artist's skillful composition and texture add depth and dimension, drawing viewers into a world where reality and imagination merge. With its haunting beauty and thought-provoking themes, 'Abandoned Ship' stands as a testament to Tadevosyan's talent for evoking emotion and prompting reflection through his art.",
    artwork_Price: 4000,
    artwork_Theme: "Impressionism",
    artwork_Target: "Highlights",
    button_View: "View Artwork",
    button_Add: "Add to Cart",
    target: "Highlights",
  },
  {
    id: 2,
    artwork_Img:
      "https://imaraansheldon.github.io/allImages/ColorMyWorld/Impressionism/frenchSiesta_YuriKortov.jpg",
    artwork_Name: "French Siesta",
    artwork_Artist: "Yuri Kortov",
    artwork_Description:
      "'French Siesta' by Yuri Kortov is a tranquil and charming portrayal of a quintessential French scene, encapsulating the essence of leisure and relaxation. With vibrant colors and playful brushstrokes, Kortov captures the idyllic atmosphere of a sun-drenched café, where patrons enjoy a moment of respite from the bustle of everyday life. The warm sunlight filters through the foliage, casting dappled shadows on the cobblestone streets and adding to the scene's inviting allure. Through his skillful composition and attention to detail, Kortov invites viewers to immerse themselves in the scene.",
    artwork_Price: 3200,
    artwork_Theme: "Impressionism",
    artwork_Target: "Highlights",
    button_View: "View Artwork",
    button_Add: "Add to Cart",
    target: "Highlights",
  },
  {
    id: 3,
    artwork_Img:
      "https://imaraansheldon.github.io/allImages/ColorMyWorld/Impressionism/CatherineLaRose_YuriKortov.jpg",
    artwork_Name: "Catherine La Rose",
    artwork_Artist: "Yuri Kortov",
    artwork_Description:
      "'Catherine La Rose' by Yuri Kortov is a captivating art piece that transcends traditional boundaries with its unique blend of surrealism and romanticism. In this mesmerizing composition, Kortov skillfully intertwines elements of dreamlike landscapes with intricate floral motifs, creating a sense of enchantment and mystery. The central figure, Catherine, exudes an aura of elegance and grace, her presence accentuated by the delicate roses that envelop her form. Through masterful use of color and texture, Kortov imbues the piece with a sense of ethereal beauty, inviting viewers into a world where reality and fantasy converge. 'Catherine La Rose' stands as a testament to Kortov's artistic vision and his ability to evoke emotions and provoke contemplation through his evocative imagery.",
    artwork_Price: 3000,
    artwork_Theme: "Impressionism",
    artwork_Target: "Highlights",
    button_View: "View Artwork",
    button_Add: "Add to Cart",
  },
  {
    id: 4,
    artwork_Img:
      "https://imaraansheldon.github.io/allImages/ColorMyWorld/Expressivism/nurAin.jpg",
    artwork_Name: "Nur Ain",
    artwork_Artist: "Illyna Samaai",
    artwork_Description:
      "In Illyna Samaai's expressive portrayal, a woman enveloped in a vibrant hijab emerges as a symbol of concealed resilience and profound emotion. With bold strokes and vivid hues characteristic of expressivism, Samaai captures the enigmatic allure of the veiled figure, whose obscured face hints at inner depths yet to be explored. The hijab, adorned with a riot of colors, becomes a dynamic expression of identity and defiance, shrouding the woman's features while imbuing her presence with an undeniable sense of strength and purpose. Through this striking composition, Samaai invites viewers to contemplate the complexities of cultural identity and the silent struggles faced by individuals navigating the intersection of tradition and personal agency.",
    artwork_Price: 2900,
    artwork_Theme: "Expressivism",
    artwork_Target: "Highlights",
    button_View: "View Artwork",
    button_Add: "Add to Cart",
  },
  {
    id: 5,
    artwork_Img:
      "https://imaraansheldon.github.io/allImages/ColorMyWorld/Graphic_Design/MihleLingani_2.jpg",
    artwork_Name: "Miho",
    artwork_Artist: "Mihle Lingani",
    artwork_Description:
      "The artwork titled 'Miho' by Mihle Lingani is a vibrant, colorful depiction of a person wearing sunglasses and a suit jacket with a prominent lapel. The piece features bold, contrasting colors such as bright shades of blue, green, red, yellow, and pink, set against a solid peach background. The use of color is striking, with the different hues creating a dynamic and energetic feel. The style is reminiscent of pop art, characterized by its use of flat, vivid colors and a focus on modern, fashionable subjects. The person depicted has white hair and is shown in a confident, stylish pose, giving the piece a contemporary and trendy vibe..",
    artwork_Price: 1500,
    artwork_Theme: "Pop Art",
    artwork_Target: "showcase",
    button_View: "View Artwork",
    button_Add: "Add to Cart",
  },
  {
    id: 6,
    artwork_Img:
      "https://imaraansheldon.github.io/allImages/ColorMyWorld/Graphic_Design/MihleLingani_3.jpg",
    artwork_Name: "Dante",
    artwork_Artist: "Mihle Lingani",
    artwork_Description:
      "'Dante' by Mihle Lingani is a bold and captivating abstract artwork featuring a close-up of a face with a focus on the eye, nose, and mouth. The piece uses a vivid palette of pink, orange, green, yellow, and dark blue against a bright pink background, creating a dynamic and intense visual effect. The swirling lines and distinct patches of color convey depth and emotion, resulting in a dramatic and contemporary aesthetic that draws the viewer in.",
    artwork_Price: 1500,
    artwork_Theme: "Contemporary Art",
    artwork_Target: "showcase",
    button_View: "View Artwork",
    button_Add: "Add to Cart",
  },
  {
    id: 7,
    artwork_Img:
      "https://imaraansheldon.github.io/allImages/ColorMyWorld/Graphic_Design/MihleLingani_4.jpg",
    artwork_Name: "Miho",
    artwork_Artist: "Mihle Lingani",
    artwork_Description:
      "The 'Vega Vine Front Cover' by Mihle Lingani is a vibrant, modern magazine cover featuring a bold graphic illustration of a person with long hair and large pink sunglasses. Set against a deep purple background with geometric shapes, the cover includes striking text elements like 'DON'T SETTLE' and 'VEGA VINE,' emphasizing themes of collaboration and creative challenges. The design, marked by vivid colors and contemporary typography, creates an engaging and dynamic visual appeal, making it an eye-catching introduction to the magazine's innovative content.",
    artwork_Price: 1500,
    artwork_Theme: "Pop Art",
    artwork_Target: "showcase",
    button_View: "View Artwork",
    button_Add: "Add to Cart",
  },
  {
    id: 8,
    artwork_Img:
      "https://imaraansheldon.github.io/allImages/ColorMyWorld/Graphic_Design/MihleLingani_1.jpg",
    artwork_Name: "Heat",
    artwork_Artist: "Mihle Lingani",
    artwork_Description:
      "Heat by Mihle Lingani depicts a man breathing cold air upwards, set against a dark grey background. His white hair contrasts sharply with the fiery oranges, reds, and greens that dominate the artwork, evoking a sense of intense warmth and passion. The cold breath forms a striking focal point, symbolizing relief or contemplation amidst the surrounding heat. This vivid interplay of colors and elements captures the dualities of life, inviting viewers to explore the balance between chaos and calm, and passion and reflection.",
    artwork_Price: 1500,
    artwork_Theme: "Contemporary Art",
    artwork_Target: "showcase",
    button_View: "View Artwork",
    button_Add: "Add to Cart",
  },
  {
    id: 9,
    artwork_Img:
      "https://imaraansheldon.github.io/allImages/ColorMyWorld/Graphic_Design/MihleLingani_5.jpg",
    artwork_Name: "Air",
    artwork_Artist: "Mihle Lingani",
    artwork_Description:
      "In this captivating artwork, a woman with a voluminous afro stares directly at the viewer, her gaze unwavering and powerful. The portrait captures her from the chest up, emphasizing her strong presence and commanding expression. Her eyes, deep and expressive, seem to tell a story of resilience and strength. The texture of her hair is meticulously detailed, each curl adding to the sense of depth and realism. The background is kept minimal, ensuring that all attention is drawn to her face and hair. The lighting subtly highlights her features, creating a striking contrast that enhances the intensity of her gaze. This portrait not only celebrates natural beauty but also conveys a profound sense of identity and empowerment.",
    artwork_Price: 1500,
    artwork_Theme: "Contemporary Art",
    artwork_Target: "",
    button_View: "View Artwork",
    button_Add: "Add to Cart",
  },
];

// Save products to localStorage
localStorage.setItem("products", JSON.stringify(products));

// Function to display recent products
function recentProducts() {
  try {
    //   let arrSize = products.length;
    //   let latestProducts = products.slice(0, arrSize >> 1); // Slice the array to get the latest 3 products
    let filterHighlights = products.filter((X) => {
      return X.artwork_Target === "Highlights";
    });
    let wrapper = document.querySelector("[data-container]");

    filterHighlights.forEach((product) => {
      wrapper.innerHTML += `
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
    // let latestProducts = products.slice(0, 4); // Slice the array to get the latest 3 products
    let showcase = products.filter((X) =>{
      return X.artwork_Target === "showcase"
    });
    let wrapper = document.querySelector("[data-artist]");

    showcase.forEach((product) => {
      wrapper.innerHTML += `
      <div class="col-lg-3 col-md-6">
        <div class="framework rounded-1">
          <img src='${product.artwork_Img}'>
          <div class="textContent text-center">
            <h4 class="mt-3">'${product.artwork_Name}'</h4>
            <h5>By: ${product.artwork_Artist}</h5>
            <h5>Price: $${product.artwork_Price}</h5>
            <div class="btn-card mb-2">
              <button src="#" class="shattered-glass-button">${product.button_View}</button>
              <button src="#" class="shattered-glass-button">${product.button_Add}</button>
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
