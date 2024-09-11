class regionEU_WC extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        // You can get the attributes set on the custom element just like you would any other HTML element.
        
        let url = this.getAttribute("att-url");
        let active = this.getAttribute("att-active");

        let primary_text = this.getAttribute("att-primary-text");


        let icon = this.getAttribute("att-icon");


        const badge_label = this.getAttribute("att-badge-label");
        let badge_type = this.getAttribute("att-badge-type");
        const badge_show_label = this.getAttribute("att-badge-show-label");
        const badge_lead_icon = this.getAttribute("att-badge-lead-icon");


        let badge_html = '';



        let active_class = '';

        if(active == "true"){
          active_class = "list-item-active";
          badge_type = "bdg-sec";
        }

        let primary_text_html = '';

        primary_text_html = `<span class="primary-text">${primary_text}</span>`;
        


          badge_html = `<badge-eu-wc
              style="float: right;" 
             data-label="${badge_label}"
             att-type="${badge_type}"
             att-show-label="${badge_show_label}"
             att-lead-icon="${badge_lead_icon}"
></badge-eu-wc>`;


          primary_text_html = `<span class="primary-text">${primary_text} ${badge_html}</span>`;

                
        // Web components are made of the same HTML, and CSS, you're used to. It's just within a self contained space, called the Shadow DOM. We set the inner HTML of the custom element almost the same as you would with any normal HTML element.
        this.shadowRoot.innerHTML = ` 
        <script src="{{ get_asset_url('./badge-eu-wc.js') }}"></script>
        <link rel="stylesheet" href="{{ get_asset_url('../../css/utilities/_variables.css') }}" /><!-- Stylesheet with color variables -->
        <link rel="stylesheet" href="{{ get_asset_url('../../fontawesome/css/all.min.css') }}" />
        <style> 
          
          .list-item {
            max-width: 500px;
            list-style: none;
            padding: var(--padding-sm) var(--padding-lg);
            border-bottom:1px solid var(--midnight-blue-10);
          }

          .list-item i {
            color: var(--midnight-blue-50);
          }


          .primary-text {
              font-family: var(--body-semibold-font-family);
              font-size: var(--body-semibold-font-size);
              font-weight: var(--body-semibold-font-weight);
              line-height: var(--body-semibold-line-height);
              display: block;
              color: var(--charcoal-black);
              line-height: 32px;
              display: flex;
              justify-content: space-between;
              align-items: center;
          }

          .list-item a {
            display: flex;
            align-items: center;
            
          }

          .list-item a {
            text-decoration: none;
          }

          
          .leading-icon {
            display: inline-block;
            font-size: 16px;
          }

          

          .list-item-text{
            margin-left: var(--margin-md);
          }


          .list-item-text {
            width: calc(100% - 40px);
          }


          .list-item:hover {
            background-color: var(--midnight-blue-5);
          }

          .list-item:active {
            background-color: var(--midnight-blue);
            color: var(--pure-white);
          }

          .list-item:active .top-text, .list-item:active .primary-text, .list-item:active .caption, .list-item:active .bottom-text {
            color: var(--pure-white);
          }

          .list-item:focus {
            border: 1px solid var(--midnight-blue);
            background-color: var(--midnight-blue-10);
          }

          .list-item.list-item-disabled {
            border: 1px solid var(--grey-10);
          }

          .list-item.list-item-disabled .top-text, .list-item.list-item-disabled .primary-text, .list-item.list-item-disabled .caption, .list-item.list-item-disabled .bottom-text {
            color: var(--grey-50);
          }

          .list-item-active {
            background-color: var(--midnight-blue);
          }

          .list-item-active:hover {
            background-color: var(--midnight-blue-75);
          }

          .list-item-active .primary-text {
            color: var(--pure-white);
          }

          .list-item-active i {
            color: var(--pure-white-75);
          }
          
        </style>
       
        <li class="list-item ${active_class}">
        
          <a href="${url}"><i class="fas fa-${icon} leading-icon"></i>  <div class="list-item-text"> ${primary_text_html}</div></a>
          
        </li>
        
      `;
      }


    }
    
    window.customElements.define("region-eu-wc", regionEU_WC);
