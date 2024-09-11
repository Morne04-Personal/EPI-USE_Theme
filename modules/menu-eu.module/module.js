$(function() {

  $('.nm-dropdown-click').on('click', function(e) {
      
      const navMenuDropdownClick = $(this);
      const dropdownMenu = navMenuDropdownClick.next();
      const chevron = navMenuDropdownClick.find('.nm-chevron'); // Use jQuery to find the chevron

      // Close any menu that is not the currently selected one
      $('.nm-dropdown').not(dropdownMenu).slideUp();
      $('.nm-chevron').not(chevron).removeClass('rotate');

      // Open or Close selected menu
      if(dropdownMenu.is(':visible')) {
        dropdownMenu.slideUp();
        chevron.removeClass('rotate');
      } else {
        dropdownMenu.slideDown();
        chevron.addClass('rotate');
      }

      e.stopPropagation();
  });

  // Close the menu when the mouse pointer leaves the menu area
  $('.nm-dropdown').on('mouseleave', function() {
    $(this).slideUp();
    $(this).prev().find('.nm-chevron').removeClass('rotate');
  });

  // Close the menu and remove the rotate class when clicking outside of the dropdown menu
  $(document).on('click', function() {
    $('.nm-dropdown').slideUp();
    $('.nm-chevron').removeClass('rotate');
  });

  // Prevent the click event from propagating to the document when clicking inside the dropdown menu
  $('.nm-dropdown').on('click', function(e) {
    e.stopPropagation();
  });

});