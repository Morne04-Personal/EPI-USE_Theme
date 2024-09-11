class EpiuseIcons_WC extends HTMLElement {
constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    // You can get the attributes set on the custom element just like you would any other HTML element.
    const icon = this.getAttribute("att-icon");
    
    const size = this.getAttribute("att-size");
    
    // Web components are made of the same HTML, and CSS, you're used to. It's just within a self contained space, called the Shadow DOM. We set the inner HTML of the custom element almost the same as you would with any normal HTML element.
    this.shadowRoot.innerHTML = ` 
      <style>
        /* There are a few different ways to style web components, one way is using a style block inside the shadow DOM.  :host is a pseudoclass targetting the custom element itself. 
          :host{
          }
          :host(:hover){
          }
        */

        .epiuse-icon img{
          width: ${size}px;
        }
      </style>

      <link rel="stylesheet" href="{{ get_asset_url('../../fontawesome/css/all.min.css') }}" />
      <div class="epiuse-icon">
        <img src="${icon}"></i>
      </div>
    `;
  }
}

window.customElements.define("epiuse-icons-wc", EpiuseIcons_WC);