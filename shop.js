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
    description: "Mały, jaskrawo ubarwiony płaz.",
    long_description:
      "Żaba Strzałkowa (Dendrobatoidea) to tropikalny płaz z Ameryki Środkowej.\nZnana z intensywnych, neonowych kolorów, które ostrzegają drapieżniki przed jej toksycznością.\nŻyje głównie w lasach deszczowych i wydziela silnie trujące substancje skórne.\nJest to niewielki płaz, osiągający długość ciała do 3 cm.",
    price: 219.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqY-7J3ljl5ML4kmp15LgAkVVW0YQ04udANQ&s",
    tags: [
      "Żaby",
      "Płazy",
      "Zwierzęta",
      "żaba",
      "płaz",
      "mała",
      "niebieska",
      "tropikalna",
      "trujące",
      "Ameryka Środkowa",
      "las deszczowy",
    ],
  },
  {
    id: 2,
    name: "Gekon Lamparci",
    description:
      "Jaskrawo ubarwiona jaszczurka z charakterystycznymi plamkami.",
    long_description:
      "Gekon Lamparci (Eublepharis macularius) to popularny gatunek jaszczurki pochodzący z Azji Środkowej.\nSą to zwierzęta nocne, charakteryzujące się plamistym, żółto-czarnym ubarwieniem.\nGecko Leopardzi są stosunkowo małe, osiągają długość ciała do 25 cm.\nW naturze żyją w suchych, skalistych środowiskach, ale w hodowli łatwo dostosowują się do różnych warunków.",
    price: 129.99,
    image:
      "https://www.reptilecentre.com/cdn/shop/articles/9e395f46137f748bdd7c47a0e71c8ab8.jpg?v=1728661216",
    tags: [
      "Jaszczurki",
      "Gady",
      "Zwierzęta",
      "gecko",
      "leopardzi",
      "nocne",
      "Azja Środkowa",
      "plamki",
    ],
  },
  {
    id: 3,
    name: "Kameleon Jemeński",
    description: "Tropikalny gad znany z umiejętności zmiany koloru.",
    long_description:
      "Kameleon Jemeński (Chamaeleo calyptratus) pochodzi z obszarów Półwyspu Arabskiego.\nZnany ze swojej zdolności do zmiany koloru w zależności od nastroju, temperatury i otoczenia.\nJest to średniej wielkości gad, który dorasta do około 40 cm długości.\nKameleon Jemeński ma charakterystyczny grzebień na głowie, a jego ciało jest zazwyczaj zielone z różnymi odcieniami brązu i żółci.",
    price: 249.99,
    image:
      "https://zoo.wroclaw.pl/wp-content/uploads/2021/12/kameleon-jemenski-Ciekawostka-X31.webp",
    tags: [
      "Jaszczurki",
      "Gady",
      "Zwierzęta",
      "kameleon",
      "Jemeński",
      "tropikalny",
      "zmiana koloru",
      "Półwysep Arabski",
    ],
  },
  {
    id: 4,
    name: "Boa Dusiciel",
    description: "Potężny wąż o imponujących rozmiarach.",
    long_description:
      "Boa Dusiciel (Boa constrictor) to gatunek węża występujący głównie w Ameryce Łacińskiej.\nZasłynął swoją metodą polowania – duszeniem ofiary przy pomocy swojego potężnego ciała.\nWęże te osiągają długość do 4 metrów, a ich ubarwienie to mieszanka brązów, czerwieni i czerni.\nBoa Dusiciel żywi się głównie ssakami, ptakami i gadami.\nSą to węże, które mogą być hodowane w terrariach, ale wymagają przestronnych warunków.",
    price: 499.99,
    image:
      "https://ocdn.eu/pulscms-transforms/1/f7uk9kqTURBXy84NjgzODQzNmEwNDBiNTYyMGZmYzY4NTFjY2NhMDIzOC5qcGVnk5UDACPNA-jNAjKVAs0EsADDw5MJpjJlNTY0YQbeAAGhMAE/boa-dusiciel-zjadl-jezozwierza-efekt-tragiczny.jpeg",
    tags: [
      "Węże",
      "Gady",
      "Zwierzęta",
      "boa",
      "dusiciel",
      "Ameryka Łacińska",
      "wąż",
      "potężny",
    ],
  },
  {
    id: 5,
    name: "Arowana Azjatycka",
    description: "Elegancka ryba słodkowodna o długim ciele.",
    long_description:
      "Arowana Azjatycka (Scleropages formosus) to ryba słodkowodna występująca w rzekach Azji Południowo-Wschodniej.\nJest to duża ryba, osiągająca długość do 90 cm, znana z długiego, smukłego ciała i charakterystycznych, długich płetw.\nArowany mają metaliczny połysk, a ich łuski mogą mienić się różnymi odcieniami.\nJest to gatunek bardzo ceniony w akwarystyce, ale również zagrożony wyginięciem.",
    price: 649.99,
    image:
      "https://www.cee-egzotarium.sosnowiec.pl/templates/yootheme/cache/57/asian-arowana-main-571decbe.jpeg",
    tags: [
      "Ryby",
      "Słodkowodne",
      "Zwierzęta",
      "Arowana",
      "Azjatycka",
      "ryba",
      "słodkowodna",
      "Azja Południowo-Wschodnia",
    ],
  },
  {
    id: 6,
    name: "Ptasznik Chilijski Różowy",
    description: "Niezwykle duży pająk o intensywnie różowych nogach.",
    long_description:
      "Pająk Ptasznik Chilijski Różowy (Brachypelma klaasi) to jeden z najbardziej spektakularnych przedstawicieli pająków tarantulowatych.\nJest to gatunek charakteryzujący się wyjątkowo intensywnym, różowym kolorem nóg, co czyni go jednym z najbardziej pożądanych w hodowli.\nWystępuje w Meksyku, a jego naturalnym środowiskiem są suche tereny.\nTarantule te osiągają długość ciała do 7 cm i mają łagodny temperament, co czyni je popularnymi wśród miłośników pająków.",
    price: 159.99,
    image:
      "https://media.istockphoto.com/id/531926576/pl/zdj%C4%99cie/chilean-rose-tarantula.jpg?s=612x612&w=0&k=20&c=xEMssTVgWoSn6Rp1bgnRRZtHMkFWI9GBlKwMOPTrnHU=",
    tags: [
      "Pająki",
      "Stawonogi",
      "Zwierzęta",
      "tarantula",
      "różowa",
      "Meksyk",
      "pająk",
      "duży",
    ],
  },
  {
    id: 7,
    name: "Skorpion Androctonus",
    description: "Trujący skorpion o agresywnym zachowaniu.",
    long_description:
      "Skorpion Androctonus (Androctonus australis) to gatunek skorpiona zamieszkujący Afrykę Północną i Bliski Wschód.\nJest jednym z najgroźniejszych skorpionów na świecie ze względu na swoją truciznę.\nZasiedla głównie pustynie i tereny skaliste, a jego ciało osiąga długość do 10 cm.\nSkorpiony te prowadzą nocny tryb życia i potrafią być bardzo agresywne, gdy czują się zagrożone.",
    price: 89.99,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Black_scorpion.jpg",
    tags: [
      "Skorpiony",
      "Stawonogi",
      "Zwierzęta",
      "skorpion",
      "trujący",
      "Afryka Północna",
      "Bliski Wschód",
      "agresywny",
    ],
  },
  {
    id: 8,
    name: "Żółw Błotny",
    description: "Mały żółw wodny, występujący w Europie.",
    long_description:
      "Żółw Błotny (Emys orbicularis) to gatunek żółwia wodnego występującego w Europie.\nZasiedla tereny podmokłe, takie jak stawy, jeziora i bagna.\nDorasta do około 25 cm długości i charakteryzuje się ciemnym pancerzem z żółtymi plamkami.\nJest to gatunek chroniony, zagrożony wyginięciem z powodu utraty siedlisk i nielegalnego handlu.",
    price: 229.99,
    image: "https://home.morele.net/wp-content/uploads/2022/07/zolw-blotny.jpg",
    tags: [
      "Żółwie",
      "Gady",
      "Zwierzęta",
      "żółw",
      "błotny",
      "wodny",
      "Europa",
      "chroniony",
    ],
  },
  {
    id: 9,
    name: "Pirania Czerwona",
    description: "Ryba drapieżna, znana z ostrych zębów.",
    long_description:
      "Pirania Czerwona (Pygocentrus nattereri) to drapieżna ryba występująca w rzekach Amazonki.\nJest znana z wyjątkowo ostrych zębów i dużej agresywności, szczególnie w grupach.\nPiranie te mają intensywnie czerwone barwy na brzuchu, a ich długość dochodzi do 30 cm.\nJest to ryba, która może być hodowana w akwariach, ale wymaga specjalnych warunków.",
    price: 59.99,
    image:
      "https://rybyakwariowe.eu/galeria/ryby_pirania_czerwona/pirania-czerwona-natterera-ryba-akwariowa-piranie-02.jpg",
    tags: [
      "Ryby",
      "Morskie",
      "Zwierzęta",
      "piranha",
      "czerwona",
      "drapieżna",
      "Amazonka",
      "ostra",
    ],
  },
  {
    id: 10,
    name: "Koralowiec",
    description: "Kolonialny organizm morski z jaskrawymi kolorami.",
    long_description:
      "Koralowiec (Anthozoa) to organizmy morskie, które tworzą duże kolonie. Są one znane z intensywnych kolorów i zdolności do budowania raf koralowych.\nKoralowce żyją w czystych, ciepłych wodach oceanicznych i są podstawą ekosystemów rafowych.\nKolonie koralowe składają się z tysiąca pojedynczych polipów, które współpracują, tworząc twarde, wapienne struktury.\nKorale są także ważnym elementem dla innych organizmów morskich, takich jak ryby, które znajdują w nich schronienie.",
    price: 89.99,
    image:
      "https://www.shutterstock.com/image-photo/white-sea-anemone-norway-600nw-2472786997.jpg",
    tags: [
      "Morskie",
      "Ryby",
      "Zwierzęta",
      "koralowiec",
      "rafy koralowe",
      "kolonialny",
      "woda ciepła",
      "kolorowy",
    ],
  },
  {
    id: 11,
    name: "Karp Koi",
    description: "Dekoracyjna ryba hodowlana, popularna w stawach.",
    long_description:
      "Karp Koi (Cyprinus carpio) to jeden z najpiękniejszych gatunków ryb hodowlanych, znany z kolorowych łusek w odcieniach czerwieni, bieli i żółci.\nPochodzi z Azji Wschodniej i od wieków jest hodowany w stawach ozdobnych.\nKarp Koi dorasta do około 90 cm długości i żyje średnio 30-40 lat, co czyni go długowiecznym zwierzęciem akwariowym.\nJest symbolem szczęścia i pomyślności w wielu kulturach azjatyckich.",
    price: 339.99,
    image:
      "https://zooart.com.pl/blog/wp-content/uploads/2021/07/karpie-koi-co-jedza.jpg",
    tags: [
      "Ryby",
      "Słodkowodne",
      "Zwierzęta",
      "Karp Koi",
      "dekoracyjne",
      "Azja Wschodnia",
      "staw",
      "kolorowe",
    ],
  },
  {
    id: 12,
    name: "Modliszka Zwyczajna",
    description:
      "Intrygujący owad znany ze swojego charakterystycznego wyglądu.",
    long_description:
      "Modliszka Zwyczajna (Mantodea) to owad drapieżny, który jest znany ze swojej wyjątkowej postury i zdolności do polowania na inne owady.\nWielu gatunkom modliszek towarzyszy ciekawe ubarwienie i struktura ciała, przypominająca ręce w modlitwie.\nŻywi się głównie owadami, a ich zdolność do szybkich, precyzyjnych ruchów sprawia, że są skutecznymi drapieżnikami.\nSą również uważane za symbole cierpliwości i precyzji w wielu kulturach.",
    price: 69.99,
    image: "https://swiatmakro.com/wp-content/uploads/2023/10/p2300549.jpg",
    tags: [
      "Owady",
      "Stawonogi",
      "Zwierzęta",
      "modliszka",
      "drapieżnik",
      "precyzyjny",
      "owad",
    ],
  },
  {
    id: 13,
    name: "Ognica Pstra",
    description: "Kolorowa ryba morska o trujących kolcach.",
    long_description:
      "Ognica Pstra (Pterois) to ryba morska, która występuje w tropikalnych wodach Oceanu Indyjskiego i Pacyfiku.\nCharakteryzuje się długimi, kolorowymi płetwami oraz trującymi kolcami, które mogą stanowić zagrożenie dla innych organizmów morskich.\nRyby te osiągają długość do 30 cm i są znane z agresywnego zachowania w obronie swojego terytorium.\nJest to gatunek, który wprowadza duże zmiany w ekosystemach, w których się pojawia, będąc często inwazyjny.",
    price: 199.99,
    image: "https://assets.epuzzle.info/puzzle/000/957/original.webp",
    tags: [
      "Morskie",
      "Ryby",
      "Zwierzęta",
      "ryba lwa",
      "trujące",
      "kolorowe",
      "woda tropikalna",
      "płetwy",
    ],
  },
  {
    id: 100,
    name: "Terrarium dla Węży",
    description: "Szklane terrarium idealne dla węży i innych gadów.",
    long_description:
      "To wysokiej jakości terrarium z odpornym szkłem i wentylacją, zaprojektowane specjalnie z myślą o wężach i innych gadach. Wymiary terrarium umożliwiają swobodne poruszanie się zwierzęcia, a także stworzenie odpowiedniego mikroklimatu z podgrzewaniem i odpowiednią wilgotnością. Idealne dla pytonów, boa i węży kukurydzianych.\nProdukt jest łatwy do czyszczenia i wyposażony w wygodny system zamykania. Z jego pomocą możesz stworzyć komfortowe i bezpieczne środowisko dla swojego gada.",
    price: 749.99,
    image:
      "https://p.turbosquid.com/ts-thumb/69/YEna5V/0l/bigemptyterrariumc4dmodel001/jpg/1698492739/600x600/fit_q87/dc1fa76e26cef2abde97d919319ef616600a3fe4/bigemptyterrariumc4dmodel001.jpg",
    tags: [
      "Terraria",
      "Gady",
      "Węże",
      "Zwierzęta",
      "Szklane",
      "Wysokiej jakości",
      "Wygodne",
      "Ogrzewanie",
    ],
  },
  {
    id: 101,
    name: "Akwarium Szklane 100L",
    description: "Przestronne akwarium szklane, idealne do ryb słodkowodnych.",
    long_description:
      "Akwarium o pojemności 100 litrów, wykonane z wysokiej jakości szkła, doskonałe dla hodowców ryb słodkowodnych.\nJest przestronne, co umożliwia aranżację roślin, kamieni i ukryć dla ryb. Wyposażone w efektywny system filtracji, zapewnia czystość wody, co jest kluczowe dla zdrowia ryb.\nZalecane dla ryb takich jak neonki, gupiki, sumy czy karasie. Akwarium ma także możliwość montażu dodatkowego oświetlenia LED, co zwiększa estetykę i komfort dla mieszkańców.",
    price: 649.99,
    image:
      "https://media.istockphoto.com/id/183414126/photo/new-empty-fish-tank.jpg?s=612x612&w=0&k=20&c=eJFgf7y8Ri7rFR-Wgo59K4IIGDAiDZYzdQegKAVc3tA=",
    tags: [
      "Akwaria",
      "Słodkowodne",
      "Ryby",
      "Zwierzęta",
      "Szklane",
      "Filtracja",
      "Oświetlenie",
      "Dekoracje",
    ],
  },
  {
    id: 102,
    name: "Rośliny Akwariowe - Anubias",
    description: "Rośliny akwariowe, doskonałe dla słodkowodnych zbiorników.",
    long_description:
      "Anubias to jedna z najłatwiejszych w uprawie roślin akwariowych, idealna do słodkowodnych akwariów. Rośliny te charakteryzują się dużymi, ciemnozielonymi liśćmi, które rosną w średnio szybkim tempie. Anubias preferuje półcień, co sprawia, że jest idealną rośliną do cieniowanych miejsc w akwarium.\nNie wymaga szczególnej pielęgnacji, ale warto zapewnić jej odpowiednią ilość składników odżywczych w wodzie. Doskonała do wprowadzenia naturalnego akcentu w każdym zbiorniku.",
    price: 29.99,
    image: "https://www.flowerfish.pl/wp-content/uploads/2019/07/IMG_7254.jpg",
    tags: [
      "Rośliny",
      "Akwaria",
      "Słodkowodne",
      "Zwierzęta",
      "Anubias",
      "Rośliny akwariowe",
      "Dekoracje",
      "Łatwe w pielęgnacji",
    ],
  },
  {
    id: 103,
    name: "Karma dla Płazów - Tropical",
    description: "Specjalistyczna karma dla żab, salamandr i innych płazów.",
    long_description:
      "Karma dla płazów Tropical to pełnoporcjowa mieszanka, idealna dla wszystkich gatunków płazów, w tym żab, salamandr, ropuch oraz traszek. Formuła oparta na naturalnych składnikach zapewnia odpowiednie wartości odżywcze, wspomagając zdrowie i długowieczność zwierząt.\nDzięki wysokiej jakości białkom i witaminom, karma jest łatwa do przyswajania, co sprzyja zdrowiu skóry, kości i układu trawiennego.\nMożna ją podawać zarówno w postaci granulek, jak i w postaci żywego pokarmu dla najbardziej wymagających płazów.",
    price: 19.99,
    image:
      "https://img3.imcages.com/2370-large_default/hikari-pac-attack-frog-40g-karma-pokarm-dla-zaby-rogatej-pacman-ceratophrys.jpg",
    tags: [
      "Karma",
      "Płazy",
      "Żaby",
      "Salamandry",
      "Zwierzęta",
      "Pokarm",
      "Tropical",
      "Płazy",
      "Odżywcza",
    ],
  },
  {
    id: 104,
    name: "Zestaw Narzędzi do Terrarium",
    description:
      "Zestaw narzędzi niezbędnych do tworzenia i utrzymania terrarium.",
    long_description:
      "Zestaw narzędzi do terrarium zawiera wszystkie niezbędne akcesoria do pielęgnacji i aranżacji terrarium, w tym pęsetę, szczypce, nożyczki oraz narzędzia do czyszczenia. Wykonane z wysokiej jakości materiałów, narzędzia są wygodne w użyciu i zaprojektowane tak, aby ułatwiały prace w małych przestrzeniach.\nIdealne dla hodowców gadów i płazów, pozwalają na precyzyjne ustawienie roślin, kamieni i innych dekoracji oraz utrzymanie czystości w terrarium.\nDzięki nim łatwiej utrzymać zdrowe i bezpieczne środowisko dla zwierząt.",
    price: 69.99,
    image:
      "https://m.media-amazon.com/images/I/61azsTYGokS._AC_UF1000,1000_QL80_.jpg",
    tags: [
      "Akcesoria",
      "Narzędzia",
      "Terraria",
      "Gady",
      "Płazy",
      "Pielęgnacja",
      "Dekoracje",
      "Precyzyjne",
    ],
  },
];

