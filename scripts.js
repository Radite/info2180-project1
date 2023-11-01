document.addEventListener("DOMContentLoaded", function() {
    // Get the form by its tag
    const form = document.querySelector(".newsletter form");

    // Add an event listener for the 'submit' event
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the email address from the input field
        const email = document.getElementById("email").value;

        // Get the div with the class 'message' 
        const messageDiv = document.querySelector(".newsletter .message");

        //Validate email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        // Check if the email field is empty
        if (email.trim() === "") {
            displayMessage("Error: Please enter an email address.", "red");
        } 
        // Check if the email format is valid
        else if (!emailPattern.test(email)) {
            displayMessage("Error: Please enter a valid email format.", "red");
        } 
        // If everything is fine, show the thank you message
        else {
            displayMessage(`Thank you! Your email address ${email} has been added to our mailing list!`, "green");
        }
    });

    function displayMessage(message, color) {
        const messageDiv = document.querySelector(".newsletter .message");
        messageDiv.textContent = message;
        messageDiv.style.color = color;
    }
});
