'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  return {
    getRandomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },

    getRandomElementWithIndex: function (arr) {
      var index = Math.floor(Math.random() * arr.length);
      return {element: arr[index], index: index};
    },

    getRandomIndex: function (arr) {
      return Math.floor(Math.random() * arr.length);
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
    },

    isDeactivateEvent: function (event) {
      return event.keyCode && event.keyCode === ESCAPE_KEY_CODE;
    }
  };
})();

