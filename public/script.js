// NAV MENU CODE START
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navLinks = document.querySelector(".navLinks");


// below toggles the class of the navlinks from hidden to show, so when the user clicks the hamburger menu, they will toggle the secondary class of navlinks 
hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// NAV MENU CODE END

// CONTACT FORM SUBMISSION WITH SERVER-PROXIED ZOHO TOKEN
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Get form data
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    try {
        // 1️⃣ Get access token (backend handles CORS)
        const tokenResponse = await fetch("http://localhost:3000/zoho-token", {
            method: "POST"
        });

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;
        console.log("Access Token:", accessToken);

        // 2️⃣ Build lead payload
        const leadData = {
            First_Name: firstName,
            Last_Name: lastName,
            Email: email,
            Description: message
        };

        // 3️⃣ Submit lead via your backend
        const zohoResponse = await fetch("http://localhost:3000/zoho-lead", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(leadData)
        });

        const result = await zohoResponse.json();
        console.log("Zoho Response:", result);

        if (result.data && result.data[0].code === "SUCCESS") {
            alert("Form submission successful!");
            contactForm.reset();
        } else {
            alert("There was an issue submitting your form. Check console.");
        }

    } catch (err) {
        console.error("Error submitting lead:", err);
        alert("Something went wrong. Check console.");
    }
});
