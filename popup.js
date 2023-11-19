document.addEventListener('DOMContentLoaded', function () {
    const urlInput = document.getElementById('urlInput');
    const goButton = document.getElementById('goButton');
  
    goButton.addEventListener('click', function () {
      const url = urlInput.value;
      if (url) {
        // Send the URL to the server
        fetch('http://localhost:3000/api/save-url', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url }),
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            // Optionally, handle the response from the server
          })
          .catch(error => console.error('Error:', error));
      }
    });
  });