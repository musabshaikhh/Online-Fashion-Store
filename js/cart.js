// cart.js — Advanced Cart Logic with localStorage
const CART_KEY = 'luxe_cart_items';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((acc, item) => acc + item.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

function addToCart(id) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart(cart);
  showToast('Added to cart!');
  if (typeof renderCartPage === 'function') renderCartPage();
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
  if (typeof renderCartPage === 'function') renderCartPage();
}

function updateQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) return removeFromCart(id);
    saveCart(cart);
    if (typeof renderCartPage === 'function') renderCartPage();
  }
}

function initCart() {
  updateCartBadge();
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.id;
      if (id) addToCart(id);
    }
  });
}

document.addEventListener('DOMContentLoaded', initCart);
