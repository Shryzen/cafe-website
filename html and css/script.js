function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        mainContent.classList.remove("sidebar-open");
    } else {
        sidebar.style.width = "250px";
        mainContent.classList.add("sidebar-open");
    }
}
const showPopopBtn= document.querySelector(".login");
const formPopup= document.querySelector(".form-popup");
const hidePopopBtn= document.querySelector(".form-popup .close-btn");
const loginSignuplink= document.querySelectorAll(".form-box .bottom-link a");
//show the popup button
showPopopBtn.addEventListener("click",  () => {
    document.body.classList.toggle("show-popup");
});
// hide the popup box
hidePopopBtn.addEventListener("click", () => showPopopBtn.click());
loginSignuplink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? "add" : "remove"]("show-signup");

    });
});
// for the popup of the reservation
 
