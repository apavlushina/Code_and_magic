var blockSetup = document.querySelector('.setup');
blockSetup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');
//var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardNames = ['Lupita Nyongo', 'Paris Hilton', 'Robert Pattinson', 'Brad Pitt'];

var wizards = [
  {name: wizardNames[0],
  coatColor: 'rgb(0, 0, 0)',
  eyesColor: 'black'},

  {name: wizardNames[1],
  coatColor: 'rgb(215, 210, 55)',
  eyesColor: 'green'},

  {name: wizardNames[2],
  coatColor: 'rgb(146, 100, 161)',
  eyesColor: 'red'},

  {name: wizardNames[3],
  coatColor: 'rgb(56, 159, 117)',
  eyesColor: 'blue'}
];

// for (var i = 0; i < wizards.length; i++) {
// var wizardElement = similarWizardTemplate.cloneNode(true);
//
//   wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
//   wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
//   wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
//
//   similarListElement.appendChild(wizardElement);
// }



var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

// userDialog.querySelector('.setup-similar').classList.remove('hidden');
