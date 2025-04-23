// NAV MENU CODE START
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navLinks = document.querySelector(".navLinks");


// below toggles the class of the navlinks from hidden to show, so when the user clicks the hamburger menu, they will toggle the secondary class of navlinks 
hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// NAV MENU CODE END



// PROJECT CAROUSEL SLIDER CODE START
const sliderItems = document.querySelectorAll(".projectItem")
console.log(sliderItems)




// below sets up how the slider will look like by default

let currentIndex = 0;

function showProject(current) {
    sliderItems.forEach((item, index) => {
        if (index === current) {
            item.style.display = "block"; // this shows every project item that's equal the first index position in the array
        } else {
            item.style.display = "none"; // this hides every project item not equal the first index position in the array
        }
    });
}

showProject(currentIndex)



// const prevBtn = document.querySelector(".previous")
// console.log(prevBtn)
// const nextBtn = document.querySelector(".next")
// console.log(nextBtn)



// // PREVIOUS BUTTON CODE START
// prevBtn.addEventListener("click", () => {
//     currentIndex = currentIndex - 1;
//     if (currentIndex < 0) {
//         currentIndex = sliderItems.length - 1 // this loops to the last project
//     }
//     console.log("This clicks!")
//     showProject(currentIndex)
// })
// // PREVIOUS BUTTON CODE END



// // NEXT BUTTON CODE START
// nextBtn.addEventListener("click", () => {
//     currentIndex = currentIndex + 1;
//     if (currentIndex >= sliderItems.length) {
//         currentIndex = 0 // this loops back to the first project
//     }
//     console.log("This clicks too!")
//     showProject(currentIndex)
// })
// // NEXT BUTTON CODE END




// PROJECT CAROUSEL SLIDER CODE END



// CONTACT FORM SUBMISSION START
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (event) => {
    event.preventDefault() //this stops the from reloading itself after clicking submit
    const formData = new FormData(contactForm);
    const formCapture = new URLSearchParams(formData);

    console.log("Full Name:", formData.get("fullName"));
    console.log("Email:", formData.get("email"));
    console.log("Message:", formData.get("message"));

    fetch("https://portfolio-website-pogv.onrender.com/contact", {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
        body: formCapture.toString()
    })
        .then(res => res.text())
        .then(data => {
            console.log("Here's your response from the server: ", data)
            alert("Form submission successful!")
        })
        .catch(err => console.error("Here's your fetch error: ", err))
})
// CONTACT FORM SUBMISSION END



