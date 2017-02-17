'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = setup.querySelector('.setup-close');
  var onSetupClose = null;

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

// Смена aria атрибутов у кнопок
  var toggleStateButton = function () {
    var toggle = setup.classList.contains('invisible');
    setupOpen.setAttribute('aria-pressed', !toggle);
    setupClose.setAttribute('aria-pressed', toggle);
  };

// Закрытие формы по Esc
  var escKeydownHandler = function (event) {
    if (window.utils.isDeactivateEvent(event)) {
      hideSetup();
    }
  };

  // Закрытие формы по Enter
  var enterKeydownHandler = function (event) {
    if (window.utils.isActivateEvent(event)) {
      hideSetup();
    }
  };

// Открытие формы
  var showSetup = function (callback) {
    setup.classList.remove('invisible');
    toggleStateButton();

    setupClose.addEventListener('click', hideSetup);
    setupClose.addEventListener('keydown', enterKeydownHandler);
    document.addEventListener('keydown', escKeydownHandler);

    onSetupClose = callback;
  };

// Закрытие формы
  var hideSetup = function () {
    setup.classList.add('invisible');
    toggleStateButton();

    setupClose.removeEventListener('click', hideSetup);
    setupClose.removeEventListener('keydown', enterKeydownHandler);
    document.removeEventListener('keydown', escKeydownHandler);

    if (typeof onSetupClose === 'function') {
      onSetupClose();
    }
  };

// Обработчики открытия формы
  setupOpen.addEventListener('click', function () {
    showSetup();
  });

  setupOpen.addEventListener('keydown', function (event) {
    if (window.utils.isActivateEvent(event)) {
      showSetup(function () {
        setupOpen.focus();
      });
    }
  });

//
// Вызов функции смены цветов у мага
//
// Смена одежды
  window.colorizeElement(wizardCoat, wizardCoatColors, 'fill');
// Изменение цвета глаз
  window.colorizeElement(wizardEyes, wizardEyesColors, 'fill');
// Изменение цвета фаербола
  window.colorizeElement(setupFireball, setupFireballColors, 'background');
})();
