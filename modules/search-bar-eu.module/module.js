document.addEventListener("DOMContentLoaded", function() {
    const searchIconContainer = document.querySelector('.sb-icon-container');
    const searchBar = document.querySelector('.searchbar');
    const searchBarContainer = document.querySelector('.sb-bar-container');
    const searchInput = document.querySelector('.sb-input');
    const searchIcon = document.querySelector('.sb-icon');

    $(document).click(function(event) {
        const isClickOutside = !searchIconContainer.contains(event.target) && !searchBar.contains(event.target);
        
        if (isClickOutside) {
            $('.header-global__nav, .header-global__search, .header-global').removeClass('sb-open');
            searchBar.classList.remove('sb-expanded');
            searchBarContainer.classList.remove('sliding');
            searchBarContainer.classList.remove('elastic');
            searchIcon.classList.remove('fa-arrow-right');
            searchIcon.classList.add('fa-search');

            // Clear the input field
            searchInput.value = '';
        }
    });

    searchBarContainer.addEventListener('animationend', function(event) {
        if (event.animationName === 'slide-expand' && searchBar.classList.contains('sb-expanded')) {
            searchBarContainer.classList.remove('sliding');
            searchBarContainer.classList.add('elastic');
        }
        if (event.animationName === 'elastic' && searchBar.classList.contains('sb-expanded')) {
            searchBarContainer.classList.remove('elastic');
        }
    });
});