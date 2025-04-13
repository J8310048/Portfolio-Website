const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navLinks = document.querySelector(".navLinks")





// below connects the hamburger menu and navlinks together by adding an event listener to the menu and having the click event display the links by using the "show" class in the CSS file
hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show")


    console.log(navLinks)
    console.log(hamburgerMenu)
})

