document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("customer-id");
    const button = document.querySelector("button");

    button.addEventListener("click", () => {
        if (inputField.value === "") {
            alert("Please enter your Customer Reference ID");
        } else {
            // Redirect to a new HTML page
            window.location.href = "measurements.html";
        }
    });
});
