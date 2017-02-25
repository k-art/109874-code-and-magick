'use strict';

window.colorizeElement = (function () {
  return function (element, colors, callback) {

    var currentColor = callback(element, colors[0]);
    var changeEvent = document.createEvent('Event');
    changeEvent.initEvent('change', true, true);

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
