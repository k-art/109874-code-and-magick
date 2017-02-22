'use strict';

window.render = (function () {
  var setupWizard = document.querySelector('.setup-wizard');

  return function (newWizard) {
    // console.log(newWizard);

    var customWizardElement = setupWizard.cloneNode(true);
    // console.log(customWizardElement);

    customWizardElement.style.position = 'static';
    customWizardElement.style.width = 50;
    customWizardElement.style.height = 50;
    customWizardElement.setAttribute('title', newWizard.name);

    var svgElement = customWizardElement.children[0];
    // console.log(svgElement);

    var newWizardCoat = svgElement.querySelector('#wizard-coat');
    var newWizardEyes = svgElement.querySelector('#wizard-coat');

    newWizardCoat.style.fill = newWizard.colorCoat;
    newWizardEyes.style.fill = newWizard.colorEyes;
    newWizardCoat.removeAttribute('tabindex');
    newWizardEyes.removeAttribute('tabindex');

    return customWizardElement;
  };

})();
