const productsList = [
    {
        id: 'watch-pro',
        name: 'ChronoWatch Apex Pro',
        category: 'watch',
        price: 299.00,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
        desc: 'Titaanirunkoinen urheilukello 4K AMOLED -näytöllä ja Dual-GPS:llä.'
    },
    {
        id: 'watch-sport',
        name: 'ChronoWatch Sport Lite',
        category: 'watch',
        price: 189.00,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80',
        desc: 'Kevyt sykekello pitkällä akunkestolla ja 30+ urheilutilalla.'
    },
    {
        id: 'heart-belt',
        name: 'ChronoBeat Sykevyö Pro',
        category: 'gear',
        price: 59.00,
        image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=600&q=80',
        desc: 'Erittäin tarkka Bluetooth & ANT+ sykevyö rintakehälle.'
    },
    {
        id: 'gps-pod',
        name: 'ChronoTrack Running Pod',
        category: 'gear',
        price: 89.00,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
        desc: 'Kenkään kiinnitettävä juoksukadenssi- ja askelanturi.'
    },
    {
        id: 'earbuds-sport',
        name: 'ChronoSound Sport Earbuds',
        category: 'accessory',
        price: 79.00,
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
        desc: 'Täysin vedenkestävät (IPX8) langattomat urheilukuulokkeet.'
    },
    {
        id: 'strap-silicone',
        name: 'Silikoniranneke 22mm',
        category: 'accessory',
        price: 25.00,
        image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80',
        desc: 'Hengittävä ja kestävä heijastava silikoniranneke kellolle.'
    }
];

let cartItems = [];

function openPage(pageId, event, pushHistory = true) {
    if (event) event.preventDefault();

    const validPages = ['etusivu', 'tuotteet', 'verkkokauppa'];
    if (!validPages.includes(pageId)) pageId = 'etusivu';

    const pages = document.querySelectorAll('.page-content');
    pages.forEach(p => p.classList.remove('active-page'));

    const target = document.getElementById(pageId);
    if (target) target.classList.add('active-page');

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    const activeNav = document.getElementById(`nav-${pageId}`);
    if (activeNav) activeNav.classList.add('active');

    if (window.location.hash !== `#${pageId}`) {
        if (pushHistory) {
            history.pushState({ page: pageId }, '', `#${pageId}`);
        } else {
            history.replaceState({ page: pageId }, '', `#${pageId}`);
        }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('popstate', () => {
    const page = window.location.hash.slice(1) || 'etusivu';
    openPage(page, null, false);
});

window.addEventListener('hashchange', () => {
    openPage(window.location.hash.slice(1) || 'etusivu', null, false);
});

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
}

function initProducts() {
    const homeGrid = document.getElementById('homepage-featured');
    if (homeGrid) {
        homeGrid.innerHTML = productsList.slice(0, 3).map(p => createCardHTML(p)).join('');
    }

    filterProducts();
}

function createCardHTML(product) {
    return `
        <div class="product-card">
            <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" class="product-image">
            <div class="product-info">
                <span class="product-category">${escapeHTML(product.category)}</span>
                <h3 class="product-title">${escapeHTML(product.name)}</h3>
                <p class="product-desc">${escapeHTML(product.desc)}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price.toFixed(2)} €</span>
                    <button class="add-btn" data-add-product="${escapeHTML(product.id)}">
                        <i class="fa-solid fa-plus"></i> Lisää
                    </button>
                </div>
            </div>
        </div>
    `;
}

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter');
    const priceSlider = document.getElementById('price-slider');
    const catalogGrid = document.getElementById('products-catalog');
    if (!categoryFilter || !priceSlider || !catalogGrid) return;

    const category = categoryFilter.value;
    const maxPrice = Number(priceSlider.value);
    if (!Number.isFinite(maxPrice)) return;

    const priceLimitText = document.getElementById('price-limit-text');
    if (priceLimitText) priceLimitText.innerText = `${maxPrice} €`;

    const filtered = productsList.filter(p => {
        const catMatch = (category === 'all') || (p.category === category);
        const priceMatch = p.price <= maxPrice;
        return catMatch && priceMatch;
    });

    if (filtered.length === 0) {
        catalogGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #94a3b8;">Ei tuotteita valituilla ehdoilla.</p>`;
    } else {
        catalogGrid.innerHTML = filtered.map(p => createCardHTML(p)).join('');
    }
}

function addToCart(productId) {
    const product = productsList.find(p => p.id === productId);
    if (!product) return;

    const existing = cartItems.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cartItems.push({ ...product, qty: 1 });
    }

    updateCartUI();
    triggerToast(`Lisätty: ${product.name}`);
}

function updateQty(productId, change) {
    const item = cartItems.find(i => i.id === productId);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            cartItems = cartItems.filter(i => i.id !== productId);
        }
    }
    updateCartUI();
}

function emptyCart() {
    cartItems = [];
    updateCartUI();
}

function updateCartUI() {
    const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
    const counter = document.getElementById('cart-counter');
    if (counter) counter.innerText = totalQty;

    const cartList = document.getElementById('cart-list');
    if (cartList && cartItems.length === 0) {
        cartList.innerHTML = `<p style="text-align: center; color: #94a3b8; padding: 20px;">Ostoskorisi on tyhjä.</p>`;
    } else if (cartList) {
        cartList.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <div>
                    <strong>${escapeHTML(item.name)}</strong><br>
                    <small style="color: #94a3b8;">${item.price.toFixed(2)} € / kpl</small>
                </div>
                <div class="qty-controls">
                    <button class="qty-btn" data-qty-product="${escapeHTML(item.id)}" data-qty-change="-1">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" data-qty-product="${escapeHTML(item.id)}" data-qty-change="1">+</button>
                    <span style="font-weight: bold; margin-left: 10px; min-width: 60px; text-align: right;">
                        ${(item.price * item.qty).toFixed(2)} €
                    </span>
                </div>
            </div>
        `).join('');
    }

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const shipping = subtotal >= 80 || subtotal === 0 ? 0.00 : 4.90;
    const total = subtotal + shipping;
    const tax = total * 0.255 / 1.255;

    const values = {
        'subtotal-val': `${subtotal.toFixed(2)} €`,
        'shipping-val': shipping === 0 ? 'ILMAINEN' : `${shipping.toFixed(2)} €`,
        'tax-val': `${tax.toFixed(2)} €`,
        'total-val': `${total.toFixed(2)} €`
    };
    Object.entries(values).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.innerText = value;
    });
}

function triggerToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-text').innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

function submitOrder(e) {
    e.preventDefault();
    if (cartItems.length === 0) {
        alert('Ostoskorisi on tyhjä!');
        return;
    }

    const name = document.getElementById('cust-name').value;
    alert(`Kiitos tilauksesta, ${name}! Tilausvahvistus on lähetetty sähköpostiisi.`);
    emptyCart();
    openPage('etusivu', null);
}

window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', event => {
        const addButton = event.target.closest('[data-add-product]');
        if (addButton) {
            addToCart(addButton.dataset.addProduct);
            return;
        }

        const qtyButton = event.target.closest('[data-qty-product]');
        if (qtyButton) {
            updateQty(qtyButton.dataset.qtyProduct, Number(qtyButton.dataset.qtyChange));
        }
    });

    initProducts();
    const hash = window.location.hash.replace('#', '');
    if (hash && ['etusivu', 'tuotteet', 'verkkokauppa'].includes(hash)) {
        openPage(hash, null, false);
    } else {
        openPage('etusivu', null, false);
    }
    history.replaceState({ page: hash || 'etusivu' }, '', window.location.href);
});