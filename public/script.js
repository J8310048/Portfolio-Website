// NAV MENU CODE START
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navLinks = document.querySelector(".navLinks");


// below toggles the class of the navlinks from hidden to show, so when the user clicks the hamburger menu, they will toggle the secondary class of navlinks 
hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// NAV MENU CODE END





// CONTACT FORM SUBMISSION WITH VALIDATION START
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop form from reloading

    // Grab values
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Grab error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (!name) {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    if (!email) {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    if (!message) {
        messageError.textContent = "Message is required.";
        isValid = false;
    }

    if (!isValid) {
        return; // STOP if invalid
    }

    // Proceed with submission if valid
    const formData = new FormData(contactForm);
    const formCapture = new URLSearchParams(formData);

    console.log("Full Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    fetch("https://portfolio-website-pogv.onrender.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formCapture.toString()
    })
        .then(res => res.text())
        .then(data => {
            console.log("Here's your response from the server:", data);
            alert("Form submission successful!");
            contactForm.reset(); // Clear form after success
        })
        .catch(err => console.error("Here's your fetch error:", err));
});
// CONTACT FORM SUBMISSION WITH VALIDATION END





