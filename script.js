// Shop Now button smooth scroll
const heroButton = document.querySelector(".hero button");
if (heroButton) {
    heroButton.addEventListener("click", function () {
        document.querySelector("#products").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Add to Cart buttons functionality
const cartButtons = document.querySelectorAll("#products button");
cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Product added to cart! 🛒");
    });
});

// Login / Sign Up Popup Elements
const loginButton = document.querySelector("header button");
const popup = document.getElementById("loginPopup");
const closeButton = document.querySelector(".close");
const submitButton = document.getElementById("loginSubmit");

// Open Popup
if (loginButton) {
    loginButton.addEventListener("click", function () {
        popup.style.display = "flex";
    });
}

// Close Popup
if (closeButton) {
    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });
}

// Submit Form
if (submitButton) {
    submitButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form reload

        const name = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (name === "" || email === "" || password === "") {
            alert("Please fill all the fields.");
        } else {
            alert("Welcome to ShopEase, " + name + "! 🎉");
            popup.style.display = "none";
        }
    });
}