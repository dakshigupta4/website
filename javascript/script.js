var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");
var main2 = document.querySelector("#main2");
var full2 = document.querySelector("#full");

menu.addEventListener("click", (event) => {
    full2.style.left = "0";
    main2.style.backgroundColor = "#000000b0";
    event.stopPropagation(); // Prevent closing when clicking on menu icon
});

cross.addEventListener("click", () => {
    closeMenu();
});

// Close when clicking outside
document.addEventListener("click", (event) => {
    if (!full2.contains(event.target) && event.target !== menu) {
        closeMenu();
    }
});

function closeMenu() {
    full2.style.left = "-50%";
    main2.style.backgroundColor = "#00000000";
}

// Optimize Scroll Event Listener
window.addEventListener("scroll", function () {
    let searchIcon = document.getElementById("search");
    let menuIcon = document.querySelector(".ri-menu-4-line");

    let shouldHide = window.scrollY > 50; // Adjust threshold as needed

    if (searchIcon) searchIcon.style.opacity = shouldHide ? "0" : "1";
    if (menuIcon) menuIcon.style.opacity = shouldHide ? "0" : "1";
});
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (event) => {
        console.log("Clicked: ", event.target.href);
    });
});
