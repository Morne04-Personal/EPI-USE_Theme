class BadgeEu_WC extends HTMLElement {
constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    // You can get the attributes set on the custom element just like you would any other HTML element.
    const label = this.getAttribute("data-label");
    const type = this.getAttribute("att-type");
    const show_label = this.getAttribute("att-show-label");
    const show_icon = this.getAttribute("att-show-icon");
    const lead_icon = this.getAttribute("att-lead-icon");

    const align = this.getAttribute("att-align");
    const spacing_css = this.getAttribute("att-spacing");
    const flex = this.getAttribute("att-flex");
    
    const icon = `<i class="fa-light fa-elephant"></i>`;
    
    let icon_left = "";
    let icon_right = "";
    let icon_spacing = "";
    let label_display = "";
    
    let badge_alignment = "align-left";
    if(align == "CENTER"){
      badge_alignment = "align-center";
    } else if (align == "RIGHT"){
      badge_alignment = "align-right";
    }


    if(show_label == "true") {
      label_display = label.trim();
    }
    
    if(show_icon == "true"){
      if(lead_icon == "true") {
        icon_left = icon;
        if(show_label == "true") {
          icon_spacing = `
          .badge-eu-content i{
            margin-right: var(--margin-xs);
          }
          `;
        }
      } else {
        icon_right = icon;
        if(show_label == "true") {
          icon_spacing = `
          .badge-eu-content i{
            margin-left: var(--margin-xs);
          }
          `;
        }
      }
    }
    
    
    // Web components are made of the same HTML, and CSS, you're used to. It's just within a self contained space, called the Shadow DOM. We set the inner HTML of the custom element almost the same as you would with any normal HTML element.
    this.shadowRoot.innerHTML = ` 
    
      <link rel="stylesheet" href="{{ get_asset_url('../../css/utilities/_variables.css') }}" /><!-- Stylesheet with color variables -->
      <style>
        /* There are a few different ways to style web components, one way is using a style block inside the shadow DOM.  :host is a pseudoclass targetting the custom element itself. 
          :host{
          }
          :host(:hover){
          }
        */


        .badge-container{
          display: flex;
          ${spacing_css}
        }

        .badge-container.align-right {
          justify-content: flex-end;
        }
        .badge-container.align-center {
          justify-content: center;
        }

        .badge-eu{
          padding:var(--padding-xs) var(--padding-sm) var(--padding-xs) var(--padding-sm);
          border-radius:8px;
          display:inline-block;
          vertical-align:middle;
          text-align: center;
          box-sizing: border-box;
          text-decoration: none;
        }

        .badge-eu-content{
          font-family: var(--caption-regular-font-family);
          font-size: var(--caption-regular-font-size);
          font-weight: var(--caption-regular-font-weight);
          line-height: var(--caption-regular-line-height);
        }

        .bdg-pri{
          background-color: var(--midnight-blue);
          color: var(--pure-white);
        }
        .bdg-sec{
          background-color: var(--pale-blue);
          color: var(--pure-white);
        }

        .bdg-mtd{
          background-color: var(--charcoal-black-10);
          color: var(--charcoal-black);
        }

        .bdg-gho{
          color: var(--charcoal-black-50);
          border: 1px solid var(--charcoal-black-10);
        }
        
        ${icon_spacing}

      </style>

      <link rel="stylesheet" href="{{ get_asset_url('../../fontawesome/css/all.min.css') }}" />
      <div class="badge-container ${badge_alignment}">
      <div class="badge-eu ${type}">
        <div class="badge-eu-content">${icon_left}${label_display}${icon_right}</div>
      </div>
      </div>
    `;
  }
}

window.customElements.define("badge-eu-wc", BadgeEu_WC);