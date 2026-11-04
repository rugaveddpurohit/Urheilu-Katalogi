const productsData = [
    { id: 1, name: "Pro Match Pelipaita 2026", category: "peliasut", price: 42.90, color: "Punainen", size: "M", icon: "fa-shirt", desc: "Ammattilaistason kevyt pelipaita hengittävällä verkkokankaalla." },
    { id: 2, name: "Vieraspelipaita Pro", category: "peliasut", price: 42.90, color: "Syaani", size: "L", icon: "fa-shirt", desc: "Tyylikäs vieraspelipaita teknisellä kosteudensiirrolla." },
    { id: 3, name: "Edustus Pelishortsit", category: "peliasut", price: 24.90, color: "Musta", size: "M", icon: "fa-vest-patches", desc: "Joustavat ja kestävät shortsit seurapainatuksella." },
    { id: 4, name: "Seura Tuulitakki Shield", category: "takit", price: 79.90, color: "Sininen", size: "L", icon: "fa-user-ninja", desc: "Säänkestävä treenitakki viimasta suojaavalla kauluksella." },
    { id: 5, name: "Pro Lämpö-Toppatakki", category: "takit", price: 119.00, color: "Musta", size: "XL", icon: "fa-vest", desc: "Lämmin edustustakki vaihtoaitioon ja matkustukseen." },
    { id: 6, name: "Treenihousut Tapered", category: "housut", price: 49.90, color: "Musta", size: "M", icon: "fa-user-astronaut", desc: "Kapeamalliset verryttelyhousut vetoketjutaskuilla." },
    { id: 7, name: "Pro Kompressiotrikoot", category: "housut", price: 39.90, color: "Syaani", size: "S", icon: "fa-child-reaching", desc: "Lihastukea parantavat kompressiotrikoot urheiluun." },
    { id: 8, name: "Joukkuekassi Pro XL 90L", category: "varusteet", price: 59.90, color: "Sininen", size: "XXL", icon: "fa-bag-shopping", desc: "Tilava varustekassi erillisellä kenkälokerolla." },
    { id: 9, name: "Pelaajan Repu Logolla", category: "varusteet", price: 39.90, color: "Musta", size: "L", icon: "fa-shield-cat", desc: "Ergonominen reppu pallo- ja varustetaskuilla." },
    { id: 10, name: "Eliitti Pelisukat (3-pack)", category: "kengät", price: 18.90, color: "Valkoinen", size: "M", icon: "fa-socks", desc: "Vahvistetut kantapää- ja varvassuojatut pelisukat." },
    { id: 11, name: "Säärisuojat Carbon Grip", category: "kengät", price: 29.90, color: "Kulta", size: "S", icon: "fa-shield", desc: "Kevyet ja iskunkestävät hiilikuitusuojat." },
    { id: 12, name: "Valmentajan Lämpötakki", category: "takit", price: 99.00, color: "Musta", size: "XXL", icon: "fa-user-tie", desc: "Pitkäviitta-mallinen valmentajantakki syksyn peleihin." },
    { id: 13, name: "Maalivahdin Toppapaita", category: "peliasut", price: 54.90, color: "Kulta", size: "L", icon: "fa-mitten", desc: "Kyynärpääpehmustettu erikoispaita maalivahdeille." },
    { id: 14, name: "Treenipaita Pro Flash", category: "peliasut", price: 29.90, color: "Punainen", size: "S", icon: "fa-bolt", desc: "Quick-dry materiaalista valmistettu harjoituspaita." },
    { id: 15, name: "Vapaa-ajan Seurapoolo", category: "peliasut", price: 34.90, color: "Valkoinen", size: "M", icon: "fa-graduation-cap", desc: "Edustava puuvillasekoite polo edustustehtäviin." },
    { id: 16, name: "Juomapullosarja & Teline", category: "varusteet", price: 44.90, color: "Syaani", size: "all", icon: "fa-bottle-water", desc: "12 juomapulloa ja kokoontaitettava telinetaso." },
    { id: 17, name: "Kapteenin Nauha Custom", category: "varusteet", price: 9.90, color: "Kulta", size: "S", icon: "fa-ribbon", desc: "Joustava ja erottuva kapteeninnauha omalla logolla." },
    { id: 18, name: "Sormettomat Treenihanskat", category: "kengät", price: 19.90, color: "Musta", size: "M", icon: "fa-hand", desc: "Pitävät hanskat fysiikkatreeniin ja salille." },
    { id: 19, name: "Verryttelytakki Classic", category: "takit", price: 59.90, color: "Sininen", size: "L", icon: "fa-person-running", desc: "Klassinen vetoketjutakki seuraväreissä." },
    { id: 20, name: "Tuulihousut Pro Storm", category: "housut", price: 44.90, color: "Musta", size: "L", icon: "fa-wind", desc: "Vettähylkivät housut lahkeiden vetoketjuilla." },
    { id: 21, name: "Pyyhe Seuratunnuksella", category: "varusteet", price: 22.90, color: "Sininen", size: "L", icon: "fa-scroll", desc: "Pehmeä 100% mikrokuitupyyhe nopealla kuivumisella." },
    { id: 22, name: "Kompressio Hihat (Pari)", category: "varusteet", price: 15.90, color: "Punainen", size: "S", icon: "fa-mitten", desc: "Käsivarsituki ja suoja auringolta tai hankaumiselta." },
    { id: 23, name: "Pipo & Kauluri Setti", category: "varusteet", price: 27.90, color: "Musta", size: "M", icon: "fa-hat-wizard", desc: "Lämmin fleece-vuorattu talvisetti ulkotreeneihin." },
    { id: 24, name: "Pelisortsit Pro Light", category: "peliasut", price: 22.90, color: "Valkoinen", size: "S", icon: "fa-running", desc: "Erittäin kevyt matalamallinen peli- ja juoksushortsi." },
    { id: 25, name: "Ammattilais Lääkintälaukku", category: "varusteet", price: 89.00, color: "Punainen", size: "XL", icon: "fa-kit-medical", desc: "Täysin varusteltu huoltolaukku joukkueen huoltajalle." },
    { id: 26, name: "Pallo-verkko (10 Pallolle)", category: "varusteet", price: 19.90, color: "Musta", size: "XXL", icon: "fa-network-wired", desc: "Kestävä kantoverkko harjoituspalloille." }
];