// Variables
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let selectedCategory = localStorage.getItem("selectedCategory") || "";
let filters = { minPrice: 0, maxPrice: Infinity };

// DOM references
const itemsContainer = document.getElementById("items-container");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const categoryDropdown = document.getElementById("category-dropdown");
const cartIcon = document.getElementById("cart-icon");
const cartCount = document.getElementById("cart-count");

function showItemDetails(id) {
  const item = items.find((i) => i.id === id); // Find the clicked item
  if (item) {
    localStorage.setItem("items", JSON.stringify(items));

    window.location.href = `oferta.html?id=${item.id}`;
  }
}

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

// Update cart count globally
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

// Add product to the cart
function addToCart(event, id) {
  event.stopPropagation();
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

  const button = document.querySelector(`button[data-id="${id}"]`);
  if (button) {
    button.textContent = "Dodano!";
    setTimeout(() => (button.textContent = "Dodaj do koszyka"), 1000);
  }
}

// Remove product from the cart
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

// Render items based on filters and category
function renderItems() {
  if (!itemsContainer) return;
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
    <div class="item-card" onclick="showItemDetails(${item.id})">
      <img src="${item.image}" alt="${item.name}">
      <h3 class="item-card-name">${item.name}</h3>
      <p class="item-card-description">${item.description}</p>
      <p class="item-card-price"><strong>${item.price.toFixed(
        2
      )} PLN</strong></p>
      <button data-id="${item.id}" onclick="addToCart(event, ${
        item.id
      })">Dodaj do koszyka</button>
    </div>
  `
    )
    .join("");
}

// Render cart contents
function renderCart() {
  if (!cartItems || !cartTotal) return;
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

// Save cart to localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Apply price filters
document.getElementById("apply-filters")?.addEventListener("click", () => {
  filters.minPrice =
    parseFloat(document.getElementById("min-price").value) || 0;
  filters.maxPrice =
    parseFloat(document.getElementById("max-price").value) || Infinity;
  renderItems();
});

// Handle category changes
categoryDropdown?.addEventListener("change", (e) => {
  setCategory(e.target.value);
});

function setCategory(category) {
  selectedCategory = category;
  localStorage.setItem("selectedCategory", category);
  renderItems();
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  renderItems();
  renderCart();
  updateCartCount();

  // Set selected category in dropdown
  if (categoryDropdown) {
    const storedCategory = localStorage.getItem("selectedCategory");
    if (storedCategory) {
      categoryDropdown.value = storedCategory;
      selectedCategory = storedCategory;
    }
  }
});

// Toggle cart visibility
cartIcon?.addEventListener("click", (e) => {
  e.preventDefault();
  const cartMenu = document.getElementById("cart-menu");
  if (cartMenu) {
    cartMenu.classList.toggle("open");
  }
});
