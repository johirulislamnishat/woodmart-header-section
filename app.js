const menubtn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const menuClose = document.querySelector(".close");

menubtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
menubtn.addEventListener("click", () => {
    // console.log('btn')
    menuClose.classList.add("close");
});