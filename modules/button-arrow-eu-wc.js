class ButtonArrowEU_WC extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    // You can get the attributes set on the custom element just like you would any other HTML element.
    const text = this.getAttribute("data-label");
    const type = this.getAttribute("att-type");
    const disabled = this.getAttribute("att-disabled");
    const link_field = this.getAttribute("att-link-field");
    const orientation = this.getAttribute("att-orientation");
    const size = this.getAttribute("att-size");

    const align = this.getAttribute("att-align");
    const spacing_css = this.getAttribute("att-spacing");
    const flex = this.getAttribute("att-flex");

    const trailing_icon = this.getAttribute("att-leading-icon");
    let trailing_icon_class = "";
    let disabled_class = "";
    if(trailing_icon == "true") {
      trailing_icon_class = "trailing-icon";
    }
    
    if(disabled == "true") {
      disabled_class = `btn-disabled`;
    }
    let button_alignment = "align-left";
    if(align == "CENTER"){
      button_alignment = "align-center";
    } else if (align == "RIGHT"){
      button_alignment = "align-right";
    }
    let button_flex = "fit-content;";
    if(flex == "ba-fill"){
      button_flex = "100%;"
    }
   
    this.shadowRoot.innerHTML = ` 
      <link rel="stylesheet" href="{{ get_asset_url('../../css/utilities/_variables.css') }}" /><!-- Stylesheet with color variables -->
      <style>
        /* ============ BUTON INIT ============ */
        .button-arrow-container{
          display: flex;
          ${spacing_css}
        }
        .button-arrow-container.align-right {
          justify-content: flex-end;
        }
        .button-arrow-container.align-center {
          justify-content: center;
        }

        .button-arrow{
          padding: var(--padding-md-lg) var(--padding-md-lg) var(--padding-md-lg) var(--padding-lg);
          cursor: pointer;
          text-decoration: none;
          display: flex;
          width: ${button_flex};
          min-width: 256px;
          max-width: 400px;
          text-align: left;
          font-size: var(--h3-font-size);
          font-weight: var(--h3-font-weight);
          font-family: var(--h3-font-family);
          line-height: var(--h3-line-height);
          transition-duration: 0.3s;
          transition-property: box-shadow, transform;
          align-items: center;
          box-sizing: border-box;
        }
        
        .btn-acc i {
          color: #bd302a;
        }

        /* ============ DEFAULT COLOR ============ */
        .btn-pri{
          background-color: var(--midnight-blue);
          color: var(--pure-white);
        }
        .btn-pri-inv, .btn-acc{
          background-color: var(--pure-white);
          color: var(--midnight-blue);
        }
        .btn-sec{
          background: linear-gradient(var(--pale-blue-25), var(--pale-blue-25)), linear-gradient(var(--pure-white), var(--pure-white));
          color: var(--midnight-blue);
        }
        .btn-gho{
          background-color: transparent;
          color: var(--midnight-blue);
        }

        /* ============ HOVER ============ */
        .button-arrow:hover{
          box-shadow: var(--shadow-2xl);
        }
        .button-arrow.btn-pri:hover {
          background: #020b20;
          color: var(--pure-white);
        }
        .button-arrow.btn-pri-inv:hover, .button-arrow.btn-acc:hover {
          background: linear-gradient(var(--midnight-blue-10), var(--midnight-blue-10)), linear-gradient(var(--pure-white), var(--pure-white));
          color: var(--midnight-blue);
        }
        .button.btn-sec:hover {
          background: var(--pale-blue-75);
          color: var(--pure-white);
        }
        .button-arrow.btn-gho:hover {
          background-color: var(--midnight-blue-5);
          color: var(--midnight-blue);
          box-shadow: none;
        }
        
        /* ============ ACTIVE ============ */
        .button-arrow:focus{
          box-shadow: var(--shadow-2xl);
          border: 1px solid var(--midnight-blue);
        }
        .button-arrow.btn-pri:focus {
          background: linear-gradient(var(--pale-blue-10), var(--pale-blue-10)), linear-gradient(var(--midnight-blue), var(--midnight-blue));
          border: 1px solid var(--midnight-blue);
          color: var(--pure-white);
        }
        .button-arrow.btn-pri-inv:focus, .button-arrow.btn-acc:active {
          background: linear-gradient(var(--midnight-blue-10), var(--midnight-blue-10)), linear-gradient(var(--pure-white), var(--pure-white));
          border: 1px solid var(--midnight-blue);
          color: var(--midnight-blue);
        }

        .button-arrow.btn-acc:active {
          border: none;
        }

        .button-arrow.btn-sec:focus {
          background: linear-gradient(var(--midnight-blue-10), var(--midnight-blue-10)), linear-gradient(var(--pale-blue), var(--pale-blue));
          border: 1px solid var(--midnight-blue);
          color: var(--pure-white);
        }
        .button-arrow.btn-gho:focus {
          background-color: var(--midnight-blue-10);
          border: 1px solid var(--midnight-blue);
          color: var(--midnight-blue);
          box-shadow: none;
        }
        
        /* ============ DISABLED ============ */
        .button-arrow.btn-disabled {
          pointer-events: none;
           background-color: var(--charcoal-black-50);
          color: var(--charcoal-black-10);
        }
        .button-arrow.btn-pri.btn-disabled, .button-arrow.btn-sec.btn-disabled{
          background: linear-gradient(var(--charcoal-black-10), var(--charcoal-black-10)), linear-gradient(var(--pure-white), var(--pure-white));
          color: var(--charcoal-black-50);
        }
        .button-arrow.btn-pri-inv.btn-disabled {
          background: var(--pure-white);
          color: var(--charcoal-black-50);
        }
        .button-arrow.btn-acc.btn-disabled {
          background: var(--pure-white);
          color: var(--charcoal-black-50);
        }
        .button-arrow.btn-acc.btn-disabled i {
          color: var(--charcoal-black-50);
        }
        
        /* ============ PRESSED ============ */
        .button-arrow:active {
          box-shadow: var(--shadow-lg);
        }
        .button-arrow.btn-pri:active{
          background: linear-gradient(var(--pale-blue-50), var(--pale-blue-50)), linear-gradient(var(--midnight-blue), var(--midnight-blue));
          color: var(--pure-white);
        }
        .button.btn-pri-inv:active, .button.btn-acc-inv:active  {
          background: var(--midnight-blue-10);
          color: var(--midnight-blue);
        }
        .button-arrow.btn-sec:active {
          background: linear-gradient(var(--midnight-blue-10), var(--midnight-blue-10)), linear-gradient(var(--pale-blue), var(--pale-blue));
          color: var(--pure-white);
        }
        .button-arrow.btn-gho:active {
          background-color: var(--midnight-blue-10);
          color: var(--midnight-blue);
          box-shadow: none;
        }
        
        .button-arrow i {
          padding-left: var(--padding-lg);
          padding-right: 4px;
          margin-left: auto;
          margin-right: 0px;
        }

        
        .button-arrow.btn-sm {
          font-size: var(--h5-font-size);
          line-height: var(--h5-line-height);
        }
        
        .button-arrow.btn-sm i {
          font-size: 36px;
        }
        
        .button-arrow.btn-md i {
          font-size: 48px;
        }


        @media (min-width: 768px) {
          .btn-vertical i {
            margin-bottom: 0px;
            margin-top: auto;
          }

          .btn-vertical {
            font-size: 22px;
            height: 256px;
            min-width: 256px;
            max-width: 400px;
            text-align: left;
            padding: var(--padding-lg);
          }
          .button-arrow.btn-sm.btn-vertical i {
            font-size: 48px;
          }

          .button-arrow.btn-vertical {
              align-items: normal;
          }
        }

        @media (max-width: 768px) {
          .button-arrow {
            padding: var(--padding-md);
          }
        }
        
      </style>

      <link rel="stylesheet" href="{{ get_asset_url('../../fontawesome/css/all.min.css') }}" />
      <div class="button-arrow-container ${button_alignment}">
      <a  href="${link_field}" class= "button-arrow ${type} ${orientation} ${trailing_icon_class} ${disabled_class} ${size} ">
        ${text} <i class="trailing-icon fa-light fa-arrow-up-right"></i>
      </a> 
      </div>
    `;
  }
}

window.customElements.define("button-arrow-eu-wc", ButtonArrowEU_WC);