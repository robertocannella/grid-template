import css from './style.scss'


var i = 0
export default function menu() {
    const sideNav = document.getElementById("navigation-menu");
    const content = document.getElementById("content");
    const largeScreen = (window.innerWidth > 599)
    sideNav.classList.toggle('open');
    if (largeScreen) {
        if (sideNav.classList.contains('open')) {
            content.style.marginLeft = '250px';
            return
        }
    }
    content.style.marginLeft = '0';


    if (i == 0) {
        //document.getElementById("navigation-menu").style.left = '0px';
        document.getElementById("mini-menu").style.left = '-30px';
        i = 1;
        //    document.getElementById("toggle").src = "../images/menu.svg";
        //    document.getElementById("icons").style.display = 'Block';
        //    console.log("Colapsing menu.");
    }
    else {
        //document.getElementsByClassName("navigation-menu").style.left = '-250px';
        document.getElementById("mini-menu").style.left = '0px'
        i = 0;
        //   document.getElementById("toggle").src = "../images/menu_open.svg";
        //   document.getElementById("icons").style.display = 'none';
        //    console.log("Expanding menu.");
    }
}
export function loadPage() {
    const largeScreen = (window.innerWidth > 599)
    if (largeScreen)
        menu()
}
export function screenResized() {
    const smallScreen = (window.innerWidth < 599)
    const navBar = document.getElementById("navigation-menu");
    const content = document.getElementById('content');
    if (smallScreen) {
        navBar.classList.remove('open')
        content.style.marginLeft = '0'
    } else {
        navBar.classList.add('open')
        content.style.marginLeft = '250px'
    }

}
window.addEventListener('DOMContentLoaded', () => { loadPage() })
window.addEventListener('resize', () => { screenResized() });
window.menu = menu;