const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav_menu');

// open nav menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})
const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}
closeBtn.addEventListener('click',closeNav);

// close nav menu
if(window.innerWidth < 1024){
    document.querySelectorAll(".nav_menu li a").forEach(navItem => {
        navItem.addEventListener('click',closeNav)
    })
}
// change navbar style
window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})
