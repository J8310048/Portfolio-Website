
// NAV MENU CODE START
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navLinks = document.querySelector(".navLinks");


// below connects the hamburger menu and navlinks together by adding an event listener to the menu and having the click event display the links by using the "show" class in the CSS file
hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");


    console.log(navLinks);
    console.log(hamburgerMenu);
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



const prevBtn = document.querySelector(".previous")
console.log(prevBtn)
const nextBtn = document.querySelector(".next")
console.log(nextBtn)

prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = sliderItems.length - 1 // this loops to the last project
    }
    console.log("This clicks!")
    showProject(currentIndex)
})

nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex + 1;
    if (currentIndex >= sliderItems.length) {
        currentIndex = 0 // this loops back to the first project
    }
    console.log("This clicks too!")
    showProject(currentIndex)
})

// PROJECT CAROUSEL SLIDER CODE END


// TESTIMONIAL CAROUSEL SLIDER CODE START


// TESTIMONIAL CAROUSEL SLIDER CODE END
