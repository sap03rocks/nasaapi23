// Get today's date
var today = new Date();
var year = today.getFullYear();
var month = String(today.getMonth() + 1).padStart(2, '0');
var day = String(today.getDate()).padStart(2, '0');
var todayDate = year + "-" + month + "-" + day;

// Set the default date value to today's date in the date input field
document.getElementById("date").value = todayDate;

// Function to fetch and update data based on the selected date
function fetchData(date) {
    // NASA API endpoint for the Astronomy Picture of the Day (APOD)
    var apodEndpoint = "https://api.nasa.gov/planetary/apod?api_key=XSJ53BCCDB8evXgdjyZbQ5EjBqulXX7PK91RyaFQ&date=" + date;

    // Send a GET request to the API endpoint
    fetch(apodEndpoint)
        .then(response => response.json())
        .then(data => {
            // Extract the relevant information
            var title = data.title;
            var explanation = data.explanation;
            var url = data.url;

            // Update the DOM with the retrieved data
            document.getElementById("title").textContent = title;
            document.getElementById("image").src = url;
            document.getElementById("explanation").textContent = explanation;
        })
        .catch(error => {
            // Display an error message in case of API request failure
            console.log("Error:", error);
        });
}

// Fetch data for the default date (today's date)
fetchData(todayDate);

// Event listener for form submission
document.getElementById("dateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve the selected date from the form
    var selectedDate = document.getElementById("date").value;

    // Fetch data based on the selected date
    fetchData(selectedDate);
});
