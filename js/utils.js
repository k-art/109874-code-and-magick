'use strict';

window.utils = {
  getRandomElement: function (arr) {
    return Math.floor(Math.random() * arr.length);
  },

  getRandomElementExcept: function (arr, elem) {
    var randomElem = window.utils.getRandomElement(arr);
    while (randomElem === elem) {
      randomElem = window.utils.getRandomElement(arr);
    }
    return randomElem;
  }
};
