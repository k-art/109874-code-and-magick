'use strict';

window.colorizeElement = (function () {
  return function (element, colors, callback) {

    var currentColor = callback(element, colors[0]);

    function changeColor() {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);
      callback(element, currentColor);
    }

    element.addEventListener('click', changeColor);
    element.addEventListener('keydown', function (event) {
      if (window.utils.isActivateEvent(event)) {
        changeColor();
      }
    });
  };
})();
