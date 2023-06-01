window.addEventListener('load', function() {
    // Code to execute when the page finishes loading
    alert('Welcome to India!');
  });
  
  document.getElementById('search-button').addEventListener('click', function() {
    // Code to execute when the search button is clicked
    var searchInput = document.getElementById('search-input').value;
  
    // Perform search logic here
    alert('You searched for: ' + searchInput);
  });
  