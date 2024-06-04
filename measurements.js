// Optional JavaScript for additional animations or interactivity
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("customer-id");
    const button = document.querySelector("button");

    button.addEventListener("click", () => {
        if (inputField.value === "") {
            alert("Please enter your Customer Reference ID");
        } else {
            alert(`Customer Reference ID: ${inputField.value}`);
        }
    });
});
