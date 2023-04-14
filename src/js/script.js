
const menu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria');


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})