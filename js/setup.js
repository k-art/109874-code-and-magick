'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');

var ESCAPE_KEY_CODE = 27;

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
var wizardEyes = wizart.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var setupFireball = setup.querySelector('.setup-fireball-wrap');
var setupFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var setupKeydownHandler = function (event) {
  if (event.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
    toggleStateButton();
  }
};

// Открытие формы
var showSetup = function () {
  setup.classList.remove('invisible');
  toggleStateButton();
  document.addEventListener('keydown', setupKeydownHandler);
};

// Закрытие формы
var hideSetup = function () {
  setup.classList.add('invisible');
  toggleStateButton();
  document.removeEventListener('keydown', setupKeydownHandler);
};

var toggleStateButton = function () {
  var toggle = setup.classList.contains('invisible');
  setupOpen.setAttribute('aria-pressed', !toggle);
  setupClose.setAttribute('aria-pressed', toggle);
};

setupOpen.addEventListener('click', function () {
  showSetup();
});

setupOpen.addEventListener('keydown', function (event) {
  if (window.utils.isActivateEvent(event)) {
    showSetup();
  }
});

setupClose.addEventListener('click', function () {
  hideSetup();
});

setupClose.addEventListener('keydown', function (event) {
  if (window.utils.isActivateEvent(event)) {
    hideSetup();
  }
});

// Смена одежды
window.colorizeElement(wizardCoat, wizardCoatColors, 'fill');
// Изменение цвета глаз
window.colorizeElement(wizardEyes, wizardEyesColors, 'fill');
// Изменение цвета фаербола
window.colorizeElement(setupFireball, setupFireballColors, 'background');
