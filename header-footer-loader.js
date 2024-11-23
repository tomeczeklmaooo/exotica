class ExoticaHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
        <ul>
            <li><a href="index.html">Strona główna</a></li>
            <li><a href="sklep.html">Płazy</a></li>
            <li><a href="sklep.html">Gady</a></li>
            <li><a href="sklep.html">Stawonogi</a></li>
            <li><a href="sklep.html">Ryby</a></li>
            <li><a href="#contact">Kontakt</a></li>
        </ul>
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
