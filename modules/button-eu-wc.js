class ButtonEU_WC extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    // You can get the attributes set on the custom element just like you would any other HTML element.
    const label = this.getAttribute("data-label");
    const size = this.getAttribute("att-size");
    const type = this.getAttribute("att-type");
    const disabled = this.getAttribute("att-disabled");
    const url = this.getAttribute("att-url");
    const show_icon = this.getAttribute("att-show-icon");
    const lead_icon = this.getAttribute("att-lead-icon");
    const icon_icon = this.getAttribute("att-icon");
    const icon_type = "light"; //"choices" : [ [ "light", "Light" ], [ "solid", "Solid" ], [ "regular", "Regular" ], [ "duotone", "Duotone" ], [ "thin", "Thin" ] ]

    const align = this.getAttribute("att-align");
    //const icon_size = "12"; //this.getAttribute("att-icon-size");

    let button_alignment = "align-left";
    if(align == "CENTER"){
      button_alignment = "align-center";
    } else if (align == "RIGHT"){
      button_alignment = "align-right";
    }
   
    const icon_size = (() => {
      const root = document.documentElement;
      const sizevar = (() => {
        let fontsizeval = "--caption-semibold-font-size";
        switch(size) {
          case "btn-med":
            fontsizeval = "--body-semibold-font-size";
            break;
          case "btn-lg":
            fontsizeval = "--h3-font-size";
            break;
        }
        return getComputedStyle(root).getPropertyValue(fontsizeval)
      })();
      return sizevar.substring(0, sizevar.length - 2);
    })();
    
    //const icon_color = "--pure-white";
    const icon_color = (() => {
      if(disabled == "true"){
        return "--charcoal-black";
      } 
      switch(type) {
        case "btn-pri":
          return "--pure-white";
        case "btn-pri-inv":
          return "--midnight-blue";
        case "btn-sec":
          return "--pure-white";
        case "btn-gho":
          return "--midnight-blue";
        default:
          return "--midnight-blue";
      }
    })(); 

    //const icon_color_opacity = "";
    const icon_color_opacity = (() => {// "choices" : [ [ "-100", "100 %" ], [ "-75", "75 %" ], [ "-50", "50 %" ], [ "-25", "25 %" ], [ "-10", "10 %" ], [ "-5", "5 %" ] ]
      if(disabled == "true"){
        return "-50";
      } else{
        return "";
      }
    })();


    const icon = `<div><functional-icons-eu-wc
                    att-icon="${icon_icon}"
                    att-type="${icon_type}"
                    att-size="${icon_size}"
                    att-color="${icon_color}"
                    att-color-opacity="${icon_color_opacity}"
                    class="function-icon"
                  ></functional-icons-eu-wc></div>`;
    
    let disabled_class = "";
    let icon_left = "";
    let icon_right = "";
    let icon_spacing = "";
    let url_att = "";

    
    
    if(disabled == "true") {
      disabled_class = `btn-disabled`;
    }
    
    if(show_icon == "true"){
      if(lead_icon == "true") {
        icon_left = icon;
        icon_spacing = `margin-right: var(--margin-sm);`;
      } else {
        icon_right = icon;
        icon_spacing = `margin-left: var(--margin-sm);`;
      }
    }
    
    
    if(url !== null && url !== "" && disabled != "true") {
      url_att = `href="${url}"`;
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

        .button-container{
          display: flex;
        }
        .button-container.align-right {
          justify-content: flex-end;
        }
        .button-container.align-center {
          justify-content: center;
        }

        /* ============ BUTON INIT ============ */
        .button{
          padding: var(--padding-md) var(--padding-md-lg);
          cursor: pointer;
          text-decoration: none;
          display: flex;
          width: fit-content;
          min-width: 45px;
          max-width: 400px;
          transition-duration: 0.3s;
          transition-property: box-shadow, transform;
          white-space: nowrap;
        }

        /* ============ FONT SIZE ============ */
        .btn-sm{
          font-family: var(--caption-semibold-font-family);
          font-size: var(--caption-semibold-font-size);
          font-weight: var(--caption-semibold-font-weight);
          line-height: var(--caption-semibold-line-height);
        }
        .btn-med{
          font-family: var(--body-semibold-font-family);
          font-size: var(--body-semibold-font-size);
          font-weight: var(--body-semibold-font-weight);
          line-height: var(--body-semibold-line-height);
        }
        .btn-lg{
          font-family: var(--h3-font-family);
          font-size: var(--h3-font-size);
          font-weight: var(--h3-font-weight);
          line-height: var(--h3-line-height);
        }

        /* ============ DEFAULT COLOR ============ */
        .btn-pri{
          background-color: var(--midnight-blue);
          color: var(--pure-white);
        }
        .btn-pri-inv{
          background-color: var(--pure-white);
          color: var(--midnight-blue);
        }
        .btn-sec{
          background-color: var(--pale-blue);
          color: var(--pure-white);
        }
        .btn-gho{
          background-color: transparent;
          color: var(--midnight-blue);
        }

        /* ============ HOVER ============ */
        .button:hover{
          box-shadow: var(--shadow-2xl);
          transition-duration: 0.3s;
          transition-property: box-shadow, transform;
        }
        .button.btn-pri:hover {
          background: linear-gradient(var(--charcoal-black-50), var(--charcoal-black-50)), linear-gradient(var(--midnight-blue), var(--midnight-blue));
          color: var(--pure-white);
        }
        .button.btn-pri-inv:hover {
          background: linear-gradient(var(--midnight-blue-10), var(--midnight-blue-10)), linear-gradient(var(--pure-white), var(--pure-white));
          color: var(--midnight-blue);
        }
        .button.btn-sec:hover {
          background-color: var(--pale-blue);
          color: var(--pure-white);
        }
        .button.btn-gho:hover {
          background-color: var(--midnight-blue-5);
          color: var(--midnight-blue);
          box-shadow: none;
        }
        
        /* ============ ACTIVE ============ */
        .button:focus{
          box-shadow: var(--shadow-2xl);
          border: 1px solid var(--midnight-blue);
          transition-duration: 0.3s;
          transition-property: box-shadow, transform;
        }
        .button.btn-pri:focus {
          background: linear-gradient(var(--pale-blue-10), var(--pale-blue-10)), linear-gradient(var(--midnight-blue), var(--midnight-blue));
          border: 1px solid var(--midnight-blue);
          color: var(--pure-white);
        }
        .button.btn-pri-inv:focus {
          background: linear-gradient(var(--pale-blue-50), var(--pale-blue-50)), linear-gradient(var(--pure-white), var(--pure-white));
          border: 1px solid var(--midnight-blue);
          color: var(--midnight-blue);
        }
        .button.btn-sec:focus {
          background: linear-gradient(var(--midnight-blue-10), var(--midnight-blue-10)), linear-gradient(var(--pale-blue), var(--pale-blue));
          border: 1px solid var(--midnight-blue);
          color: var(--pure-white);
        }
        .button.btn-gho:focus {
          background-color: var(--midnight-blue-10);
          border: 1px solid var(--midnight-blue);
          color: var(--midnight-blue);
          box-shadow: none;
        }
        
        /* ============ DISABLED ============ */
        .btn-disabled {
          pointer-events: none;
          background-color: color-mix(in srgb, var(--pure-white), var(--charcoal-black-10));
          color: var(--charcoal-black-50);
        }
        .btn-pri.btn-disabled, .btn-sec.btn-disabled{
          background-color: color-mix(in srgb, var(--pure-white), var(--charcoal-black-10));
          color: var(--charcoal-black-50);
        }
        .btn-pri-inv.btn-disabled {
          background-color: color-mix(in srgb, var(--pure-white), var(--charcoal-black-10));
          color: var(--charcoal-black-50);
        }
        .btn-gho.btn-disabled {
          background-color: transparent;
          color: var(--charcoal-black-50);
        }
        
        /* ============ PRESSED ============ */
        .button:active, .button:focus-visible {
          box-shadow: var(--shadow-lg);
          transition-duration: 0.3s;
          transition-property: box-shadow, transform;
          outline:none;
        }
        .button.btn-pri:active, .buttonbtn-pri:focus-visible {
          background: linear-gradient(var(--pale-blue-50), var(--pale-blue-50)), linear-gradient(var(--midnight-blue), var(--midnight-blue));
          color: var(--pure-white);
        }
        .button.btn-pri-inv:active, .button.btn-pri-inv:focus-visible {
          background: linear-gradient(var(--pale-blue-50), var(--pale-blue-50)), linear-gradient(var(--pure-white), var(--pure-white));
          color: var(--midnight-blue);
        }
        .button.btn-sec:active, .button.btn-sec:focus-visible {
          background: linear-gradient(var(--midnight-blue-10), var(--midnight-blue-10)), linear-gradient(var(--pale-blue), var(--pale-blue));
          color: var(--pure-white);
        }
        .button.btn-gho:active, .button.btn-gho:focus-visible {
          background-color: var(--midnight-blue-10);
          color: var(--midnight-blue);
          box-shadow: none;
        }
        
        /* ========== ICON ===========*/

        .function-icon{
          display: inline-block;
          ${icon_spacing}
        }
      </style>
      <script src="{{ get_asset_url('./functional-icons-eu-wc.js') }}"></script>
      <div class="button-container ${button_alignment}">
      <a ${url_att} class="button ${type} ${size} ${disabled_class}" part="button">
        ${icon_left}${label}${icon_right}
      </a>
      </div>
    `;
  }
}

window.customElements.define("button-eu-wc", ButtonEU_WC);