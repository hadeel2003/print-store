const products = [
  { name: "بروشات أكليريك", price: 30, image: "product-1.jpg" },
  { name: "ميداليات أكليريك", price: 30, image: "product-2.jpg" },
  { name: "استيكات", price: 15, image: "product-3.jpg" },
  { name: "جورنال", price: 30, image: "product-4.jpg" },
  { name: "بروشات أكليريك حفر", price: 30, image: "product-5.jpg" },
  { name: "بورد الصور", price: 400, image: "product-6.jpg" }
];

const productList = document.getElementById("product-list");

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
            src="image/${product.image}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.onerror=null;this.src='image/placeholder.svg';"
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
