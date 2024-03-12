let icon = document.querySelector(".menu-icon");
let nav = document.querySelector(".nav");
let toggle = document.getElementById("toggle");
let container = document.querySelector(".container");

icon.addEventListener("click", () => {
    nav.classList.toggle("active");
})

toggle.addEventListener("change", (e) => {
    let checked = e.target.checked;
    document.body.classList.toggle("dark");
    
})