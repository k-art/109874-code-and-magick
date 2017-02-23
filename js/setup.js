'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = setup.querySelector('.setup-close');
  var onSetupClose = null;

  var wizard = document.querySelector('#wizard');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = wizard.querySelector('#wizard-coat');
  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var wizardEyes = wizard.querySelector('#wizard-eyes');
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

  var renderWizards = function () {
    var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/code-and-magick/data';
    var setupSimilar = document.querySelector('.setup-similar');
    var wizards = [];

    window.load(DATA_URL, function (data) {

      wizards = JSON.parse(data);

      var fragment = document.createDocumentFragment();
      for (var i = 0; i < 5; i++) {
        var currentWizard = wizards[i];
        var randomWizard = window.utils.getRandomElementExcept(wizards, currentWizard);

        fragment.appendChild(window.render(randomWizard));
      }
      setupSimilar.appendChild(fragment);
    });
  };

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

    // пробовал 'change', но не сработало...
    setupWizard.addEventListener('click', function () {
      window.setTimeout(renderWizards, 3000);
    });

    onSetupClose = callback;
  };

// Закрытие формы
  var hideSetup = function () {
    setup.classList.add('invisible');
    toggleStateButton();

    setupClose.removeEventListener('click', hideSetup);
    setupClose.removeEventListener('keydown', enterKeydownHandler);
    document.removeEventListener('keydown', escKeydownHandler);

    if (({}).toString.call(onSetupClose) === '[object Function]') {
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

  // callback для colorizeElement
  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

//
// Вызов функции смены цветов у мага
//
// Смена одежды
  window.colorizeElement(wizardCoat, wizardCoatColors, fillElement);
// Изменение цвета глаз
  window.colorizeElement(wizardEyes, wizardEyesColors, fillElement);
// Изменение цвета фаербола
  window.colorizeElement(setupFireball, setupFireballColors, changeElementBackground);
})();
