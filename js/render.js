'use strict';

window.render = (function () {
  var setupWizard = document.querySelector('.setup-wizard');

  var replaceIdWithClass = function (rootNode) {
    [].forEach.call(rootNode.childNodes, function (node) {
      var id = node.id;
      if (id) {
        node.removeAttribute('id');
        node.setAttribute('class', id);
        replaceIdWithClass(node);
      }
    });
  };

  return function (newWizard) {
    var customWizardElement = setupWizard.cloneNode(true);
    var newWizardCoat = customWizardElement.querySelector('#wizard-coat');
    var newWizardEyes = customWizardElement.querySelector('#wizard-eyes');

    customWizardElement.removeAttribute('class');
    customWizardElement.setAttribute('width', '50');
    customWizardElement.setAttribute('height', '70');
    customWizardElement.style.position = 'static';
    customWizardElement.setAttribute('title', newWizard.name);
    customWizardElement.querySelector('title').textContent = newWizard.name;

    newWizardCoat.style.fill = newWizard.colorCoat;
    newWizardEyes.style.fill = newWizard.colorEyes;
    newWizardCoat.removeAttribute('tabindex');
    newWizardEyes.removeAttribute('tabindex');

    replaceIdWithClass(customWizardElement);

    return customWizardElement;
  };
})();
