const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  // toggles the presence of the class "active" on the element with the class "search". If the element does not have the class "active", it will be added. If the element already has the class "active", it will be removed.
  search.classList.toggle('active');
  input.focus();
});
