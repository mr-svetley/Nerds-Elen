var modalOpen = document.querySelector('.modal-open');
var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal-close');


modalOpen.addEventListener('click', (evt) => {
  modal.style.display = 'block';
})

modalClose.addEventListener('click', (evt) => {
  modal.style.display = 'none';
})