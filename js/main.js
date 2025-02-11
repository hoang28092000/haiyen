const toggle = document.querySelector(".icon-menu");
const menu = document.querySelector(".nav-links");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu() {
    menu.classList.add("show");
}

document.addEventListener("click" , handClickOutMenu);
function handClickOutMenu(event){
    if(!menu.contains(event.target) && !event.target.matches(".icon-menu")){
        menu.classList.remove("show");
    }
}


window.addEventListener("scroll", function() {
    var nav = document.querySelector(".nav");
    if (window.scrollY > 218) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }
});
