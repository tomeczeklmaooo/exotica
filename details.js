// Get references to the container
const itemDetailsContainer = document.getElementById("item-details");

// Parse the item ID from the query parameters
const urlParams = new URLSearchParams(window.location.search);
const itemId = parseInt(urlParams.get("id"));

// Retrieve the items array from localStorage
const items = JSON.parse(localStorage.getItem("items")) || [];

// Find the item based on the ID
const item = items.find((i) => i.id === itemId);

// Ensure item exists
if (item) {
  // Populate the details container
  itemDetailsContainer.innerHTML = `
    <div class="item-details-card">
      <img src="${item.image}" alt="${item.name}" class="item-image">
      <div class="item-info">
        <h2 class="item-name">${item.name}</h2>
        <p class="item-description">${item.long_description}</p>
        <p class="item-price"><strong>${item.price.toFixed(2)} PLN</strong></p>
        <p class="item-availability" style="color: green;">Dostępne</p>
        <div class="quantity-controls">
          <button class="quantity-btn" id="decrease-btn">-</button>
          <span id="quantity">1</span>
          <button class="quantity-btn" id="increase-btn">+</button>
          <button class="add-to-cart-btn" id="add-to-cart">Dodaj do koszyka</button>
        </div>
        <hr>
        <p class="item-category">Kategoria: <span>${item.tags.join(
          ", "
        )}</span></p>
      </div>
    </div>
  `;

  // Quantity management
  let quantity = 1;
  const quantityDisplay = document.getElementById("quantity");
  const increaseBtn = document.getElementById("increase-btn");
  const decreaseBtn = document.getElementById("decrease-btn");
  const addToCartBtn = document.getElementById("add-to-cart");

  increaseBtn.addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  // Add to Cart functionality
  addToCartBtn.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((c) => c.id === item.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...item, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Feedback for user
    addToCartBtn.textContent = "Dodano!";
    setTimeout(() => (addToCartBtn.textContent = "Dodaj do koszyka"), 1000);
  });
} else {
  // If no item is found, display an error message
  itemDetailsContainer.innerHTML = `
    <p>Nie znaleziono szczegółów produktu. Spróbuj ponownie później.</p>
  `;
}
