class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <footer>
        <p>Data obtained from <a href="https://restaurant-api.dicoding.dev/" target="_blank" rel="noreferrer">The Restaurant DB</a> </p>
        <p class="small-footer">"Copyright&copy 2020 - Bembie Resto"</p>
    </footer> 
        `;
  }
}

customElements.define('custom-footer', CustomFooter);
