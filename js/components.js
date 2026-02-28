// components.js — Injects Navbar + Footer into every page dynamically
// Place <div id="nav-root"></div> and <div id="footer-root"></div> in HTML

(function () {
  // ── Detect active page ──────────────────────────────────────────────────
  const page = location.pathname.split('/').pop() || 'index.html';

  const NAV_LINKS = [
    { href: 'index.html',        label: 'Home' },
    { href: 'shop.html',         label: 'Shop' },
    { href: 'men.html',          label: 'Men' },
    { href: 'women.html',        label: 'Women' },
    { href: 'accessories.html',  label: 'Accessories' },
    { href: 'index.html#about',  label: 'About' },
  ];

  // ── Build nav link items ────────────────────────────────────────────────
  function navItems(tag) {
    return NAV_LINKS.map(l => {
      const active = l.href === page ? ' class="active"' : '';
      return tag === 'li'
        ? `<li><a href="${l.href}"${active}>${l.label}</a></li>`
        : `<a href="${l.href}">${l.label}</a>`;
    }).join('');
  }

  // ── Inject Navbar ────────────────────────────────────────────────────────
  const navRoot = document.getElementById('nav-root');
  if (navRoot) {
    navRoot.innerHTML = `
      <nav class="navbar" id="mainNavbar">
        <div class="container flex-between">
          <a class="nav-logo" href="index.html">LUXE</a>
          <ul class="nav-links">${navItems('li')}</ul>
          <div class="nav-icons">
            <a href="#" title="Search"><i class="fas fa-search"></i></a>
            <a href="favorites.html" title="Favorites"><i class="far fa-heart"></i></a>
            <a href="cart.html" title="Cart">
              <i class="fas fa-shopping-bag"></i>
              <span class="cart-badge">0</span>
            </a>
            <a href="profile.html" title="Profile"><i class="far fa-user"></i></a>
            <button class="hamburger" id="hamburger" aria-label="Menu">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
      <div class="mobile-menu" id="mobileMenu">${navItems('a')}</div>
    `;

    // Scroll Effect
    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', () => {
      if (navbar) {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
      }
    });

    // Init hamburger menu
    const ham = document.getElementById('hamburger');
    const mob = document.getElementById('mobileMenu');
    if (ham && mob) {
      ham.addEventListener('click', () => {
        mob.classList.toggle('open');
      });
      mob.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mob.classList.remove('open'));
      });
    }
  }

  // ── Inject Footer ────────────────────────────────────────────────────────
  const footerRoot = document.getElementById('footer-root');
  if (footerRoot) {
    footerRoot.innerHTML = `
      <footer class="footer" id="about">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="footer-brand-logo">LUXE</div>
              <p>Modern fashion for the bold and the minimal. Curated collections designed to elevate your everyday style.</p>
              <div class="footer-socials">
                <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" title="X"><i class="fab fa-x-twitter"></i></a>
                <a href="#" title="Pinterest"><i class="fab fa-pinterest"></i></a>
                <a href="#" title="TikTok"><i class="fab fa-tiktok"></i></a>
              </div>
            </div>
            <div class="footer-col">
              <h4>Shop</h4>
              <ul>
                <li><a href="men.html">Men</a></li>
                <li><a href="women.html">Women</a></li>
                <li><a href="accessories.html">Accessories</a></li>
                <li><a href="shop.html">New Arrivals</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Help</h4>
              <ul>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">Shipping Info</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Track Order</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© 2026 LUXE. All rights reserved.</p>
            <p>Privacy Policy · Terms of Service</p>
          </div>
        </div>
      </footer>
    `;
  }

  // ── Global Toast Notification ───────────────────────────────────────────
  window.showToast = function(msg) {
    let t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.className = 'toast-notification';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(t._timer);
    t._timer = setTimeout(() => {
      t.style.opacity = '0';
      t.style.transform = 'translateX(-50%) translateY(10px)';
    }, 2500);
  };
})();
