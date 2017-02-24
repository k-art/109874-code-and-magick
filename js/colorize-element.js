'use strict';

window.colorizeElement = (function () {
  return function (element, colors, callback) {

    var currentColor = callback(element, colors[0]);
    var changeEvent;
    try {
      changeEvent = new Event('change', {bubbles: true});
    } catch (err) {
      changeEvent = document.createEvent('Event'); // Для IE 11
      changeEvent.initEvent('change', true, true);
    }

    function changeColor() {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);
      callback(element, currentColor);
      element.dispatchEvent(changeEvent);
    }

    element.addEventListener('click', changeColor);
    element.addEventListener('keydown', function (event) {
      if (window.utils.isActivateEvent(event)) {
        changeColor();
      }
    });
  };
})();
