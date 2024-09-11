$(document).ready(function(){

    $('.acc-section-header').on('click', function(){
        
        const acc_section_content = $(this).next();
        const acc_section_inner = $(this).parent();
        const acc_section_header_number = acc_section_inner.prev('.acc-section-header-number');

        // Close any previously opened accordion divs
        $('.acc-section-content').not(acc_section_content).slideUp();
        $('.acc-section-header').not(this).css('background-color', 'transparent');
        $('.acc-section-header-number').not(acc_section_header_number).css('background-color', 'transparent');

        // If the current one is open and clicked again, close it.
        if(acc_section_content.is(':visible')){
            $(this).css('background-color', 'transparent');
            acc_section_content.css('background-color', 'transparent');
            acc_section_header_number.css('background-color', 'transparent');
            acc_section_content.slideUp();
        } 
        // If the current one is closed and clicked, open it.
        else {
            if( $(this).hasClass('acc-v-spacegrey')) {
                acc_section_header_number.css('background-color', 'var(--pure-white)');
            } else {
                $(this).css('background-color', 'var(--pure-white)');
                acc_section_content.css('background-color', 'var(--pure-white)');
            }
            acc_section_content.slideDown();
        }

        const acc_section_header_icon = $('.acc-section-header-icon', this );
        const acc_sec_h_ico_up = $('.acc-sec-h-ico-up', acc_section_header_icon);
        const acc_sec_h_ico_dwn = $('.acc-sec-h-ico-dwn', acc_section_header_icon);

        acc_sec_h_ico_up.toggle();
        acc_sec_h_ico_dwn.toggle();

    });

});