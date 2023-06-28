
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

  var nomeElement = document.querySelector(".nome");
  var digitandoElement = document.querySelector(".digitando");
  
  var textoCompletoNome = nomeElement.innerHTML;
  
  nomeElement.innerHTML = "";
  
  var indiceNome = 0;
  
  function exibirCaractereNome() {
    nomeElement.innerHTML += textoCompletoNome.charAt(indiceNome);
    indiceNome++;
    if (indiceNome < textoCompletoNome.length) {
      setTimeout(exibirCaractereNome, 50);
    } else {
      setTimeout(iniciarDigitando, 500); 
    }
  }
  
  function iniciarDigitando() {
    digitandoElement.style.visibility = "visible";
  
    var textoCompletoDigitando = digitandoElement.innerHTML;
  
    digitandoElement.innerHTML = "";
  
    var indiceDigitando = 0;
  
    function exibirCaractereDigitando() {
      digitandoElement.innerHTML += textoCompletoDigitando.charAt(indiceDigitando);
      indiceDigitando++;
      if (indiceDigitando < textoCompletoDigitando.length) {
        setTimeout(exibirCaractereDigitando, 50);
      } else {
        iniciarBarraPiscando();
      }
    }
  
    exibirCaractereDigitando();
  }
  
  function iniciarBarraPiscando() {
    digitandoElement.innerHTML += '<span class="barra-piscando">|</span>';
    setInterval(piscarBarra, 500); // Define um intervalo de 500ms para piscar a barra
  }
  
  function piscarBarra() {
    var barraElement = document.querySelector(".barra-piscando");
    barraElement.style.visibility = barraElement.style.visibility === "hidden" ? "visible" : "hidden";
  }
  
  digitandoElement.style.visibility = "hidden";
  
  exibirCaractereNome();