let cart = [];
let currentTeamName = "Oma Seura";
let activeColor = "all";
let activeSize = "all";

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initFilters();
    initCart();
    renderProducts();
});

function initNavigation() {
    const navBtns = document.querySelectorAll(".nav-btn");
    navBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            navBtns.forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });

    document.getElementById("go-to-verkkokauppa").addEventListener("click", () => {
        closeCartDrawer();
        document.querySelector('[data-tab="tab-verkkokauppa"]').click();
    });
}

function initFilters() {
    document.getElementById("search-input").addEventListener("input", renderProducts);
    document.getElementById("category-filter").addEventListener("change", renderProducts);
    document.getElementById("sort-filter").addEventListener("change", renderProducts);

    const swatches = document.querySelectorAll(".swatch");
    swatches.forEach(swatch => {
        swatch.addEventListener("click", () => {
            swatches.forEach(s => s.classList.remove("active"));
            swatch.classList.add("active");
            activeColor = swatch.getAttribute("data-color");
            renderProducts();
        });
    });

    const sizeBtns = document.querySelectorAll(".size-btn");
    sizeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            sizeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeSize = btn.getAttribute("data-size");
            renderProducts();
        });
    });

    document.getElementById("apply-team-name").addEventListener("click", () => {
        const val = document.getElementById("team-name-input").value.trim();
        if (val !== "") {
            currentTeamName = val;
            renderProducts();
        }
    });

    document.getElementById("reset-filters").addEventListener("click", () => {
        document.getElementById("search-input").value = "";
        document.getElementById("category-filter").value = "all";
        document.getElementById("sort-filter").value = "default";
        activeColor = "all";
        activeSize = "all";

        swatches.forEach(s => s.classList.remove("active"));
        document.querySelector('.swatch[data-color="all"]').classList.add("active");

        sizeBtns.forEach(b => b.classList.remove("active"));
        document.querySelector('.size-btn[data-size="all"]').classList.add("active");

        renderProducts();
    });
}

