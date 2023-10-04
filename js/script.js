document.getElementById('search-trigger').addEventListener('click', function() {
    var searchContainer = document.querySelector('.mobile-search .search-container');
    var searchBox = document.querySelector('.mobile-search .search-box');
    
    if (searchContainer.classList.contains('show-search')) {
        // If the search container is currently shown, hide it
        searchBox.style.width = '0'; // Collapse the search box
        setTimeout(function() {
            searchContainer.classList.remove('show-search');
        }, 300); // Adjust this timing to match your transition duration
    } else {
        // If the search container is currently hidden, show it
        searchContainer.classList.add('show-search');
        setTimeout(function() {
            searchBox.style.width = '100%'; // Expand the search box after a slight delay
            searchBox.focus(); // Focus on the search box for user input
        }, 10);
    }
});
