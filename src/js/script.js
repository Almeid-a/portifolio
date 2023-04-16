
const menu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria');


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-x');
    navMenu.classList.toggle('ativado');
  
    // Desativa o menu se algum botão for selecionado
    if (navMenu.classList.contains('ativado')) {
      const menuItems = navMenu.querySelectorAll('a');
      menuItems.forEach(item => {
        item.addEventListener('click', () => {
          menu.classList.remove('fa-x');
          navMenu.classList.remove('ativado');
        });
      });
    }
  });