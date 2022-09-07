'use strict';
//variables for holding the value of querySelector.
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
// this function is for opening the window.
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// this function is for closing the modal window.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// this loop gonna interact with all three of them.
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal);

//calling function to close the window.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// closing the window by esc key.
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