function renderProducts() {
    const grid = document.getElementById("products-grid");
    const countBadge = document.getElementById("results-count");

    const searchVal = document.getElementById("search-input").value.toLowerCase();
    const catVal = document.getElementById("category-filter").value;
    const sortVal = document.getElementById("sort-filter").value;

    let filtered = productsData.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(searchVal) || p.desc.toLowerCase().includes(searchVal);
        const matchCat = catVal === "all" || p.category === catVal;
        const matchColor = activeColor === "all" || p.color === activeColor;
        const matchSize = activeSize === "all" || p.size === activeSize || p.size === "all";

        return matchSearch && matchCat && matchColor && matchSize;
    });

    if (sortVal === "price-low") filtered.sort((a, b) => a.price - b.price);
    if (sortVal === "price-high") filtered.sort((a, b) => b.price - a.price);
    if (sortVal === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));

    grid.innerHTML = "";
    countBadge.innerText = `Löytyi ${filtered.length} tuotetta`;

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: var(--text-muted);"><i class="fa-solid fa-ghost" style="font-size: 2.5rem; margin-bottom: 1rem;"></i><p>Ei tuotteita valituilla hakuehdoilla.</p></div>`;
        return;
    }

    filtered.forEach(prod => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.setAttribute("data-color", prod.color);
        card.innerHTML = `
            <span class="team-badge-tag">${currentTeamName}</span>
            <div class="card-thumb">
                <i class="fa-solid ${prod.icon}"></i>
            </div>
            <div class="card-details">
                <div class="meta-row">
                    <span>${prod.color}</span>
                    <span>Koko: ${prod.size}</span>
                </div>
                <h3>${prod.name}</h3>
                <p>${prod.desc}</p>
                <div class="price-row">
                    <span class="price-value">${prod.price.toFixed(2)} €</span>
                    <button class="add-btn" onclick="addToCart(${prod.id})">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function initCart() {
    document.getElementById("open-cart-btn").addEventListener("click", openCartDrawer);
    document.getElementById("close-drawer-btn").addEventListener("click", closeCartDrawer);
    document.getElementById("close-drawer-overlay").addEventListener("click", closeCartDrawer);

    document.getElementById("final-checkout-btn").addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Kori on tyhjä! Lisää tuotteita ennen tilausta.");
        } else {
            alert("Kiitos tilauksesta! Tilausvahvistus on lähetetty seuralle.");
            cart = [];
            updateCartUI();
        }
    });
}

function openCartDrawer() {
    document.getElementById("cart-drawer").classList.add("open");
}

function closeCartDrawer() {
    document.getElementById("cart-drawer").classList.remove("open");
}

function addToCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].qty += 1;
    } else {
        const prod = productsData.find(p => p.id === productId);
        cart.push({ ...prod, qty: 1 });
    }
    updateCartUI();
}

function changeQty(productId, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].qty += delta;
        if (cart[itemIndex].qty <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const totalItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cart-badge").innerText = totalItemsCount;

    const drawerBody = document.getElementById("drawer-cart-items");
    const storeCartList = document.getElementById("store-cart-list");

    drawerBody.innerHTML = "";
    storeCartList.innerHTML = "";

    let subtotal = 0;

    if (cart.length === 0) {
        drawerBody.innerHTML = "<p style='color: var(--text-muted); text-align:center; margin-top:2rem;'>Kori on tyhjä.</p>";
        storeCartList.innerHTML = "<p style='color: var(--text-muted); text-align:center; padding: 2rem;'>Ei valittuja tuotteita.</p>";
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            subtotal += itemTotal;

            const drawerItem = document.createElement("div");
            drawerItem.className = "store-cart-item";
            drawerItem.innerHTML = `
                <div>
                    <strong>${item.name}</strong>
                    <div style="font-size:0.8rem; color:var(--text-muted);">${item.price.toFixed(2)} € / kpl</div>
                </div>
                <div class="qty-control">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            `;
            drawerBody.appendChild(drawerItem);

            const storeItem = document.createElement("div");
            storeItem.className = "store-cart-item";
            storeItem.innerHTML = `
                <div>
                    <strong>${item.name} (${currentTeamName})</strong>
                    <div style="font-size:0.82rem; color:var(--text-muted);">Väri: ${item.color} | Koko: ${item.size}</div>
                </div>
                <div>
                    <span style="margin-right:15px;">${item.qty} kpl</span>
                    <strong>${itemTotal.toFixed(2)} €</strong>
                </div>
            `;
            storeCartList.appendChild(storeItem);
        });
    }

    let discount = totalItemsCount >= 10 ? subtotal * 0.15 : 0;
    let finalTotal = subtotal - discount;

    document.getElementById("drawer-total-price").innerText = subtotal.toFixed(2) + " €";
    document.getElementById("summary-subtotal").innerText = subtotal.toFixed(2) + " €";
    document.getElementById("summary-discount").innerText = "-" + discount.toFixed(2) + " €";
    document.getElementById("summary-total").innerText = finalTotal.toFixed(2) + " €";
}