// Select the menu button element by its ID
let menu = document.querySelector("#menu-btn")
// Select the navbar element by its class
let navbar = document.querySelector(".navbar")

// When the menu button is clicked
menu.onclick = () =>{
    // Toggle the 'fa-times' class on the menu button (for icon change)
    menu.classList.toggle("fa-times")
    // Toggle the 'active' class on the navbar (for showing/hiding)
    navbar.classList.toggle("active")
}

// When the window is scrolled
window.onscroll = () =>{
    // Remove the 'fa-times' class from the menu button
    menu.classList.remove("fa-times")
    // Remove the 'active' class from the navbar
    navbar.classList.remove("active")
}
