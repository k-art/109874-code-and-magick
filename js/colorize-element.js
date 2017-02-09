'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = element.style[property];

  element.addEventListener('click', function () {
    currentColor = colors[window.utils.getRandomElementExcept(colors, colors.indexOf(currentColor))];
    element.style[property] = currentColor;
  });
};
