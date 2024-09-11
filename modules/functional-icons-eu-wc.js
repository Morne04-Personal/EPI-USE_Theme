class FunctionalIconsEu_WC extends HTMLElement {
constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    // You can get the attributes set on the custom element just like you would any other HTML element.
    const icon = this.getAttribute("att-icon");
    const type = this.getAttribute("att-type");
    const size = this.getAttribute("att-size");
    const color = this.getAttribute("att-color");// --midnight-blue / --pure-white / --pale-blue
    const color_opacity = this.getAttribute("att-color-opacity");// -75 / -50 / -25 / -10 / -5
    
    const color_val = color + color_opacity;
    
    const valid_types = ["light", "solid", "regular", "duotone", "thin"];
    let type_val = "fa-light";
    if (valid_types.includes(type)) {
      type_val = "fa-" + type;
    }
    
    const valid_icons = ["arrow-up-right", "arrow-up", "arrow-down", "arrow-right", "arrow-left", "arrow-rotate-right", "arrow-up-right-from-square", "arrow-up-from-bracket", "arrow-down-to-line", "arrows-rotate", // cat-arrows (Arrows & Actions)
                        "arrows-minimize", "arrows-maximize", "arrow-up-arrow-down", "arrow-right-to-bracket", "chevron-up", "chevron-down", "chevron-left", "chevron-right", "copy", "link", "filter", "bookmark", "share", // cat-arrows (Arrows & Actions)
                        "table", "timeline-arrow", "file-spreadsheet", "database", "chart-simple", "cloud", "cloud-arrow-up", "calculator", "percent", "network-wired", // cat-data (Data)
                        "file", "folder", "paperclip", "file-lines", "file-pdf", "list-check", "thumbtack", "pen", "image", "pen-to-square", "folder-open", "book", // cat-editing (Editing & Files)
                        "copyright", "house", "magnifying-glass", "registered", "phone", "location-dot", "phone-volume", "envelope", "globe", "calendar-days", // cat-foundations (Foundations)
                        "user", "building", "elephant", "briefcase", "address-card", "city", "earth-americas", "earth-oceania", "earth-europe", "earth-asia", "earth-africa", // cat-company (Company)
                        "volume", "eye", "eye-slash", "lock", "trash", "circle-exclamation", "check", "xmark", "plus", "minus", "gear", "square-info", "square-question"]; // cat-alerts (Alerts & Controls)
    let icon_val = "fa-elephant";
    
    if(valid_icons.includes(icon)) {
      icon_val = "fa-" + icon;
    }
    
    // Web components are made of the same HTML, and CSS, you're used to. It's just within a self contained space, called the Shadow DOM. We set the inner HTML of the custom element almost the same as you would with any normal HTML element.
    this.shadowRoot.innerHTML = ` 
      <style>
        /* There are a few different ways to style web components, one way is using a style block inside the shadow DOM.  :host is a pseudoclass targetting the custom element itself. 
          :host{
          }
          :host(:hover){
          }
        */

        .icon{
          font-size: ${size}px;
          color: var(${color_val});
          display: flex;
        }
      </style>

      <link rel="stylesheet" href="{{ get_asset_url('../../fontawesome/css/all.min.css') }}" />
      <div class="icon">
        <i class="${type_val} ${icon_val}"></i>
      </div>
    `;
  }
}

window.customElements.define("functional-icons-eu-wc", FunctionalIconsEu_WC);