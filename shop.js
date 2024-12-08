const categories = [
  "Gady",
  "Płazy",
  "Stawonogi",
  "Ryby",
  "Żaby",
  "Salamandry",
  "Jaszczurki",
  "Węże",
  "Żółwie",
  "Pająki",
  "Skorpiony",
  "Owady",
  "Słodkowodne",
  "Morskie",
  "Denne",
  "Karma",
  "Terraria",
  "Akwaria",
  "Dekoracje",
  "Akcesoria",
];
const items = [
  {
    id: 1,
    name: "Żaba Strzałkowa",
    description: "Kolorowy płaz tropikalny.",
    price: 219.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqY-7J3ljl5ML4kmp15LgAkVVW0YQ04udANQ&s",
    tags: [
      "Żaby",
      "Płazy",
      "Zwierzęta",
      "zaba",
      "płaz",
      "plaz",
      "mała",
      "niebieska",
      "niebieski",
      "niebieska żaba",
      "żaba niebieska",
    ],
  },
  {
    id: 2,
    name: "Żaba 2",
    description: "Opis żaby",
    price: 199.99,
    image:
      "https://www.rainforest-alliance.org/wp-content/uploads/2021/06/poison-dart-frog-thumb-1-scaled.jpg.optimal.jpg",
    tags: [
      "Zwierzęta",
      "Płazy",
      "Żaby",
      "żaba",
      "zaba",
      "płaz",
      "plaz",
      "mała",
      "czerwona",
      "czerwony",
      "czerwona żaba",
      "żaba czerwona",
    ],
  },
  {
    id: 3,
    name: "Wąż 1",
    description: "Opis węża",
    price: 439.99,
    image:
      "https://wp.inews.co.uk/wp-content/uploads/2022/08/SEI_117404634.jpg",
    tags: [
      "Zwierzęta",
      "Gady",
      "Węże",
      "wąż",
      "waz",
      "jadowity",
      "jadowite",
      "czarny",
      "żółty",
      "zolty",
      "gad",
      "czarny wąż",
      "żółty wąż",
      "paski",
    ],
  },
  {
    id: 5,
    name: "Błazenek",
    description: "Popularna ryba morska.",
    price: 79.99,
    image:
      "https://reefguard.pl/wp-content/uploads/2016/10/Fotolia_110923756_XL-scaled.jpg",
    tags: ["Ryby", "Zwierzęta"],
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let selectedCategory = localStorage.getItem("selectedCategory") || "";
let filters = { minPrice: 0, maxPrice: Infinity };

const itemsContainer = document.getElementById("items-container");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const categoryDropdown = document.getElementById("category-dropdown");
const cartIcon = document.getElementById("cart-icon");
const cartCount = document.getElementById("cart-count");

// Funkcja do zmiany kategorii z navbaru
function changeCategory(category) {
  localStorage.setItem("selectedCategory", category);
}

// Zapisz i wyświetl wybraną kategorię
function setCategory(category) {
  selectedCategory = category;
  localStorage.setItem("selectedCategory", category);
  renderItems();
}

// Zaktualizuj liczbę produktów w koszyku
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) {
    if (count > 0) {
      cartCount.textContent = count;
      cartCount.style.display = "inline";
    } else {
      cartCount.style.display = "none";
    }
  }
}

// Dodaj produkt do koszyka
function addToCart(id) {
  const item = items.find((i) => i.id === id);
  const existingItem = cart.find((c) => c.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  saveCartToLocalStorage();
  renderCart();
  updateCartCount();

  // Informacja zwrotna na przycisku
  const button = document.querySelector(`button[data-id="${id}"]`);
  if (button) {
    button.textContent = "Dodano!";
    setTimeout(() => (button.textContent = "Dodaj do koszyka"), 1000);
  }
}

// Usuń produkt z koszyka
function removeFromCart(id) {
  const cartIndex = cart.findIndex((c) => c.id === id);
  if (cartIndex > -1) {
    if (cart[cartIndex].quantity > 1) {
      cart[cartIndex].quantity--;
    } else {
      cart.splice(cartIndex, 1);
    }
  }
  saveCartToLocalStorage();
  renderCart();
  updateCartCount();
}

// Wyświetl produkty na podstawie kategorii i filtrów
function renderItems() {
  if (!itemsContainer) return; // Sprawdz, czy jest element na stronie
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      !selectedCategory || item.tags.includes(selectedCategory);
    const matchesPrice =
      item.price >= filters.minPrice && item.price <= filters.maxPrice;
    return matchesCategory && matchesPrice;
  });

  itemsContainer.innerHTML = filteredItems
    .map(
      (item) => `
      <div class="item-card">
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>${item.price.toFixed(2)} PLN</strong></p>
        <button data-id="${item.id}" onclick="addToCart(${
        item.id
      })">Dodaj do koszyka</button>
      </div>
    `
    )
    .join("");
}

// Wyświetl zawartość koszyka
function renderCart() {
  if (!cartItems || !cartTotal) return; // Sprawdz, czy jest element na stronie
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-details">
          <p><strong>${item.name}</strong></p>
          <p>${item.quantity} x ${item.price.toFixed(2)} PLN</p>
        </div>
        <div class="cart-controls">
          <button onclick="addToCart(${item.id})">+</button>
          <button onclick="removeFromCart(${item.id})">-</button>
        </div>
      </div>
    `;
  });
  cartTotal.textContent = total.toFixed(2);
}

// Zapisz koszyk w localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Zastosuj filtry cenowe
document.getElementById("apply-filters")?.addEventListener("click", () => {
  filters.minPrice =
    parseFloat(document.getElementById("min-price").value) || 0;
  filters.maxPrice =
    parseFloat(document.getElementById("max-price").value) || Infinity;
  renderItems();
});

// Obsługa zmiany kategorii w dropdownie na stronie sklepu
categoryDropdown?.addEventListener("change", (e) => {
  setCategory(e.target.value);
});

// Inicjalizacja strony
document.addEventListener("DOMContentLoaded", () => {
  renderItems();
  renderCart();
  updateCartCount();

  // Ustaw wybraną kategorię w dropdownie na stronie sklepu
  if (categoryDropdown) {
    const storedCategory = localStorage.getItem("selectedCategory");
    if (storedCategory) {
      categoryDropdown.value = storedCategory; // Ustaw dropdown na wybraną kategorię
      selectedCategory = storedCategory; // Ustaw kategorię w skrypcie
    }
  }
});

// Obsługa przełączania widoczności koszyka
cartIcon?.addEventListener("click", (e) => {
  e.preventDefault();
  const cartMenu = document.getElementById("cart-menu");
  if (cartMenu) {
    cartMenu.classList.toggle("open");
  }
});
