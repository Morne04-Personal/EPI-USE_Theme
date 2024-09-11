class listEU_WC extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        // You can get the attributes set on the custom element just like you would any other HTML element.
        
        let url = this.getAttribute("att-url");
        let leading_icon = this.getAttribute("att-leading-icon");
        let trailing_icon = this.getAttribute("att-trailing-icon");
        let show_top_text = this.getAttribute("att-show-top-text");
        let show_caption = this.getAttribute("att-show-caption");
        let show_primary_text = this.getAttribute("att-show-primary-text");
        let show_bottom_text = this.getAttribute("att-show-bottom-text");
        let top_text = this.getAttribute("att-top-text");
        let caption = this.getAttribute("att-caption");
        let primary_text = this.getAttribute("att-primary-text");
        let bottom_text = this.getAttribute("att-bottom-text");

        let text_colour = this.getAttribute("att-text-color");

        if (text_colour == ''){
          text_colour = '--charcoal-black';
        }

        let disabled = this.getAttribute("att-disabled");

        let show_badge = this.getAttribute("att-show-badge");
        let show_primary_badge = this.getAttribute("att-show-primary-badge");

        const badge_label = this.getAttribute("att-badge-label");
        const badge_type = this.getAttribute("att-badge-type");
        const badge_show_label = this.getAttribute("att-badge-show-label");
        const badge_lead_icon = this.getAttribute("att-badge-lead-icon");

        const primary_badge_label = this.getAttribute("att-primary-badge-label");
        const primary_badge_type = this.getAttribute("att-primary-badge-type");
        const primary_badge_show_label = this.getAttribute("att-primary-badge-show-label");
        const primary_badge_lead_icon = this.getAttribute("att-primary-badge-lead-icon");


        let badge_html = '';
        let primary_badge_html = '';


    
        let leading_icon_class = '';
        let trailing_icon_class = '';
        
        let top_text_html = '';
        let caption_html = '';
        let primary_text_html = '';
        let bottom_text_html = '';

        let disabled_class = '';
        

        if(disabled == "true"){
          disabled_class = "list-item-disabled";
        }


        if(show_top_text == "true"){

          top_text_html = `<span class="top-text">${top_text}</span>`;
        }


        if(show_caption == "true"){

          caption_html = `<span class="caption">${caption}</span>`;
        }



        if(show_primary_text == "true"){

          primary_text_html = `<span class="primary-text">${primary_text}</span>`;
        }

        if(show_bottom_text == "true"){

          bottom_text_html = `<span class="bottom-text">${bottom_text}</span>`;
        }


        
       
        
        if(leading_icon == "true"){
         leading_icon_class = 'show-leading-icon'; 
        }
        
        if(trailing_icon == "true"){
         trailing_icon_class = 'show-trailing-icon'; 
        }

        if(show_badge == "true"){
          badge_html = `<badge-eu-wc
             data-label="${badge_label}"
             att-type="${badge_type}"
             att-show-label="${badge_show_label}"
             att-lead-icon="${badge_lead_icon}"
             class="badge"
></badge-eu-wc>
<badge-eu-wc
             data-label="${badge_label}"
             att-type="bdg-pri"
             att-show-label="${badge_show_label}"
             att-lead-icon="${badge_lead_icon}"
             class="badge-active"
></badge-eu-wc>`;
          
        }

        if(show_primary_badge == "true"){
          primary_badge_html = `<badge-eu-wc
              style="float: right; margin-left: var(--margin-sm)" 
             data-label="${primary_badge_label}"
             att-type="${primary_badge_type}"
             att-show-label="${primary_badge_show_label}"
             att-lead-icon="${primary_badge_lead_icon}"
             class="badge"
></badge-eu-wc>
<badge-eu-wc
              style="float: right; margin-left: var(--margin-sm)" 
             data-label="${primary_badge_label}"
             att-type="bdg-pri"
             att-show-label="${primary_badge_show_label}"
             att-lead-icon="${primary_badge_lead_icon}"
             class="badge-active"
></badge-eu-wc>`;
          if(show_primary_text == "true"){

            primary_text_html = `<span class="primary-text">${primary_text} ${primary_badge_html}</span>`;
          }
        }

        
        // Web components are made of the same HTML, and CSS, you're used to. It's just within a self contained space, called the Shadow DOM. We set the inner HTML of the custom element almost the same as you would with any normal HTML element.
        this.shadowRoot.innerHTML = ` 
        <script src="{{ get_asset_url('./badge-eu-wc.js') }}"></script>
        <link rel="stylesheet" href="{{ get_asset_url('../../css/utilities/_variables.css') }}" /><!-- Stylesheet with color variables -->
        <link rel="stylesheet" href="{{ get_asset_url('../../fontawesome/css/all.min.css') }}" />
        <style> 
          
          .list-item {
            max-width: 309px;
            
            list-style: none;
            padding: var(--padding-sm);
          }

          .top-text {
          display: block;
          }

          .top-text, .bottom-text {
            color: var(--charcoal-black-75);
            font-family: var(--body-font-family);
            font-size: var(--body-font-size);
            font-weight: var(--body-font-weight);
            line-height: var(--body-line-height);
            
          }

          .caption {
            display: block;

            color: var(--charcoal-black-75);
            font-family: var(--caption-regular-font-family);
            font-size: var(--caption-regular-font-size);
            font-weight: var(--caption-regular-font-weight);
            line-height: var(--caption-regular-line-height);
          }


          .bottom-text {
            color: var(--charcoal-black);
          }

          .primary-text {
              font-family: var(--body-semibold-font-family);
              font-size: var(--body-semibold-font-size);
              font-weight: var(--body-semibold-font-weight);
              line-height: 28px;
              display: block;
              color: var(${text_colour});
              display: flex;
              align-items: center;
          }

          .list-item {
            display: flex;
            
            align-items: center;
          }

          .leading-icon, .trailing-icon {
            display: none;
          }
          .show-leading-icon .leading-icon {
            display: inline-block;
            font-size: 24px;
          }

          .show-trailing-icon .trailing-icon {
            display: inline-block;
            font-size: 20px;
          }

          .show-leading-icon .list-item-text{
            margin-left: var(--margin-md);
          }

          .show-trailing-icon .list-item-text{
            margin-right: var(--margin-md);
          }

          .list-item-text {
            
            width: 100%;
          }

          .list-item.list-item-disabled .top-text, .list-item.list-item-disabled .primary-text, .list-item.list-item-disabled .caption, .list-item.list-item-disabled .bottom-text {
            color: var(--grey-50);
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

          .list-item .badge-active {
            display: none;
          }

          .list-item:active .badge {
            display: none;
          }

          .list-item:active .badge-active {
            display: inline-block;
          }

          .list-item.list-item-disabled {
            border: 1px solid var(--grey-10);
          }

          
          
        </style>
       
        <li href="${url}" class="list-item ${leading_icon_class} ${trailing_icon_class} ${disabled_class}">
        
          <i class="fal fa-elephant leading-icon"></i>  <div class="list-item-text">${top_text_html} ${primary_text_html} ${caption_html} ${bottom_text_html} ${badge_html}</div> <i class="fa-solid fa-arrow-up-right trailing-icon"></i>
          
        </li>
        
      `;
      }


    }
    
    window.customElements.define("list-eu-wc", listEU_WC);
