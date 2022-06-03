import css from './style.scss'
var i = 1
export function menu() {
    if (i == 0) {
        document.getElementById("navigation-menu").style.left = '0px';
        document.getElementById("mini-menu").style.left = '-30px';
        i = 1;
        //    document.getElementById("toggle").src = "../images/menu.svg";
        //    document.getElementById("icons").style.display = 'Block';
        //    console.log("Colapsing menu.");
    }
    else {
        document.getElementById("navigation-menu").style.left = '-150px';
        document.getElementById("mini-menu").style.left = '0px'
        i = 0;
        //   document.getElementById("toggle").src = "../images/menu_open.svg";
        //   document.getElementById("icons").style.display = 'none';
        //    console.log("Expanding menu.");
    }
}
window.menu = menu;
const body = document.querySelector('body');
body.appendChild('div')