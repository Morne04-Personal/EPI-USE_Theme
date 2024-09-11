class linkEU_WC extends HTMLElement {
constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    // You can get the attributes set on the custom element just like you would any other HTML element.
    let text = this.getAttribute("data-text");
    let url = this.getAttribute("att-url");
    let leading_icon = this.getAttribute("att-leading-icon");
    let trailing_icon = this.getAttribute("att-trailing-icon");
    let type = this.getAttribute("att-type");
    let disabled = this.getAttribute("att-disabled");
    let size = this.getAttribute("att-size");
    

    const align = this.getAttribute("att-align");

    let link_alignment = "align-left";
    if(align == "CENTER"){
      link_alignment = "align-center";
    } else if (align == "RIGHT"){
      link_alignment = "align-right";
    }

    let disabled_class = ''; 
    let leading_icon_class = '';
    let trailing_icon_class = '';
    
    if(disabled == "true"){
     disabled_class = 'link-disabled'; 
    }
    
    if(leading_icon == "true"){
     leading_icon_class = 'show-leading-icon'; 
    }
    
    if(trailing_icon == "true"){
     trailing_icon_class = 'show-trailing-icon'; 
    }
    
    // Web components are made of the same HTML, and CSS, you're used to. It's just within a self contained space, called the Shadow DOM. We set the inner HTML of the custom element almost the same as you would with any normal HTML element.
    this.shadowRoot.innerHTML = ` 
    <link rel="stylesheet" href="{{ get_asset_url('../../css/utilities/_variables.css') }}" /><!-- Stylesheet with color variables -->
    <link rel="stylesheet" href="{{ get_asset_url('../../fontawesome/css/all.min.css') }}" />
    <style> 

      .link-container{
          display: inline-block;
        }
        .link-container.align-right {
          text-align: right;
        }
        .link-container.align-center {
          text-align: center;
        }


      a {
        color: var(--midnight-blue); 
        display: inline-block;
        padding: var(--padding-sm) var(--padding-md);
        font-weight: 600;
        transition-duration: 0.3s;
        transition-property: box-shadow, transform;
        text-decoration: none;
        cursor: pointer;
      }
      
      /* ============ FONT SIZES ============ */
      a.link-sm {
        font-size: var(--caption-semibold-font-size);
        font-family: var(--caption-semibold-font-family);
        font-weight: var(--caption-semibold-font-weight);
        line-height: var(--caption-semibold-line-height);
      }
      
      a.link-md {
        font-size: var(--body-font-size);
        font-family: var(--body-font-family);
        font-weight: var(--body-font-weight);
        line-height: var(--body-line-height);
      }
      
      a.link-lg {
        font-size: var(--h3-font-size);
        font-family: var(--h3-font-family);
        font-weight: var(--h3-font-weight);
        line-height: var(--h3-line-height);
      }
      
      /* ============ DEFAULT COLOR ============ */
      a.pri {
       color: var(--midnight-blue); 
      }
      
      a.pri-inv {
       color: white; 
      }
      
      a.sec {
       color: var(--pale-blue); 
      }
      
      /* ============ HOVER ============ */
      a.pri:hover {
        color: color-mix(in srgb, var(--pale-blue-50), var(--midnight-blue));
      }
      
      a.pri-inv:hover {
        color: color-mix(in srgb, var(--pale-blue-50), var(--pure-white));
      }
      
      a.sec:hover {
        color: color-mix(in srgb, var(--midnight-blue-50), var(--pale-blue));
      }
      /* ============ ACTIVE ============ */
      a.pri:focus {
        background-color: var(--midnight-blue-5);
        color: color-mix(in srgb, var(--pale-blue-75), var(--midnight-blue));
      }
      
      a.pri-inv:focus {
       background-color: var(--pure-white-10);
       color: var(--pale-blue);
      }
      
      a.sec:focus {
        background-color: var(--midnight-blue-5);
        color: var(--midnight-blue);
      }
      /* ============ DISABLED ============ */
       a.pri.link-disabled, a.sec.link-disabled{
       color: var(--charcoal-black-50); 
      }

      a.pri-inv.link-disabled {
       color: var(--pure-white-25)
      }

      .link-disabled {
        pointer-events: none;
      }
      
      /* ============ PRESSED ============ */
      
      a.pri:active {
        background: transparent;
        color: color-mix(in srgb, var(--pale-blue-75), var(--midnight-blue));
      }
     
      a.pri-inv:active {
        background: transparent;
        color: var(--pale-blue);
      }
      
      a.sec:active {
        background: transparent;
        color: var(--midnight-blue);
      }
      
      /* ============ ICONS ============ */
      
      a .fa-elephant {
       margin-right: var(--margin-sm); 
      }
      
      a .leading-icon {
        display: none;
      }

      a.show-leading-icon .leading-icon {
        display: inline-block;
      }
      
      a .leading-icon {
        margin-right: var(--margin-sm);
      }

      a .trailing-icon {
        margin-left: var(--margin-sm);
      }
      a .trailing-icon {
        display: none;
      }
      a.show-trailing-icon .trailing-icon {
        display: inline-block;
      }
      
    </style>
   
    <div class="link-container ${link_alignment}"><a  href="${url}" class="link link-${size} ${type} ${disabled_class} ${leading_icon_class} ${trailing_icon_class}"><i class="fal fa-arrow-left leading-icon"></i>  ${text} <i class="fa-solid fa-arrow-up-right trailing-icon"></i></a></div>
    
  `;
  }
}

window.customElements.define("link-eu-wc", linkEU_WC);