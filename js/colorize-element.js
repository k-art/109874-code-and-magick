'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = element.style[property];

  function changeColor() {
    currentColor = colors[window.utils.getRandomElementExcept(colors, colors.indexOf(currentColor))];
    element.style[property] = currentColor;
  }
  element.addEventListener('click', changeColor);
  element.addEventListener('keydown', function (event) {
    if (event.keyCode && event.keyCode === 13) {
      changeColor();
    }
  });
};
