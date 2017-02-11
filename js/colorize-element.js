'use strict';

window.colorizeElement = function (element, colors, property) {
  element.style[property] = colors[0];

  var currentColor = element.style[property];

  function changeColor() {
    currentColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = currentColor;
  }

  element.addEventListener('click', changeColor);
  element.addEventListener('keydown', function (event) {
    if (window.utils.isActivateEvent(event)) {
      changeColor();
    }
  });
};
