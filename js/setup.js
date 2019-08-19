var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;


var blockSetup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = blockSetup.querySelector('.setup-close');

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  blockSetup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  blockSetup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var changeFireballColor = blockSetup.querySelector('.setup-fireball-wrap');
var changeCoatColor = blockSetup.querySelector('.wizard-coat');
var changeEyesColor = blockSetup.querySelector('.wizard-eyes');

changeFireballColor.addEventListener('click', function() {
  changeFireballColor.style.background = getRandomElement(wizards, 'fireball');
  blockSetup.querySelector('fireball-color.value') = changeFireballColor.style.background;

})

changeCoatColor.addEventListener('click', function() {
  changeCoatColor.style.fill = getRandomElement(wizards, 'coatColor');
  var valueCoatColor = blockSetup.getElementsByName('coat-color');
  valueCoatColor.property('value') = changeCoatColor.style.fill;

})

changeEyesColor.addEventListener('click', function() {
  changeEyesColor.style.fill = getRandomElement(wizards, 'eyesColor');

})

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
})


document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = {
  count: 4,
  name: ['Lupita Nyongo', 'Paris Hilton', 'Robert Pattinson', 'Brad Pitt'],
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
  fireball: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};

var getRandomElement = function(array, objectKey) {
  return array[objectKey][Math.floor(Math.random()*array[objectKey].length)]
}

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

  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name[i];
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomElement(wizards, 'coatColor');
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomElement(wizards, 'eyesColor');
  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.count; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
