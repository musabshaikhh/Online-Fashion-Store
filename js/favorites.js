// favorites.js — Toggle favorite heart icon with localStorage
const FAV_KEY = 'luxe_favorites';

function getFavs() {
  return JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
}

function saveFavs(favs) {
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  syncFavIcons();
  if (typeof renderFavPage === 'function') renderFavPage();
}

function toggleFav(id) {
  const favs = getFavs();
  const idx = favs.indexOf(id);
  if (idx === -1) {
    favs.push(id);
    showToast('Saved to favorites');
  } else {
    favs.splice(idx, 1);
  }
  saveFavs(favs);
}

function syncFavIcons() {
  const favs = getFavs();
  document.querySelectorAll('.fav-btn').forEach(btn => {
    const id = btn.dataset.id;
    const icon = btn.querySelector('i');
    if (favs.includes(id)) {
      btn.classList.add('active');
      if (icon) { icon.classList.remove('far'); icon.classList.add('fas'); }
    } else {
      btn.classList.remove('active');
      if (icon) { icon.classList.remove('fas'); icon.classList.add('far'); }
    }
  });
}

function initFavorites() {
  syncFavIcons();
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.fav-btn');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.id;
      if (id) toggleFav(id);
    }
  });
}

document.addEventListener('DOMContentLoaded', initFavorites);
