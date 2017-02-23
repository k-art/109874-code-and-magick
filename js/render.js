'use strict';

window.render = (function () {
  var setupWizard = document.querySelector('.setup-wizard');

  return function (newWizard) {
    var customWizardElement = setupWizard.cloneNode(true);
    // console.log(newWizard);

    // console.log(customWizardElement);
    customWizardElement.removeAttribute('class');
    customWizardElement.setAttribute('width', '50');
    customWizardElement.setAttribute('height', '70');
    customWizardElement.style.position = 'static';
    customWizardElement.setAttribute('title', newWizard.name);

    var newWizardCoat = customWizardElement.querySelector('#wizard-coat');
    var newWizardEyes = customWizardElement.querySelector('#wizard-coat');

    newWizardCoat.style.fill = newWizard.colorCoat;
    newWizardEyes.style.fill = newWizard.colorEyes;
    newWizardCoat.removeAttribute('tabindex');
    newWizardEyes.removeAttribute('tabindex');

    return customWizardElement;
  };

})();
