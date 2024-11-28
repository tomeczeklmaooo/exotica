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
                <li class='logo'><a href='index.html'><img src='./img/favicon.ico'/></a></li>
                	
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
                    <li><a href="index.html">Strona główna</a></li>
                    <li><a href="konfigurator.html">Konfigurator</a></li>
                    <li><a href="sklep.html">Płazy</a></li>
                    <li><a href="sklep.html">Gady</a></li>
                    <li><a href="sklep.html">Stawonogi</a></li>
                    <li><a href="sklep.html">Ryby</a></li>
                    <li><a href="#" id="toggle-cart">Koszyk</a></li>
                    <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                </span>
                <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
            </ul>
        </nav>
        </header>
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
