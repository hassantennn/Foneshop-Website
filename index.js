document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data using FormData
    var formData = new FormData(this);

    // Make an AJAX request to the server
    fetch('/submit-form', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle the server response
        console.log(data);
        // Optionally, update the UI based on the response
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors, such as showing an error message to the user
    });
});