// render.js — Build and inject product cards from data

/**
 * Render products grid
 * @param {string} containerId - ID of the .products-grid element
 * @param {Array}  products    - Array of product objects from products.js
 */
function renderProducts(containerId, products) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  grid.innerHTML = products.map((p, index) => `
    <div class="product-card" style="animation-delay: ${index * 0.05}s">
      <div class="product-img-wrap">
        <a href="${p.link}?id=${p.id}">
          ${p.badge && p.badge !== 'Sale' ? `<span class="product-badge">${p.badge}</span>` : ''}
          <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        </a>
        <button class="fav-btn" data-id="${p.id}" title="Toggle Favorite">
          <i class="far fa-heart"></i>
        </button>
        <div class="product-overlay add-to-cart" data-id="${p.id}">Add to Cart</div>
      </div>
      <div class="product-info">
        <p class="product-category">${p.category}</p>
        <p class="product-name">${p.name}</p>
        <div class="product-price">
          <span class="price-now">$${p.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Re-init favorites and cart on newly rendered cards
  if (typeof initFavorites === 'function') initFavorites();
  if (typeof initCart === 'function') initCart();
}
