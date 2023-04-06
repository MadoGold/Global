"use strict"

const navLinks = document.querySelectorAll('.nav__item');
const searchInput = document.querySelector('.search__input input');
const searchBtn = document.querySelector('.search__btn');
const description = document.querySelector('.hero__description');

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    navLinks.forEach((link) => {
      link.classList.remove('active')
    })
    navLink.classList.toggle('active')
  })
})

searchInput.addEventListener('input', () => {
  const inputValue = searchInput.value;
  const regex = /[@#$%^&*()!]/g;
  const isDisabled = inputValue.length < 4 || inputValue.length > 12 || regex.test(inputValue);

  searchBtn.disabled = isDisabled;
});

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://baconipsum.com/api/?type=lucky');
xhr.onload = function() {
  if (xhr.status === 200) {
    description.textContent = JSON.parse(xhr.responseText)[0];
  } else {
    console.log('Error:', xhr.statusText);
  }
};
xhr.send();

