// select dom items

const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuLogo = document.querySelector(".menu-logo");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");


// set initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menuNav.classList.add('show');
        menu.classList.add('show');
        menuLogo.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        //reset the menu state

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        menu.classList.remove('show');
        menuLogo.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        //reset the menu state

        showMenu = false;
    }
}

// gallery handler

const imgs = document.querySelectorAll('.images img');
const modalImg = document.querySelector('.modal-item-img')
const modal = document.querySelector('.modal-img');
const closeBtn = document.querySelector('.modal-close');


    imgs.forEach(img => addEventListener('click', (e) => {
        if (e.target == img) {
        modalImg.src = e.target.src;
        modal.classList.add('modal-show');
        //close modal
        closeBtn.addEventListener('click', () => modal.classList.remove('modal-show'));
        }
                   }));







    

    
                