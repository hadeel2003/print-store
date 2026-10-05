const products = [
  { name: "بروشات أكليريك", price: 30, image: "IMG_20250625_041446_488.jpg" },
  { name: "ميداليات أكليريك", price: 30, image: "IMG_20250625_041446_488.jpg" },
  { name: "استيكات", price: 15, image: "IMG_20250625_041446_488.jpg" },
  { name: "جورنال", price: 30, image: "IMG_20250625_041446_488.jpg" },
  { name: "بروشات أكليريك حفر", price: 30, image: "IMG_20250625_041446_488.jpg" },
  { name: "بورد الصور", price: 400, image: "IMG_20250625_041446_488.jpg" }
];

const productList = document.getElementById("product-list");
const whatsappNumber = "201065011003";

function formatPrice(price) {
  return `${Number(price).toLocaleString("ar-EG")} جنيه`;
}

function renderProducts() {
  productList.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <img
            class="product-image"
            src="images/${product.image}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.onerror=null;this.src='images/placeholder.svg';"
          />
          <div class="product-info">
            <h2 class="product-name">${product.name}</h2>
            <p class="product-price">${formatPrice(product.price)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

renderProducts();
