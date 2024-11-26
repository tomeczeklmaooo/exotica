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
                    <li><a href="sklep.html">Płazy</a></li>
                    <li><a href="sklep.html">Gady</a></li>
                    <li><a href="sklep.html">Stawonogi</a></li>
                    <li><a href="sklep.html">Ryby</a></li>
                    <li><a href="#contact">Kontakt</a></li>
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

customElements.define("exotica-header", ExoticaHeader);
customElements.define("exotica-footer", ExoticaFooter);
