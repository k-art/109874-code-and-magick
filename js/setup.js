'use strict';

//
// Открытие и закрытие формы
//
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

//
//  Валидация ввода имени персонажа
//
var setupUserName = setup.querySelector('.setup-user-name');

if (!setupUserName.hasAttribute('required')) {
  setupUserName.required = true;
}

if (!setupUserName.hasAttribute('maxLength')) {
  setupUserName.setAttribute('maxLength', '50');
}

//
// Кастомизация мага
//

// Смена одежды
var wizart = document.querySelector('#wizard');
var wizardCoat = wizart.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var currentCoatColorIndex = 0;

wizardCoat.style.fill = wizardCoatColors[currentCoatColorIndex];

function changeCoatColor() {
  currentCoatColorIndex++;

  if (currentCoatColorIndex === wizardCoatColors.length) {
    currentCoatColorIndex = 0;
  }
  wizardCoat.style.fill = wizardCoatColors[currentCoatColorIndex];
}
wizardCoat.addEventListener('click', changeCoatColor);

// Изменение цвета глаз
var wizardEyes = wizart.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var currentEyesColorIndex = 0;

function changeEyesColor() {
  currentEyesColorIndex++;

  if (currentEyesColorIndex === wizardEyesColors.length) {
    currentEyesColorIndex = 0;
  }
  wizardEyes.style.fill = wizardEyesColors[currentEyesColorIndex];
}
wizardEyes.addEventListener('click', changeEyesColor);

// Изменение цвета фаербола
var setupFireball = setup.querySelector('.setup-fireball-wrap');
var setupFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var currentFireballColorIndex = 0;

function changeFireballColor() {
  currentFireballColorIndex++;

  if (currentFireballColorIndex === setupFireballColors.length) {
    currentFireballColorIndex = 0;
  }
  setupFireball.style.background = setupFireballColors[currentFireballColorIndex];
}
setupFireball.addEventListener('click', changeFireballColor);
