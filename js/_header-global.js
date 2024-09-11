$(function () {

    $('.header-global__burger-menu').on('click', function () {

        const mobileMenu = $('.header-global__mobile-menu');

        //Open or Close Burger menu
        if (mobileMenu.is(':visible')) {
            mobileMenu.slideUp();
        }
        else {
            mobileMenu.slideDown();
        }
    });

    // Close the menu when the mouse pointer leaves the menu area
    $('.header-global__mobile-menu').on('mouseleave', function () {
        $(this).slideUp();
    });


    // Set link for epi-use logo in header
    // Get the current domain
    var currentDomain = window.location.protocol + '//' + window.location.hostname;
    $('a.epi-use-logo-header').attr('href', currentDomain);

});
