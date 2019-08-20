var fireballSize = 22;
var getFireballSpeed = function (left) {
  return left ? 5 : 2;
};

var wizardSpeed = 3;
var wizardWidth = 70;

var getWizardHeight = function () {
  return wizardWidth * 1.337;
};

var getWizardX = function (width) {
  return width * 0.5;
};
var getWizardY = function (height) {
  return height * 0.337;
};
