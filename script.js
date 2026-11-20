const button = document.querySelector('#exampleButton');
const example = document.querySelector('#htmlExample');

button.addEventListener('click', () => {
  const isHidden = example.classList.toggle('d-none');
  button.textContent = isHidden ? 'Ver ejemplo' : 'Ocultar ejemplo';
  button.setAttribute('aria-expanded', String(!isHidden));
});