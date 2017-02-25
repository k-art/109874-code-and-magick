'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = setup.querySelector('.setup-close');
  var setupSimilar = document.querySelector('.setup-similar');
  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/code-and-magick/data';
  var wizards = [];
  var onSetupClose;

  var wizard = document.querySelector('#wizard');
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

  var loadWizards = function (onDataLoaded) {
    window.load(DATA_URL, function (data) {
      wizards = JSON.parse(data);
      if (({}).toString.call(onDataLoaded) === '[object Function]') {
        onDataLoaded(wizards);
      }
    });
  };

  var renderWizards = function (loadedWizards) {
    var localWizards = loadedWizards.map(function (item) {
      return item;
    });

    var fragment = document.createDocumentFragment();

    if (localWizards.length > 5) {
      for (var i = 0; i < 5; i++) {
        var index = window.utils.getRandomIndex(localWizards);
        fragment.appendChild(window.render(localWizards[index]));
        localWizards.splice(index, 1);
      }
    } else {
      localWizards.forEach(function (newWizard) {
        fragment.appendChild(window.render(newWizard));
      });
    }
    setupSimilar.innerHTML = '';
    setupSimilar.appendChild(fragment);
  };

  var setupChangeTimeoutId;
  var SETUP_WIZARD_RENDER_TIMEOUT = 5000; // 5 sec

  setup.addEventListener('change', function () {
    clearTimeout(setupChangeTimeoutId);
    setupChangeTimeoutId = window.setTimeout(function () {
      renderWizards(wizards);
    }, SETUP_WIZARD_RENDER_TIMEOUT);
  });

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
    loadWizards(renderWizards);
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
