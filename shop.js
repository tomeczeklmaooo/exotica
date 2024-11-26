const items = [
  {
    id: 1,
    name: "Żaba 1",
    description: "Opis żaby",
    price: 219.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqY-7J3ljl5ML4kmp15LgAkVVW0YQ04udANQ&s",
    tags: [
      "żaba",
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
  // Add more items as needed
];

// Cart array loaded from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const itemsContainer = document.getElementById("items-container");
const cartMenu = document.getElementById("cart-menu");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const toggleCart = document.getElementById("toggle-cart");
const searchBar = document.getElementById("search-bar");
const sortOptions = document.getElementById("sort-options");

// Utility functions for cart persistence
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Render Items
function renderItems(filteredItems = items) {
  if (itemsContainer) {
    // Only render items if items-container exists
    itemsContainer.innerHTML = "";
    filteredItems.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("item-card");
      card.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p><strong>${item.price.toFixed(2)} PLN</strong></p>
          <button onclick="addToCart(${item.id})">Dodaj do koszyka</button>
        `;
      itemsContainer.appendChild(card);
    });
  }
}

// Add to Cart
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
}

// Remove from Cart
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
}

// Render Cart
function renderCart() {
  if (cartItems) {
    // Only render cart if cart-items exists
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      total += item.price * item.quantity;
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-details">
            <p>${item.name}</p>
            <p>${item.quantity} x ${item.price.toFixed(2)} PLN = ${(
        item.price * item.quantity
      ).toFixed(2)} PLN</p>
          </div>
          <div class="cart-controls">
            <button onclick="addToCart(${item.id})">+</button>
            <button onclick="removeFromCart(${item.id})">-</button>
          </div>
        `;
      cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2);
  }
}

// Toggle Cart
if (toggleCart) {
  // Check if toggleCart exists before adding event listener
  toggleCart.addEventListener("click", (e) => {
    e.preventDefault();
    if (cartMenu) {
      cartMenu.classList.toggle("open");
    }
  });
}

// Sort Items
function sortItems(criteria) {
  const sortedItems = [...items];
  if (criteria === "name-asc") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (criteria === "name-desc") {
    sortedItems.sort((a, b) => b.name.localeCompare(a.name));
  } else if (criteria === "price-low") {
    sortedItems.sort((a, b) => a.price - b.price);
  } else if (criteria === "price-high") {
    sortedItems.sort((a, b) => b.price - a.price);
  }
  renderItems(sortedItems);
}

// Search Items
function searchItems(query) {
  const lowerQuery = query.toLowerCase();
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
  renderItems(filteredItems);
}

// Event Listeners
if (searchBar) {
  searchBar.addEventListener("input", (e) => searchItems(e.target.value));
}
if (sortOptions) {
  sortOptions.addEventListener("change", (e) => sortItems(e.target.value));
}

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
  renderItems();
  renderCart();
});
