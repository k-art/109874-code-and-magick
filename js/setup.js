'use strict';

//
// Открытие и закрытие формы
//
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};

var setupKeydownhandler = function (event) {
  if (event.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
  }
};


var showSetup = function () {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownhandler);
};

var hideSetup = function () {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownhandler);
};

var toggleButton = function () {
  if (setup.classList.contains('invisible')) {
    setupOpen.setAttribute('aria-pressed', 'false');
    setupClose.setAttribute('aria-pressed', 'true');
  } else {
    setupOpen.setAttribute('aria-pressed', 'true');
    setupClose.setAttribute('aria-pressed', 'false');
  }
};

setupOpen.addEventListener('click', function () {
  showSetup();
  toggleButton();
});

setupOpen.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    showSetup();
  }
  toggleButton();
});

setupClose.addEventListener('click', function () {
  hideSetup();
  toggleButton();
});

setupClose.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    hideSetup();
  }
  toggleButton();
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

  return currentColorIndex;
};

wizardCoat.addEventListener('click', function () {
  currentCoatColorIndex = changeColor(wizardCoatColors, currentCoatColorIndex);
  wizardCoat.style.fill = wizardCoatColors[currentCoatColorIndex];
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
  currentEyesColorIndex = changeColor(wizardEyesColors, currentEyesColorIndex);
  wizardEyes.style.fill = wizardEyesColors[currentEyesColorIndex];
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
  currentFireballColorIndex = changeColor(setupFireballColors, currentFireballColorIndex);
  setupFireball.style.background = setupFireballColors[currentFireballColorIndex];
});
