// Declarando o header e o botão menu como variáveis
const header = document.querySelector('header');
const buttonHeader = document.querySelector('#openHeader');

// Evento de rolagem (mostra/oculta header)
document.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    buttonHeader.style.display = 'none';
    header.style.display = 'flex';
  } else {
    buttonHeader.style.display = 'flex';
    header.style.display = 'none';
  }
})

// Funcionamento botão menu
const openHeader = () => {
  buttonHeader.style.display = 'none';
  header.style.position = 'fixed';
  header.style.top = '0';
  header.style.display = 'flex';
}