'use strict';

var ENTER_KEY_CODE = 13;

window.utils = {
  getRandomElement: function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  getRandomElementExcept: function (arr, elem) {
    var randomElem = window.utils.getRandomElement(arr);
    while (randomElem === elem) {
      randomElem = window.utils.getRandomElement(arr);
    }
    return randomElem;
  },

  isActivateEvent: function (event) {
    return event.keyCode && event.keyCode === ENTER_KEY_CODE;
  }
};
