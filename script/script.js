'use strict'

import langArr from './lang.js'; //import of language alternatives

let pageTitle = {
  'title': {
    'ru': 'Научиться учиться',
    'en': 'Learning to learn',
  }
};

const ruBttn = document.getElementById('lang-ru');
const enBttn = document.getElementById('lang-en');

enBttn.addEventListener('click', changeLanguage);

function changeLanguage() {
  // defining pressed lang flag
  let target = event.target;
  let lang = target.getAttribute('alt').substr(5).toLowerCase();

  // changing page title
  for (let key in pageTitle) {
    document.querySelector(key).innerHTML = pageTitle[key][lang];
  }
  // changing text in page
  for (let key2 in langArr) {
    let block = document.querySelector('.' + key2);

    for (let key3 in langArr[key2]) {
      let elem = block.querySelectorAll('.' + key3);

      if (elem.length == 1) {
        elem[0].innerHTML = langArr[key2][key3][lang];
      } else {

        for (let i = 0; i < elem.length; i++) {
          elem[i].innerHTML = langArr[key2][key3][i][lang];
        }
      }
    }
  }


  changeSelectedClass();
}

function changeSelectedClass() {
  if (ruBttn.classList.contains('button_selected')) {
    ruBttn.classList.remove('button_selected');
    enBttn.classList.add('button_selected');
    enBttn.removeEventListener('click', changeLanguage);
    ruBttn.addEventListener('click', changeLanguage);

  } else {
    enBttn.classList.remove('button_selected');
    ruBttn.classList.add('button_selected');
    ruBttn.removeEventListener('click', changeLanguage);
    enBttn.addEventListener('click', changeLanguage);
  }
  logoChanger();
}

function logoChanger() {
  let logoElements = document.querySelectorAll('.logo');
  logoElements[0].classList.toggle('logo_place_header-en');
  logoElements[0].classList.toggle('logo_place_header-ru');
  logoElements[1].classList.toggle('logo_place_footer-en');
  logoElements[1].classList.toggle('logo_place_footer-ru');
}
