class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a href="#/resto-menu">Resto Menu</a></li>
                <li>
                    <a
                   href="https://www.linkedin.com/in/herlambangk25/"
                   target="_blank"
                   rel="noopener noreferrer"
                   >About
                   </a>
                </li>
                <li><a href="#/upcoming">Up Coming</a></li>
                <li><a href="#/like">Liked restos</a></li>
            </ul>
        </nav>
        `;
  }
}

customElements.define('nav-bar', Navbar);
