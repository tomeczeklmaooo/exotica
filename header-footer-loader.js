class ExoticaHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
        <ul>
            
        </ul>
        </header>
        <header>
        <nav>
            <ul class='nav-bar'>
                <li class='logo'><a href='index.html'><img src='img/exotica_logo.png'></a></li>
                <input type='checkbox' id='check' />
                <span class="menu">
                    <div class="theme-switch">
                    <input type="checkbox" id="theme-checkbox" class="theme-checkbox" />
                    <label for="theme-checkbox" class="theme-checkbox-label">
                      <i class="fa fa-moon"></i>
                      <i class="fa fa-sun"></i>
                      <div class="theme-ball"></div>
                    </label>
                  </div>
                    <li class="home"><a href="index.html"><i class="fa-solid fa-house fa-xl"></i></a></li>
                    <li><a href="konfigurator.html"><i class="fa-solid fa-sliders fa-xl"></i></a></li>
                    <li><a href="konto.html"><i class="fa-solid fa-user fa-xl"></i></a></li>
                    <li><a href="punkty.html"><i class="fa-solid fa-trophy fa-xl"></i></a>
                    <span class="cart-count" id="points-count">500</span>
                    </li>
                    <li><a href="#" id="cart-icon"><i class="fa-solid fa-cart-shopping fa-xl"></i></a>
                    <span class="cart-count" id="cart-count"></span>
                    </li>

                    <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                </span>
                <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
            </ul>
        </nav>
        </header>
        <nav class="shop-menu">
          <ul class='shop-nav-bar'>
              <span class="menu">
                </div>

                  <li><a href="sklep.html" onclick="changeCategory('Zwierzęta')">Zwierzęta <i class="fas fa-caret-down"></i></a>
                    <div class="dropdown-menu">
                        <ul>
                          <li>
                            <a href="sklep.html" onclick="changeCategory('Płazy')">Płazy <i class="fas fa-caret-right"></i></a>
                            <div class="dropdown-menu-1">
                              <ul>
                                <li><a href="sklep.html" onclick="changeCategory('Żaby')">Żaby</a></li>
                                <li><a href="sklep.html" onclick="changeCategory('Salamandry')">Salamandry</a></li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a href="sklep.html" onclick="changeCategory('Gady')">Gady <i class="fas fa-caret-right"></i></a>
                            <div class="dropdown-menu-1">
                              <ul>
                                <li><a href="sklep.html" onclick="changeCategory('Jaszczurki')">Jaszczurki</a></li>
                                <li><a href="sklep.html" onclick="changeCategory('Węże')">Węże</a></li>
                                <li><a href="sklep.html" onclick="changeCategory('Żółwie')">Żółwie</a></li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a href="sklep.html" onclick="changeCategory('Stawonogi')">Stawonogi <i class="fas fa-caret-right"></i></a>
                            <div class="dropdown-menu-1">
                              <ul>
                                <li><a href="sklep.html" onclick="changeCategory('Pająki')">Pająki</a></li>
                                <li><a href="sklep.html" onclick="changeCategory('Skorpiony')">Skorpiony</a></li>
                                <li><a href="sklep.html" onclick="changeCategory('Owady')">Owady</a></li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a href="sklep.html" onclick="changeCategory('Ryby')">Ryby <i class="fas fa-caret-right"></i></a>
                            <div class="dropdown-menu-1">
                              <ul>
                                <li><a href="sklep.html" onclick="changeCategory('Słodkowodne')">Słodkowodne</a></li>
                                <li><a href="sklep.html" onclick="changeCategory('Morskie')">Morskie</a></li>
                                <li><a href="sklep.html" onclick="changeCategory('Denne')">Denne</a></li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                  </li>

                  <li><a href="sklep.html" onclick="changeCategory('Karma')">Karma</a></li>

                  <li><a href="sklep.html" onclick="changeCategory('Terraria')">Terraria <i class="fas fa-caret-down"></i></a>
                    <div class="dropdown-menu">
                        <ul>
                          <li>
                            <a href="konfigurator.html"><i class="fa-solid fa-sliders"></i> Konfigurator</a>
                          </li>
                          <li>
                            <a href="sklep.html" onclick="changeCategory('Terraria')">Terraria</a>
                          </li>
                          <li>
                            <a href="sklep.html" onclick="changeCategory('Akwaria')">Akwaria</a>
                          </li>
                          <li>
                            <a href="sklep.html" onclick="changeCategory('Dekoracje')">Dekoracje</a>
                          </li>
                          <li>
                            <a href="sklep.html" onclick="changeCategory('Akcesoria')">Akcesoria</a>
                          </li>
                        </ul>
                      </div>
                  </li>
                  <li><a href="sklep.html" onclick="changeCategory('Akcesoria')">Akcesoria</a></li>
              </span>
              <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
          </ul>
        </nav>
        `;
  }
}

class ExoticaFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
        <p>&copy; Copyright 2024 Exotica</p>
        </footer>
    `;
  }
}

class ExoticaCart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <aside id="cart-menu">
        <h2>Koszyk</h2>
        <div id="cart-items"></div>
        <div id="cart-summary">
          <p>Razem: <span id="cart-total">0.00</span> PLN</p>
          <input type="text" id="discount-code" placeholder="Kod Rabatowy" />
        </div>
        <button id="checkout-button" class="checkout-button" onclick="location.href='platnosc.html';">Przejdź do płatności</button>
        </aside>
    `;
  }
}

customElements.define("exotica-header", ExoticaHeader);
customElements.define("exotica-footer", ExoticaFooter);
customElements.define("exotica-cart", ExoticaCart);
