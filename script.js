const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-menu-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const closePopupBtn = document.querySelector(".close-btn");
const loginSignupLink = document.querySelectorAll(".button-link a");

menuBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

hideMenuBtn.addEventListener("click", () => menuBtn.click());

showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

closePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(link.id);
    formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});
