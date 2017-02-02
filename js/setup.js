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

var changeColor = function (colorsList, currentColorIndex) {
  currentColorIndex++;

  if (currentColorIndex === colorsList.length) {
    currentColorIndex = 0;
  }

  return colorsList[currentColorIndex];
};

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = changeColor(wizardCoatColors, currentCoatColorIndex);
  currentCoatColorIndex = wizardCoatColors.indexOf(wizardCoat.style.fill);
});


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

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = changeColor(wizardEyesColors, currentEyesColorIndex);
  currentEyesColorIndex = wizardEyesColors.indexOf(wizardEyes.style.fill);
});

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

setupFireball.addEventListener('click', function () {
  setupFireball.style.background = changeColor(setupFireballColors, currentFireballColorIndex);
  currentFireballColorIndex = setupFireballColors.indexOf(changeColor(setupFireballColors, currentFireballColorIndex));
});
