function pizza_click() {
    document.getElementById('pizza_but').classList.add("nav-menu-selected");
    document.getElementById('snack_but').classList.remove("nav-menu-selected");
    document.getElementById('drink_but').classList.remove("nav-menu-selected");

    document.getElementById('menu-frame').style.height = '195vw';
}

function snack_click() {
    document.getElementById('pizza_but').classList.remove("nav-menu-selected");
    document.getElementById('snack_but').classList.add("nav-menu-selected");
    document.getElementById('drink_but').classList.remove("nav-menu-selected");

    document.getElementById('menu-frame').style.height = '67vw';
}

function drink_click() {
    document.getElementById('pizza_but').classList.remove("nav-menu-selected");
    document.getElementById('snack_but').classList.remove("nav-menu-selected");
    document.getElementById('drink_but').classList.add("nav-menu-selected");

    document.getElementById('menu-frame').style.height = '55.4vw';
}