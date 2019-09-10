'use strict';

/* Theme Switch */
const themeSwitch = document.querySelector('.theme-switch .button');
const themeSwitchBlock = document.querySelector('.theme-switch');
const themeAtom = document.querySelector('.atom-theme');
const themeNice = document.querySelector('.nice-theme');

themeSwitch.addEventListener('click', () => {
  switchTheme();
})

function switchTheme() {
  themeAtom.classList.toggle('active');
  themeNice.classList.toggle('active');
  themeSwitchBlock.classList.toggle('hidden');
};